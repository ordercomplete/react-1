import "./index.css";
import Box from "../box";
import ListItem from "../list-item";
import Heading from "../heading";

// Імпортуємо іконки для зручностей
import PoolIcon from "./pool.svg";
import GymIcon from "./gym.svg";
import FreeBreakfastIcon from "./breakfast.svg";
import FreeWiFiIcon from "./wifi.svg";
import ParkingIcon from "./parking.svg";
import PetsAllowedIcon from "./pets.svg";
import AirportShuttleIcon from "./airport.svg";
import ConciergeServiceIcon from "./concierge.svg";
import RoomServiceIcon from "./roomservice.svg";
import ChildFriendlyIcon from "./child.svg";

// Перелічення доступних зручностей та їх назви
const AMENITIES = {
  hasPool: "Басейн",
  hasGym: "Спортивний зал",
  hasFreeBreakfast: "Безкоштовний сніданок",
  hasFreeWiFi: "Безкоштовний Wi-Fi",
  hasParking: "Безкоштовний вуличний паркінг",
  hasPetsAllowed: "Дозволено розміщення з домашніми тваринами",
  hasAirportShuttle: "Трансфер до або з аеропорту",
  hasConciergeService: "Консьєрж сервіс",
  hasRoomService: "Обслуговування номерів",
  hasChildFriendly: "Підходить для дітей",
};

// Об'єкт, що зіставляє кожну зручність з її іконкою
const amenitiesIcons = {
  hasPool: PoolIcon,
  hasGym: GymIcon,
  hasFreeBreakfast: FreeBreakfastIcon,
  hasFreeWiFi: FreeWiFiIcon,
  hasParking: ParkingIcon,
  hasPetsAllowed: PetsAllowedIcon,
  hasAirportShuttle: AirportShuttleIcon,
  hasConciergeService: ConciergeServiceIcon,
  hasRoomService: RoomServiceIcon,
  hasChildFriendly: ChildFriendlyIcon,
  // Продовжіть для інших зручностей
};

export default function Amenities({ title, ...amenities }) {
  // Фільтруємо тільки ті зручності, які доступні (true)
  const availableAmenities = Object.entries(amenities).filter(
    ([key, value]) => value
  );

  return (
    <Box className="price box-shadow">
      <div className="price__list-item">
        <Heading>{title}</Heading>
      </div>
      <ul className="price__list">
        {availableAmenities.map(([key, _]) => (
          <div key={key}>
            <ListItem imageSrc={amenitiesIcons[key]}>{AMENITIES[key]}</ListItem>
          </div>
        ))}
      </ul>
    </Box>
  );
}

// 1. **export**: Це ключове слово використовується для експортування функції `Amenities` з цього файлу, щоб вона стала доступною для імпортування в іншій частині програми. В даному випадку ця функція є основним експортованим об'єктом файлу.

// 2. **function**: Ключове слово, що починає оголошення функції. У цьому випадку воно вказує, що ми оголошуємо функцію з іменем `Amenities`.

// 3. **Amenities**: Це ім'я функції, яка приймає параметри `title` та `...amenities`. Ця функція відповідає за відображення списку зручностей з відповідними іконками.

// 4. **{ title, ...amenities }**: Це деструктуризація параметрів функції. Параметр `title` є окремим значенням, тоді як `...amenities` збирає всі додаткові параметри в об'єкт з назвою `amenities`.

// 5. **const**: Ключове слово для створення змінних у JavaScript. В даному контексті воно використовується для створення змінної `availableAmenities`, яка зберігає результат фільтрації зручностей на основі доступності.

// 6. **availableAmenities**: Це назва змінної, яка зберігає відфільтровані зручності.

// 7. **Object.entries(amenities)**: Це метод JavaScript, який перетворює об'єкт `amenities` в масив його ключ-значення пар.

// 8. **.filter(([key, value]) => value)**: Це метод для масивів JavaScript, який використовується для фільтрації елементів масиву за певною умовою. В даному випадку він фільтрує масив з ключ-значеннями таким чином, щоб включити лише ті записи, де значення (доступність) є true.

// 9. **return**: Ключове слово, що вказує на повернення результату виконання функції. У даному випадку використовується для повернення JSX елементу, який представляє список зручностей.

// 10. **<Box**: Цей тег представляє компонент `Box` з певною CSS класом, котрий містить елементи списку зручностей та заголовок.

// 11. **<Heading**: Цей тег представляє компонент `Heading`, який відображає заголовок.

// 12. **<ul className="price__list">**: Цей тег представляє ненумерований список HTML з класом `price__list`, в якому будуть відображені зручності.

// 13. **availableAmenities.map(([key, _]) => ( ... )**: Метод `map` викликає задану функцію один раз для кожного елементу масиву та створює новий масив з результатів виклику цієї функції для кожного елементу. У контексті поданого коду, метод `map` застосовується до масиву `availableAmenities`, кожен елемент якого містить ключ та значення певної доступної зручності.

// 14. **<div key={key}>**: Цей тег представляє блочний елемент з унікальним ключем `key`, що оточує компонент `ListItem` для кожного елементу.

// 15. **<ListItem imageSrc={amenitiesIcons[key]}>{AMENITIES[key]}</ListItem>**: Це відображення компонента `ListItem` з визначеними властивостями `imageSrc` та текстом зручності з об'єкта `AMENITIES`.
