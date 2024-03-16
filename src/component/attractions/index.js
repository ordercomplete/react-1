// import { Fragment } from "react";
import "./index.css";
import Heading from "../heading";
import Box from "../box";
import ListItem from "../list-item";

export default function Attractions({ title, list }) {
  return (
    <Box className="price box-shadow">
      <div className="heading--border">
        <Heading>{title}</Heading>
      </div>

      {list.map(
        (
          item,
          index // використання index замість id
        ) => (
          <div key={index}>
            <Item key={index} item={item} />
            {/* Передача об'єкту item замість окремих властивостей */}
          </div>
        )
      )}
    </Box>
  );
}

function Item({ item }) {
  const { id, name, link } = item; // деструктуризація об'єкту item
  return (
    <ListItem data-id={id}>
      {/* використання data-id для прихованого id */}
      <div>
        <a href={link}>{name}</a>
      </div>
    </ListItem>
  );
}
