import { createContext, useContext, useState } from "react";

type YearContextType = {
  selectedYear: string;
  setSelectedYear: (year: string) => void;
};

// 1. Buat context
const YearContext = createContext<YearContextType | undefined>(undefined);

export const YearProvider = ({ children }) => {
  const [selectedYear, setSelectedYear] = useState<string>(
    new Date().getFullYear().toString()
  );

  return (
    <YearContext.Provider value={{ selectedYear, setSelectedYear }}>
      {children}
    </YearContext.Provider>
  );
};

export const useYear = () => {
  const context = useContext(YearContext);
  if (!context) {
    throw new Error("useYear harus dipakai di dalam <YearProvider>");
  }
  return context;
};
