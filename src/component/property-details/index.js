import "./index.css";
import Box from "../box";
import ListItem from "../list-item";
import Heading from "../heading";

import guestsIcon from "./guests.svg";
import bedroomsIcon from "./bedrooms.svg";
import bedsIcon from "./beds.svg";
import bathsIcon from "./baths.svg";

export default function PropertyDetails({ title, ...rest }) {
  return (
    <Box className="price box-shadow">
      <div className="price__list-item">
        <Heading>{title}</Heading>
      </div>
      <List {...rest} />
    </Box>
  );
}

function List({ guests, bedrooms, beds, baths }) {
  const details = [
    { key: "guests", value: guests, label: "гості", icon: guestsIcon },
    { key: "bedrooms", value: bedrooms, label: "спальня", icon: bedroomsIcon },
    { key: "beds", value: beds, label: "ліжко", icon: bedsIcon },
    { key: "baths", value: baths, label: "ванна кімната", icon: bathsIcon },
  ];

  return (
    <ul className="price__list">
      {details.map(({ key, value, label, icon }) => (
        <ListItem key={key}>
          <img src={icon} alt={label} height={24} />
          <span>{`${value || "Не вказано"}`}</span>
          <span>{label}</span>
        </ListItem>
      ))}
    </ul>
  );
}

// function List({ guests, bedrooms, beds, baths }) {
//   return (
//     <ul className="price__list">
//       <ListItem>
//         <img src={guestsIcon} alt="гості" height={24} />
//         <span>{guests}</span>
//         <span>гості</span>
//       </ListItem>
//       <ListItem>
//         <img src={bedroomsIcon} alt="bedrooms" height={24} />
//         <span>{bedrooms}</span>
//         <span>спальня</span>
//       </ListItem>
//       <ListItem>
//         <img src={bedsIcon} alt="beds" height={24} />
//         <span>{beds}</span>
//         <span>ліжко</span>
//       </ListItem>
//       <ListItem>
//         <img src={bathsIcon} alt="baths" height={24} />
//         <span>{baths}</span>
//         <span>ванна кімната</span>
//       </ListItem>
//     </ul>
//   );
// }
