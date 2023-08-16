import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import { Button } from "react-bootstrap";
import { useState, ChangeEvent } from "react";
import { optionType } from "./assets/types";

const App = (): JSX.Element => {
  /* http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid={API key} */

  const [term, setTerm] = useState<string>("");
  const [options, setOptions] = useState<[]>([]);

  const getSearchOptions = async (value: string) => {
    try {
      const response = await fetch(
        `http://api.openweathermap.org/geo/1.0/direct?q=${value.trim()}&limit=5&appid=f4a9a03c9735bbc42a53394d2698aa8e`
      );

      if (response.ok) {
        const data = await response.json();
        setOptions(data);
        // Fai qualcosa con i dati ricevuti
      } else {
        console.error("Errore nella richiesta API:", response.status);
      }
    } catch (error) {
      console.error("Errore durante la richiesta API:", error);
    }
  };

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.trim();
    setTerm(value);

    if (value === "") return;
    getSearchOptions(value);
  };

  const onOptionSelect = (option: optionType) => {
    if (option.lat !== undefined && typeof option.lat === "number") {
      console.log(option.name);
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${option.lat}&lon=${option.lon}&appid=f4a9a03c9735bbc42a53394d2698aa8e`
      )
        .then((res) => res.json())
        .then((data) => console.log({ data }));
    } else {
      console.error("Wrong latitude or lat is not a number.");
    }
  };

  return (
    <main className="main d-flex justify-content-center align-items-center mx-auto">
      <section className="container d-flex flex-column justify-content-center">
        <h2>
          Wheather <span className="fs-1 bold">Forecast</span>
        </h2>
        <p className="pb-4 fs-5">Enter a city name</p>

        <div className="results-container">
          <div
            className={`searcher-container ${
              options.length > 0 ? "show-options" : ""
            }`}
          >
            <input
              type="text"
              value={term}
              className="searcher"
              onChange={onInputChange}
            />
            <Button className="bottone">Search</Button>
          </div>

          <div
            className={`options-box ${
              options.length > 0 ? "show-options" : ""
            }`}
          >
            <ul className="options-list">
              {options.map((option: optionType, index: number) => (
                <li
                  key={option.name + "-" + index}
                  className="bottoneNome"
                  onClick={() => {
                    onOptionSelect(option);
                  }}
                >
                  {option.name}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
};

export default App;
