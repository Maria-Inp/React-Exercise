import img1 from "../assets/country flag/1.webp";
import img2 from "../assets/country flag/2.png";
import img3 from "../assets/country flag/3.png";
import img4 from "../assets/country flag/4.png";
import img5 from "../assets/country flag/5.webp";
import img6 from "../assets/country flag/6.png";

const country = [
  {
    name: "Korea (Republic of)",
    code: "KR",
    capital: "Seoul",
    region: "AS",
    currency: {
      code: "KRW",
      name: "South Korean won",
      symbol: "₩",
    },
    language: {
      code: "ko",
      name: "Korean",
    },
    flag: img1,
  },
  {
    name: "Australia",
    code: "AU",
    capital: "Canberra",
    region: "OC",
    currency: {
      code: "AUD",
      name: "Australian dollar",
      symbol: "$",
    },
    language: {
      code: "en",
      name: "English",
    },
    flag: img2,
  },
  {
    name: "Iran (Islamic Republic of)",
    code: "IR",
    capital: "Tehran",
    region: "AS",
    currency: {
      code: "IRR",
      name: "Iranian rial",
      symbol: "﷼",
    },
    language: {
      code: "fa",
      name: "Persian (Farsi)",
    },
    flag: img3,
  },
  {
    name: "Japan",
    code: "JP",
    capital: "Tokyo",
    region: "AS",
    currency: {
      code: "JPY",
      name: "Japanese yen",
      symbol: "¥",
    },
    language: {
      code: "ja",
      name: "Japanese",
    },
    flag: img4,
  },
  {
    name: "United Kingdom of Great Britain and Northern Ireland",
    code: "GB",
    capital: "London",
    region: "EU",
    currency: {
      code: "GBP",
      name: "British pound",
      symbol: "£",
    },
    language: {
      code: "en",
      name: "English",
    },
    flag: img5,
  },
  {
    name: "France",
    code: "FR",
    capital: "Paris",
    region: "EU",
    currency: {
      code: "EUR",
      name: "Euro",
      symbol: "€",
    },
    language: {
      code: "fr",
      name: "French",
    },
    flag: img6,
  },
];

export default country;
