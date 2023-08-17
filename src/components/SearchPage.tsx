import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import { optionType } from "../assets/types";
import { ChangeEvent } from "react";

type Props = {
  term: string;
  options: optionType[];
  onInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onOptionSelect: (option: optionType) => void;
  onSubmit: () => void;
};

export const SearchPage = ({
  term,
  options,
  onInputChange,
  onOptionSelect,
  onSubmit,
}: Props): JSX.Element => {
  return (
    <section className="search d-flex flex-column justify-content-center">
      <h2>
        Weather <span className="fs-1 bold">Forecast</span>
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
          <Button className="bottone" onClick={onSubmit}>
            Search
          </Button>
        </div>

        <div
          className={`options-box ${options.length > 0 ? "show-options" : ""}`}
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
                {option.name}, {option.country}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
