import Notes from "@/component/BudgetNotes";
import Filter from "@/component/filter";
import Sidebar from "@/component/sidebar";
import Tables from "@/component/Table";

export default function Home() {
  return (
    <div className="d-flex ">
      <Sidebar />
      <div className="Home m-0 p-0 bg-light-subtle ">
        <section className=" mb-2 bg-dark-subtle p-3 text-dark rounded py-20">
          <h1 className="fw-bold">Halaman Home</h1>
        </section>

        <Notes />
        <Filter />

        <div className="d-flex justify-content-center">
          <Tables width="75vw" height="10vh" />
        </div>
      </div>
    </div>
  );
}
