import "bootstrap/dist/css/bootstrap.css";
import "./index.css";
import { SearchPage } from "./components/SearchPage";
import { useForecast } from "./hooks/useForecast";
import { Forecast } from "./components/Forecast";

const App = (): JSX.Element => {
  const { term, options, forecast, onInputChange, onOptionSelect, onSubmit } =
    useForecast();

  return (
    <main className="main ">
      {forecast ? (
        <div className="d-flex align-items-center justify-content-center m-0 p-0">
          <Forecast data={forecast} />
        </div>
      ) : (
        <SearchPage
          term={term}
          options={options}
          onInputChange={onInputChange}
          onOptionSelect={onOptionSelect}
          onSubmit={onSubmit}
        />
      )}
    </main>
  );
};
export default App;
