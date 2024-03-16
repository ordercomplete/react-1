import { Fragment } from "react";
import "./index.css";
import Heading from "../heading";
import Box from "../box";

export default function Feedback({ title, list }) {
  return (
    <div className="room__block">
      <Heading>{title}</Heading>
      <div className="room__list">
        {list.map(
          (
            item,
            index // використання index замість id
          ) => (
            <Fragment key={index}>
              <Item key={index} item={item} />
              {/* Передача об'єкту item замість окремих властивостей */}
            </Fragment>
          )
        )}
      </div>
    </div>
  );
}

function Item({ item }) {
  const { id, guestName, rating, review } = item; // деструктуризація об'єкту item
  return (
    <Box className="room" data-id={id}>
      {/* використання data-id для прихованого id */}
      <div className="room__flex">
        <strong className="room__info">{guestName}</strong>
        <span className="room__info">Рейтинг: {rating}</span>
      </div>
      <span className="room__info">{review}</span>
    </Box>
  );
}

// export default function Feedback({ list }) {
//   return (
//     <div className="room__block">
//       <Heading>Відгуки клієнтів</Heading>
//       <div className="room__list">
//         {list.map(({ id, ...rest }) => (
//           <Fragment key={id}>
//             <Item {...rest} />
//           </Fragment>
//         ))}
//       </div>
//     </div>
//   );
// }

// function Item({ id, guestName, rating, review }) {
//   return (
//     <Box className="room">
//       <div className="room__flex">
//         <strong className="room__info">{guestName}</strong>
//         <span className="room__info">Рейтинг: {rating}</span>
//       </div>
//       <span className="room__info">{review}</span>
//     </Box>
//   );
// }
