import { Fragment } from "react";

import "./index.css";
import Box from "../box";
import Heading from "../heading";

export default function AdditionalProperties({ title, ...rest }) {
  return (
    <Box className="price box-shadow">
      <div className="price__list-item">
        <Heading>{title}</Heading>
      </div>
      <List {...rest} />
    </Box>
  );
}

function List(properties) {
  const propertyNames = {
    house_rules: "Правила дому",
    cancellation_policy: "Політика скасування",
    local_transportation: "Місцевий транспорт",
    host_languages: "Мови хоста",
    special_offers: "Спеціальні пропозиції",
    checkin_instructions: "Інструкції щодо реєстрації",
  };

  return (
    <ul className="price__list">
      {Object.entries(properties).map(([key, value]) => (
        <div key={key} className="list__block price__list-item">
          <strong>{propertyNames[key] || key}</strong>
          <span>{value || "Не вказано"}</span>
        </div>
      ))}
    </ul>
  );
}

// function List({
//   house_rules,
//   cancellation_policy,
//   local_transportation,
//   host_languages,
//   special_offers,
//   checkin_instructions,
// }) {
//   return (
//     <ul className="price__list">
//       <div className="list__block price__list-item">
//         <strong>Правила дому</strong>
//         <span>{house_rules}</span>
//       </div>
//       <div className="list__block price__list-item">
//         <strong>Політика скасування</strong>
//         <span>{cancellation_policy}</span>
//       </div>
//       <div className="list__block price__list-item">
//         <strong>Місцевий транспорт</strong>
//         <span>{local_transportation}</span>
//       </div>
//       <div className="list__block price__list-item">
//         <strong>Мови хоста</strong>
//         <span>{host_languages}</span>
//       </div>
//       <div className="list__block price__list-item">
//         <strong>Спеціальні пропозиції:</strong>
//         <span>{special_offers}</span>
//       </div>
//       <div className="list__block price__list-item">
//         <strong>Інструкції щодо реєстрації</strong>
//         <span>{checkin_instructions}</span>
//       </div>
//     </ul>
//   );
// }
