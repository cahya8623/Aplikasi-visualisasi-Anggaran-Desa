import Notes from "@/component/BudgetNotes";
import Expense from "@/component/Expenses";
import Filter from "@/component/filter";
import Sidebar from "@/component/sidebar";
import { useState } from "react";

interface Expenses {
  kebutuhan: string;
  total: number;
  keterangan: string;
}
export default function Home() {
  const [expenseSubmit, setExpenseSubmit] = useState<Expenses[]>([]);
  return (
    <div className="d-flex w-100 d-flex vh-100">
      <Sidebar />
      <div
        className="Home container-fluid m-0 p-0 bg-light-subtle"
        style={{ height: "110%" }}
      >
        <section className=" mb-2 bg-dark-subtle p-3 text-dark rounded py-20">
          <h1 className="fw-bold">Halaman Home</h1>
        </section>

        <Notes />
        <Filter />

        <Expense
          submit={expenseSubmit}
          setSubmit={setExpenseSubmit}
          ShowTable={false}
          width="20vw"
          height="100px"
        />
      </div>
    </div>
  );
}
