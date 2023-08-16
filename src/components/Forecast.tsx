import { forecastType } from "../assets/types";
import { FiSunset, FiSunrise } from "react-icons/fi";

type Props = {
  data: forecastType;
};
const Degree = ({ temp }: { temp: number }): JSX.Element => (
  <span>
    {temp}
    <sup>o</sup>
  </span>
);

const getSunTime = (timestamp: number): string => {
  const date = new Date(timestamp * 1000);
  let hours = date.getHours().toString();
  let minutes = date.getMinutes().toString();

  if (hours.length <= 1) hours = `0${hours}`;
  if (minutes.length <= 1) minutes = `0${minutes}`;

  return `${hours}:${minutes}`;
};

export const Forecast = ({ data }: Props): JSX.Element => {
  const today = data.list[0];

  return (
    <div className="forecastBox">
      <div className="mx-auto w-300px">
        <section>
          <h2 className="fs-1 bold">
            {data.name}
            <span className="country">{data.country}</span>
          </h2>
          <h1 className="fs-1 bold">
            <Degree temp={Math.round(today.main.temp)} />
          </h1>
          <p>
            {today.weather[0].main} {today.weather[0].description}
          </p>
          H: <Degree temp={Math.ceil(today.main.temp_max)} />/ L:{" "}
          <Degree temp={Math.ceil(today.main.temp_min)} />
        </section>

        <section className="d-flex mt-2 pb-2 mb-5">
          {data.list.map((item, i) => (
            <div
              className="inline-block text-center w-[50px] flex-shrink"
              key={i}
            >
              <p>{i === 0 ? "Now" : new Date(item.dt * 1000).getHours()}</p>
              <img
                className="imgs"
                src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
                alt={`weather-icon-${item.weather[0].description}`}
              />

              <p>
                <Degree temp={Math.round(item.main.temp)} />
              </p>
            </div>
          ))}
        </section>

        <section className="d-flex justify-content-center my-2">
          <div className="miniBox d-flex flex-column me-4 py-2 px-3 justify-content-center align-items-center">
            <FiSunrise /> <span> {getSunTime(data.sunrise)}</span>
          </div>
          <div className="d-flex flex-column miniBox py-2 px-3 justify-content-center align-items-center">
            <FiSunset /> <span> {getSunTime(data.sunset)} </span>
          </div>
        </section>

        <section> </section>
      </div>
    </div>
  );
};
