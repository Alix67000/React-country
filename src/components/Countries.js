import React from "react";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import Card from "./Card";

const Countries = () => {
  const [data, setData] = useState([]);
  const [sortedData, setSortedData] = useState([]);
  const [PlayOnce, setPlayOnce] = useState(true);
  const [rangeValue, SetRangeValue] = useState(40);
  const [selectedRadio, setSelecedRadio] = useState("");
  const radios = ["Africa", "Asia", "America", "Europe", "Oceania"];

  useEffect(() => {
    if (PlayOnce) {
      axios
        .get(
          "https://restcountries.com/v2/all?fields=name,region,capital,population,flag"
        )
        .then((res) => {
          setData(res.data);
          setPlayOnce(false);
        });
    }

    const sortedCountry = () => {
      const countryObj = Object.keys(data).map((i) => data[i]);
      const sortedArray = countryObj.sort((a, b) => {
        return b.population - a.population;
      });
      sortedArray.length = rangeValue;
      setSortedData(sortedArray);
    };
    sortedCountry();
  }, [data, rangeValue, PlayOnce]);

  return (
    <div className="countries">
      <div className="sort-container">
        <input
          type="range"
          min="1"
          max="250"
          value={rangeValue}
          onChange={(e) => SetRangeValue(e.target.value)}
        />
        <ul>
          {radios.map((radio) => {
            return (
              <li key={radio}>
                <input
                  type="radio"
                  value={radio}
                  id={radio}
                  checked={radio === selectedRadio}
                  onChange={(e) => setSelecedRadio(e.target.value)}
                />
                <label htmlFor={radio}>{radio}</label>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="cancel">
        {selectedRadio && (
          <h5 onClick={() => setSelecedRadio("")}>Annuler recherche</h5>
        )}
      </div>
      <ul className="countries-list">
        {sortedData
          .filter((country) => country.region.includes(selectedRadio))
          .map((country) => (
            <Card key={country.name} country={country} />
          ))}
      </ul>
    </div>
  );
};

export default Countries;
