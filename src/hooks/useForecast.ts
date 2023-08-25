import { useState, ChangeEvent, useEffect } from "react";
import { optionType, forecastType } from "../assets/types/index";

export const useForecast = () => {
  const [term, setTerm] = useState<string>("");
  const [options, setOptions] = useState<optionType[]>([]);
  const [city, setCity] = useState<optionType | null>(null);
  const [forecast, setForecast] = useState<forecastType | null>(null);

  const getSearchOptions = async (value: string) => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/geo/1.0/direct?q=${value.trim()}&limit=5&appid=f4a9a03c9735bbc42a53394d2698aa8e`
      );

      if (response.ok) {
        const data = await response.json();
        setOptions(data);
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

  const getForecast = (city: optionType) => {
    fetch(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${city.lat}&lon=${city.lon}&appid=f4a9a03c9735bbc42a53394d2698aa8e`
    )
      .then((res) => res.json())
      .then((data) => {
        const forecastData = {
          ...data.city,
          list: data.list.slice(0, 15),
        };

        setForecast(forecastData);
      });
  };

  const onSubmit = () => {
    if (city !== null) {
      getForecast(city);
    }
  };

  const onOptionSelect = (option: optionType) => {
    setCity(option);
  };

  useEffect(() => {
    if (city) {
      setTerm(city.name);
      setOptions([]);
    }
  }, [city]);

  return { term, options, forecast, onInputChange, onOptionSelect, onSubmit };
};
