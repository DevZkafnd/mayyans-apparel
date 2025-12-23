"use client";

import { useEffect } from "react";

export default function AntiDevTools() {
  useEffect(() => {
    if (process.env.NODE_ENV === "development") return; // Optional: Allow in dev mode

    // 1. Disable Right Click
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
      e.stopPropagation();
      return false;
    };

    // 2. Disable Keyboard Shortcuts
    const handleKeyDown = (e: KeyboardEvent) => {
      if (
        e.key === "F12" ||
        (e.ctrlKey && e.shiftKey && (e.key === "I" || e.key === "J" || e.key === "C" || e.key === "K")) ||
        (e.ctrlKey && e.key === "U") ||
        (e.ctrlKey && e.key === "S") ||
        (e.ctrlKey && e.key === "H") ||
        (e.altKey && e.metaKey && e.key === "I") // Mac
      ) {
        e.preventDefault();
        e.stopPropagation();
        return false;
      }
    };

    // 3. Aggressive DevTools Detection
    const triggerLockout = () => {
        try {
            // 1. Stop all execution and network
            window.stop();
            
            // 2. Clear Storage
            try {
                localStorage.clear();
                sessionStorage.clear();
                document.cookie.split(";").forEach((c) => {
                    document.cookie = c.replace(/^ +/, "").replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/");
                });
            } catch (e) {
                // Ignore storage errors
            }

            // 3. Nuke the DOM completely (Head + Body) to hide assets
            document.documentElement.innerHTML = '';
            
            // 4. Re-render only the warning
            document.write(`
                <!DOCTYPE html>
                <html>
                <head>
                    <title>ACCESS DENIED</title>
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <style>
                        body {
                            background: #000;
                            color: #ff0000;
                            height: 100vh;
                            width: 100vw;
                            margin: 0;
                            display: flex;
                            flex-direction: column;
                            justify-content: center;
                            align-items: center;
                            font-family: monospace;
                            text-align: center;
                            overflow: hidden;
                        }
                        h1 { font-size: 2rem; margin-bottom: 1.5rem; line-height: 1.4; }
                        button {
                            margin-top: 2rem;
                            padding: 1rem 2rem;
                            background: #ff0000;
                            color: white;
                            border: none;
                            font-family: monospace;
                            cursor: pointer;
                            font-size: 1.2rem;
                            border-radius: 8px;
                        }
                    </style>
                </head>
                <body>
                    <h1>Mau nyari apa sii mass/mba??<br/>mending sini ngobrol sama aku di dm ig @zkafnd, oke?</h1>
                    <button onclick="window.location.reload()">MAAF SAYA KHILAF</button>
                    <script>
                        // Trap everything
                        setInterval(() => { debugger; }, 50);
                        window.stop();
                    </script>
                </body>
                </html>
            `);
            document.close();
            
            throw new Error("Security Violation: DevTools Detected");
        } catch (e) {
            // Fallback if document.write fails (e.g. strict CSP)
             document.documentElement.innerHTML = 'Access Denied';
             window.location.reload();
        }
    };

    const detectDevTools = () => {
      const widthThreshold = window.outerWidth - window.innerWidth > 160;
      const heightThreshold = window.outerHeight - window.innerHeight > 160;
      
      if (widthThreshold || heightThreshold) {
        // Potential DevTools detected via window size (docked)
        triggerLockout();
      }

      // Debugger Trap
      const start = performance.now();
      // eslint-disable-next-line no-debugger
      debugger; 
      const end = performance.now();
      
      if (end - start > 100) {
        // User paused! (DevTools Open)
        triggerLockout();
      }
    };

    // 4. Console Clearing & Object Trap
    const consoleTrap = () => {
        // Trap via console.log object getter (older Chrome/Firefox trick)
        const element = new Image();
        Object.defineProperty(element, 'id', {
            get: function() {
                detectDevTools(); // Trigger check if console tries to inspect this
                return 'security-check';
            }
        });
        console.log('%cMayans Security', 'font-size: 20px', element);
        console.clear();
    };

    // Run checks frequently
    const intervalId = setInterval(() => {
      detectDevTools();
      consoleTrap();
    }, 500);

    // Additional check on resize
    window.addEventListener('resize', detectDevTools);
    
    document.addEventListener("contextmenu", handleContextMenu);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      clearInterval(intervalId);
      document.removeEventListener("contextmenu", handleContextMenu);
      document.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener('resize', detectDevTools);
    };
  }, []);

  return null;
}
