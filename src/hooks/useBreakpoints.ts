import { useMediaQuery } from "react-responsive";

type ReturnType = {
  isTablet: boolean;
  isMobile: boolean;
};

export function useBreakpoints(): ReturnType {
  return {
    isTablet: useMediaQuery({ maxWidth: 768 }),
    isMobile: useMediaQuery({ maxWidth: 425 }),
  };
}
