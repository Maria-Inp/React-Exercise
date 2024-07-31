import { useEffect } from "react";
import { useState } from "react";
import country from "../data/countryData";

import styles from "./ShowPostFunctional.module.css";

function ShowPostFunctional() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    setCountries(country);
  }, []);

  //   console.log(countries);
  return (
    <>
      
      <div className={styles.container}>
      <h4 className={styles.title}>show post with functional component</h4>
        <div className={styles.allBox}>
          {countries.map((country) => (
            <div key={country.code} className={styles.box}>
              <div className={styles.flag}>
                <img src={country.flag} alt="" />
              </div>

              <h5 className={styles.countryName}>Country Name: {country.name}</h5>

              <table>
                <tr>
                  <th>Capital:</th>
                  <td>{country.capital}</td>
                </tr>
                <tr>
                  <th>Language:</th>
                  <td>{country.language.name}</td>
                </tr>
                <tr>
                  <th>Currency:</th>
                  <td>{country.currency.name}</td>
                </tr>
                <tr>
                  <th>Currency Symbol:</th>
                  <td>{country.currency.symbol}</td>
                </tr>
              </table>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default ShowPostFunctional;
