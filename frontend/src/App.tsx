import NavBar from "components/navbar";
import Footer from "components/footer";
import DataTable from "components/DataTable";
import Barchart from "components/BarChart"
import DonutChart from 'components/Donut'


function App() {
  return (
    <>
      <NavBar />
      <div className="container">
        <div className="row px-3">

        <div className="col-sm-6">
          <h5 className="text-center text-secondary">Taxa de Sucesso (%)</h5>
          <Barchart />
        </div>
        <div className="col-sm-6">
          <h5 className="text-center text-secondary">Taxa de Sucesso (%)</h5>
          <DonutChart />
        </div>
        </div>
        <div className="py-3">
          <h2 className="text-primary">Todas vendas</h2>
        </div>
        <DataTable />
      </div>
      <Footer />

    </>
  );
}

export default App;
