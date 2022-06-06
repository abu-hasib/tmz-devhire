import React, { useEffect, useState } from "react";
import Axios from "axios";
import { useDispatch } from "react-redux";
import { setRate, setSymbol } from "../features/devSlice";

export function Footer() {
  const [currencies, setCurrencies] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    async function fetchData() {
      const {
        data: {
          data: { currencies },
        },
      } = await Axios.get("https://api.terawork.com/resources");
      setCurrencies(currencies);
    }
    fetchData();
  }, []);

  const handleChange = (e) => {
    console.log(e.target.value);
    const { divider, symbol } = JSON.parse(e.target.value);
    dispatch(setSymbol(symbol.toString()));
    dispatch(setRate(divider));
  };

  return (
    <div className="flex footer">
      <div className="copyright">&copy; {new Date().getFullYear()} DevHire</div>
      <div>
        <select className="flex" onChange={handleChange}>
          {currencies.map((currency) => (
            <React.Fragment key={currency.id}>
              <option value={JSON.stringify(currency)}>{currency.name}</option>
            </React.Fragment>
          ))}
        </select>
      </div>
    </div>
  );
}
