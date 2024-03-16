import React, { useState, useEffect } from "react";
import "./index.css";
import Heading from "../heading";
import hostImg from "./host.png";

// Функція, що визначає, чи потрібен переклад
const shouldTranslate = () => {
  return navigator.language.startsWith("uk");
};

// Функція для перекладу тексту
export const translateText = async (text, targetLang = "uk") => {
  const apiKey = "AIzaSyBOti4mM-6x9WDnZIjIeyEU21OpBXqWBgw&";
  const url = `https://translation.googleapis.com/language/translate/v2?key=${apiKey}`;
  const body = {
    q: text,
    source: "en",
    target: targetLang,
  };

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    const data = await response.json();
    return data.data.translations[0].translatedText;
  } catch (error) {
    console.error("Translation error:", error);
    return text; // Повертаємо оригінальний текст у випадку помилки
  }
};

export default function Host({
  title,
  name,
  image,
  response_rate,
  response_time,
  info,
  phone,
}) {
  const [translatedInfo, setTranslatedInfo] = useState(info);

  useEffect(() => {
    if (shouldTranslate()) {
      translateText(info).then((translated) => {
        setTranslatedInfo(translated);
      });
    }
  }, [info]);

  return (
    <div className="title">
      <div className="title__flex">
        <img src={hostImg} alt="" height={80} width={80} />
        <div className="title">
          <div>
            <Heading>{`${title} - ${name}`}</Heading>
          </div>
          <div className="title__sub-block">
            <span className="title__sub-value">{phone}</span>
            <span className="title__sub-value">{response_time}</span>
            <span className="title__sub-value">
              {`${response_rate}% швидкості відгуку`}
            </span>
          </div>
        </div>
      </div>
      <p>{translatedInfo}</p>
    </div>
  );
}

// import "./index.css";
// import Heading from "../heading";
// import hostImg from "./host.png";

// export default function Host({
//   title,
//   name,
//   image,
//   response_rate,
//   response_time,
//   info,
//   phone,
// }) {
//   return (
//     <div className="title">
//       <div className="title__flex">
//         <img src={hostImg} alt="" height={80} width={80} />
//         <div className="title">
//           <div>
//             <Heading>{`${title} - ${name}`}</Heading>
//           </div>

//           <div className="title__sub-block">
//             <span className="title__sub-value">{phone}</span>
//             <span className="title__sub-value">{response_time}</span>
//             <span className="title__sub-value">
//               {`${response_rate}% швидкості відгуку`}
//             </span>
//           </div>
//         </div>
//       </div>
//       <p>{info}</p>
//     </div>
//   );
// }
