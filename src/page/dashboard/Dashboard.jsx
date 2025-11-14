import Sidebar from "./layouts/Sidebar/Sidebar";

export default function Dashboard() {
  return (
    <section className="d-flex vh-100">
      <Sidebar />
      <div className="flex-grow-1 p-4 bg-body-tertiary">
        <h2>Dashbaord</h2>
      </div>
    </section>
  );
}
