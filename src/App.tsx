import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import { Button } from "react-bootstrap";
import { useState, ChangeEvent } from "react";

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

  return (
    <main className="main d-flex justify-content-center align-items-center mx-auto">
      <section className="container d-flex flex-column justify-content-center">
        <h2>
          Wheather <span className="fs-1 bold">Forecast</span>
        </h2>
        <p className="pb-4 fs-5">Enter a city name</p>

        <div className="d-flex position-relative justify-content-center align-items-center flex-wrap">
          <input
            type="text"
            value={term}
            className="searcher"
            onChange={onInputChange}
          ></input>

          <ul className="absolute">
            {options.map((option: { name: string }, index: number) => (
              <li className="bottoneNome" key={option.name + "-" + index}>
                <button className="bottoneNome">{option.name}</button>
              </li>
            ))}
          </ul>

          <Button className="bottone" /* onClick={handleSearch()} */>
            Search
          </Button>
        </div>
      </section>
    </main>
  );
};

export default App;
