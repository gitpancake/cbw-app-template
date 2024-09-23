import { useMemo } from "react";

export const useIsStandalone = () => {
  return useMemo(() => {
    return {
      isStandalone: window.matchMedia("(display-mode: standalone)").matches,
    };
  }, []);
};
