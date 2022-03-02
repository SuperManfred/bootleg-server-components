import React from "react";
import { useLocalStorageState } from "../hooks/useLocalStorageState";
// import { RenderLog } from '../utils/devtools';

export type tEntityVerificationStatus = "" | "Not Verified" | "Verified";

// The downside of this is that it will force unnecessary rerenders, but for now, this is our best option
type tGlobal = {
  isEntityVerified: tEntityVerificationStatus;
  isIndividualVerified: tEntityVerificationStatus;
  shouldDisplayRenderLogs: boolean;
};

type tGlobalContext = [tGlobal, React.Dispatch<React.SetStateAction<tGlobal>>];

export const InitialGlobalObject: tGlobal = {
  isEntityVerified: "",
  isIndividualVerified: "",
  shouldDisplayRenderLogs: false,
};

const GlobalContext = React.createContext<tGlobalContext | null>(null);

export function GlobalContextProvider({
  children,
}: {
  children?: React.ReactNode;
}) {
  // RenderLog('Global Context');
  const [globalState, setGlobalState] = useLocalStorageState(
    "global",
    InitialGlobalObject
  );

  return (
    <GlobalContext.Provider value={[globalState, setGlobalState]}>
      {children}
    </GlobalContext.Provider>
  );
}

export function useGlobal() {
  const state = React.useContext(GlobalContext);
  if (!state) {
    throw new Error(
      "useGlobalContext can only be used within a GlobalContextProvider component"
    );
  }
  return state;
}
