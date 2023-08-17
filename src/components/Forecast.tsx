import { forecastType } from "../assets/types";
import { FiSunset, FiSunrise } from "react-icons/fi";
import { FaWind, FaTemperatureLow } from "react-icons/fa";
import { MdVisibility } from "react-icons/md";
import { GiDroplets } from "react-icons/gi";
import { WiBarometer, WiHumidity } from "react-icons/wi";

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

const getWindDirection = (deg: number): string => {
  if (deg > 15 && deg <= 75) return "NE";
  if (deg > 76 && deg <= 105) return "E";
  if (deg > 105 && deg <= 165) return "SE";
  if (deg > 166 && deg <= 195) return "S";
  if (deg > 195 && deg <= 225) return "SW";
  if (deg > 255 && deg <= 285) return "W";
  if (deg > 285 && deg <= 345) return "NW";

  return "N";
};

const getPop = (pop: number): string => {
  if (pop <= 15) return "Low probability";
  if (pop > 15 && pop <= 55) return "Unpredictable weather";
  return "High probability";
};

const getHumidityValue = (level: number): string => {
  if (level <= 55) return "Dry and comfortable";
  if (level > 55) return "Slightly uncomfortable, sticky feeling";
  return "Lot's of moisture, uncomfortable feeling";
};

const getVisibilityValue = (number: number): string => {
  if (number <= 50) return "Dangerously foggy";
  if (number > 50 && number <= 500) return "Expect heavy fog";
  if (number > 500 && number <= 2000) return "Expect some fog";
  if (number > 2000 && number <= 9000) return "Expect some haze";
  return "Very clear day";
};

export const Forecast = ({ data }: Props): JSX.Element => {
  const today = data.list[0];

  return (
    <div className="forecastBox ">
      <div className="mx-auto w-75 d-flex text-center flex-column justify-content-center">
        <section className="mx-auto mb-3">
          <h2 className="fs-1 bold ">
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

        <section className="d-flex overflow-x-scroll mt-2 pb-2 mb-5">
          {data.list.map((item, i) => (
            <div className="col-md-3 mb-3 me-3" key={i}>
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

        <section className="d-flex flex-row justify-content-center flex-wrap">
          {/* wind */}

          <div className="tail col-md-6 col-lg-4 mb-3">
            <div className=" d-flex flex-row justify-content-center">
              <FaWind />
              <p className="ps-2">Wind</p>
            </div>
            <div className="wind d-flex flex-row mx-auto ">
              <h3 className="my-2"> {Math.round(today.wind.speed)} Km/h</h3>
            </div>
            <p className="piccolo">{`${getWindDirection(
              Math.round(today.wind.deg)
            )}, gusts ${today.wind.gust.toFixed(1)} Km/h`}</p>
          </div>

          {/* feels like*/}
          <div className="tail col-md-6 col-lg-4 mb-3">
            <div className=" d-flex flex-row justify-content-center">
              <FaTemperatureLow />
              <p className="ps-2">Feels like</p>
            </div>
            <div className="wind d-flex flex-row mx-auto ">
              <h3 className="my-2">
                {" "}
                <Degree temp={Math.round(today.main.feels_like)} />{" "}
              </h3>
            </div>
            <p className="piccolo">
              {`Feels ${
                Math.round(today.main.feals_like) < Math.round(today.main.temp)
                  ? `colder`
                  : `warmer`
              }`}{" "}
            </p>
          </div>

          {/* humidity */}
          <div className="tail col-md-6 col-lg-4 mb-3">
            <div className=" d-flex flex-row justify-content-center">
              <WiHumidity />
              <p className="ps-2">Humidity</p>
            </div>
            <div className=" d-flex flex-row mx-auto ">
              <h3 className="my-2"> {Math.round(today.main.humidity)} %</h3>
            </div>
            <p className="piccolo">{getHumidityValue(today.main.humidity)}</p>
          </div>

          {/* Pop */}
          <div className="tail col-md-6 col-lg-4 mb-3">
            <div className=" d-flex flex-row justify-content-center">
              <GiDroplets />
              <p className="ps-2">Precipitation</p>
            </div>
            <div className=" d-flex flex-row mx-auto ">
              <h3 className="my-2"> {Math.round(today.pop) * 1000} %</h3>
            </div>
            <p className="piccolo">{`${getPop(today.pop)}, clouds at ${
              today.clouds.all
            } %`}</p>
          </div>

          {/* Pressure */}
          <div className="tail col-md-6 col-lg-4 mb-3">
            <div className=" d-flex flex-row justify-content-center">
              <WiBarometer />
              <p className="ps-2">Pressure </p>
            </div>
            <div className=" d-flex flex-row mx-auto ">
              <h3 className="my-2"> {Math.round(today.main.pressure)} hPa</h3>
            </div>
            <p className="piccolo">{` ${
              Math.round(today.main.pressure) < 1083 ? "Lower" : "Higher"
            } than standard
                  `}</p>
          </div>

          {/* Visibility */}
          <div className="tail col-md-6 col-lg-4 mb-3">
            <div className=" d-flex flex-row justify-content-center">
              <MdVisibility />
              <p className="ps-2">Visibility</p>
            </div>
            <div className=" d-flex flex-row mx-auto ">
              <h3 className="my-2"> {today.visibility / 1000} Km</h3>
            </div>
            <p className="piccolo">{getVisibilityValue(today.visibility)}</p>
          </div>
        </section>
      </div>
    </div>
  );
};
