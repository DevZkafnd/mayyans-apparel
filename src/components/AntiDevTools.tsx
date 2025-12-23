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
            // Prevent multiple triggers
            if (document.getElementById('anti-devtools-lockout')) return;

            // 1. Stop all execution and network
            window.stop();
            
            // 2. Clear Storage & Cookies
            try {
                localStorage.clear();
                sessionStorage.clear();
                const cookies = document.cookie.split(";");
                for (let i = 0; i < cookies.length; i++) {
                    const cookie = cookies[i];
                    const eqPos = cookie.indexOf("=");
                    const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
                    document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/";
                }
            } catch (e) { /* ignore */ }

            // 3. Nuke DOM (Head & Body)
            document.head.innerHTML = '';
            document.body.innerHTML = '';

            // 4. Create Safe Lockout UI
            const lockoutDiv = document.createElement('div');
            lockoutDiv.id = 'anti-devtools-lockout';
            lockoutDiv.style.cssText = `
                position: fixed; top: 0; left: 0; width: 100vw; height: 100vh;
                background: #000; color: #ff0000; display: flex; flex-direction: column;
                justify-content: center; align-items: center; z-index: 2147483647;
                font-family: monospace; text-align: center; overflow: hidden;
            `;
            lockoutDiv.innerHTML = `
                <h1 style="font-size: 2rem; margin-bottom: 1.5rem; line-height: 1.4;">Mau nyari apa sii mass/mba??<br/>mending sini ngobrol sama aku di dm ig @zkafnd, oke?</h1>
                <button id="reload-btn" style="
                    margin-top: 2rem; padding: 1rem 2rem; background: #ff0000;
                    color: white; border: none; font-family: monospace;
                    cursor: pointer; font-size: 1.2rem; border-radius: 8px;
                ">MAAF SAYA KHILAF</button>
            `;
            document.body.appendChild(lockoutDiv);
            
            document.getElementById('reload-btn')?.addEventListener('click', () => window.location.reload());

            // 5. Remove Attributes
            document.documentElement.className = '';
            document.documentElement.style.cssText = '';
            document.body.className = '';
            document.body.style.cssText = 'overflow: hidden; margin: 0;';

            // 6. TRAP: MutationObserver (Anti-Delete)
            // If they try to delete the lockout div, reload immediately
            const observer = new MutationObserver((mutations) => {
                mutations.forEach((mutation) => {
                    if (!document.getElementById('anti-devtools-lockout')) {
                        window.location.reload();
                    }
                });
            });
            observer.observe(document.body, { childList: true, subtree: true });

            // 7. TRAP: Debugger Loop (Freeze DevTools)
            setInterval(() => {
                // eslint-disable-next-line no-debugger
                debugger;
            }, 50);

            // 8. TRAP: Console Clear Loop
            setInterval(() => {
                console.clear();
                console.log("%cMAU NGAPAIN HAYOO?? 👀", "color: red; font-size: 50px; font-weight: bold;");
            }, 100);

            throw new Error("Security Violation: DevTools Detected");
        } catch (e) {
            // Fallback
             document.body.innerHTML = 'Access Denied';
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
