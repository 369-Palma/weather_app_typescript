import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import { Button } from "react-bootstrap";

const App = () => {
  return (
    <main className="main d-flex justify-content-center align-items-center mx-auto">
      <section className="container d-flex flex-column justify-content-center">
        <h2>
          Wheather <span className="fs-1 bold">Forecast</span>
        </h2>
        <p className="pb-4 fs-5">Enter a city name</p>

        <div className="d-flex justify-content-center align-items-center flex-wrap">
          <input type="text" /* value={""} */ className="searcher"></input>
          <Button className="bottone" /* onClick={handleSearch()} */>
            Search
          </Button>
        </div>
      </section>
    </main>
  );
};

export default App;
