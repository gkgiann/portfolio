import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

interface ScrollContextData {
  scrollValue: number;
}

const ScrollContext = createContext({} as ScrollContextData);

interface ScrollContextProviderProps {
  children: ReactNode;
}

export function ScrollContextProvider({
  children,
}: ScrollContextProviderProps) {
  const [scrollValue, setScrollValue] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const scroll = window.scrollY;
      setScrollValue(scroll);
    });
  }, []);

  return (
    <ScrollContext.Provider value={{ scrollValue }}>
      {children}
    </ScrollContext.Provider>
  );
}

export function useScroll(): ScrollContextData {
  const context = useContext(ScrollContext);

  return context;
}
