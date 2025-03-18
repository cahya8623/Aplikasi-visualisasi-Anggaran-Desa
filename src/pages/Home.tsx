import Notes from "@/component/BudgetNotes";
import Expense from "@/component/Expenses";
import Filter from "@/component/filter";
import Sidebar from "@/component/sidebar";

export default function Home() {
  return (
    <div className="d-flex ">
      <Sidebar />
      <div className="Home m-0 p-0 bg-light-subtle">
        <section className=" mb-2 bg-dark-subtle p-3 text-dark rounded py-20">
          <h1 className="fw-bold">Halaman Home</h1>
        </section>

        <Notes />
        <Filter />

        <Expense ShowTable={false} width="20vw" height="100px" />
      </div>
    </div>
  );
}
