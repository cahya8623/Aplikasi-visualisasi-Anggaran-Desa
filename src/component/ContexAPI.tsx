import { createContext, useContext, useState } from "react";

type YearContextType = {
  selectedYear: string;
  setSelectedYear: (year: string) => void;
  edit: EditType;
  setEdit: React.Dispatch<React.SetStateAction<EditType>>;
  confirm: boolean;
  setConfirm: React.Dispatch<React.SetStateAction<boolean>>;
};

type EditType = {
  [key: string]: string | number;
};

const YearContext = createContext<YearContextType | undefined>(undefined);

export const YearProvider = ({ children }: { children: React.ReactNode }) => {
  const [selectedYear, setSelectedYear] = useState<string>(
    new Date().getFullYear().toString()
  );
  const [edit, setEdit] = useState<EditType>({});
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
