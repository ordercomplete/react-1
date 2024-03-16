import { Fragment } from "react";
import "./index.css";
import Heading from "../heading";
import Box from "../box";

export default function RoomList({ title, list }) {
  return (
    <div className="room__block">
      <Heading>{title}</Heading>
      <div className="room__list">
        {list.map(({ id, ...rest }) => (
          <Fragment key={id}>
            <Item {...rest} />
          </Fragment>
        ))}
      </div>
    </div>
  );
}

function Item({ type, pricePerNight: price, currency, capacity }) {
  return (
    <Box className="room">
      <span className="room__title">{type}</span>
      <span className="room__info">Кількість гостей: {capacity}</span>
      <span className="room__price">
        {currency}
        {price}
      </span>
    </Box>
  );
}
