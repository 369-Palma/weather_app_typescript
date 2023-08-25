/* import { FaWind, FaTemperatureLow } from "react-icons/fa";
import { MdVisibility } from "react-icons/md";
import { GiDroplets } from "react-icons/gi";
import { WiBarometer, WiHumidity } from "react-icons/wi";

type Props = {
  icons: "wind" | "feels" | "humidity" | "visibility" | "pressure" | "pop";
  title: string;
  info: string;
  description: string;
};

const icons = {
  wind: FaWind,
  feels: FaTemperatureLow,
  humidity: WiHumidity,
  visibility: MdVisibility,
  pressure: WiBarometer,
  pop: GiDroplets,
};

export const Tile = ({
  icon,
  title,
  info,
  description,
}: Props): JSX.Element => {
  const Icon = icons{icon}
  return (
    <div>
      <Icon/>
    </div>
  );
}; */
