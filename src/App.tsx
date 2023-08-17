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
        <Forecast data={forecast} />
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
