import { createContext, useContext, useState } from "react";

type YearContextType = {
  selectedYear: string;
  setSelectedYear: (year: string) => void;
  edit: string | number[];
  setEdit: React.Dispatch<React.SetStateAction<string | number[]>>;
  confirm: boolean;
  setConfirm: React.Dispatch<React.SetStateAction<boolean>>;
};

const YearContext = createContext<YearContextType | undefined>(undefined);

export const YearProvider = ({ children }) => {
  const [selectedYear, setSelectedYear] = useState<string>(
    new Date().getFullYear().toString()
  );
  const [edit, setEdit] = useState<string | number[]>([]);
  const [confirm, setConfirm] = useState<boolean>(false);
  return (
    <YearContext.Provider
      value={{
        selectedYear,
        setSelectedYear,
        edit,
        setEdit,
        confirm,
        setConfirm,
      }}
    >
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
