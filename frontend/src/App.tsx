import NavBar from "components/navbar";
import Footer from "components/footer";
import DataTable from "components/DataTable";


function App() {
  return (
    <>
      <NavBar/>
      <div className="container">
        <DataTable />
      </div>
      <Footer />

    </>
  );
}

export default App;

