import React from "react";

// The contents of this file could be included in the global context

export const MOBILE_BREAKPOINT = 768;
const MobileContext = React.createContext<boolean | null>(null);

type tMobileProvider = {
  children: React.ReactNode;
};

export function MobileProvider({ children }: tMobileProvider) {
  // This is the exact same logic that we previously had in our hook
  const [isMobile, setIsMobile] = React.useState<boolean>(true);

  // Throttle the Handle Window Resize function
  React.useEffect(() => {
    function HandleWindowResize() {
      console.log("isMobile =", window.innerWidth < MOBILE_BREAKPOINT);
      setIsMobile(window.innerWidth <= MOBILE_BREAKPOINT);
    }

    if (window) {
      setIsMobile(window.innerWidth <= MOBILE_BREAKPOINT);
      window.addEventListener("resize", HandleWindowResize);
    } else {
      console.log(
        "Window is not defined, add event listener probably didn't get created"
      );
    }
    return () => window.removeEventListener("resize", HandleWindowResize);
  }, [setIsMobile]);

  return (
    <MobileContext.Provider value={isMobile}>{children}</MobileContext.Provider>
  );
}

export function useMobile() {
  const state = React.useContext(MobileContext);

  if (typeof state === "undefined") {
    throw new Error(
      "useMobile can only be used within a MobileProvider component"
    );
  }

  return state;
}
