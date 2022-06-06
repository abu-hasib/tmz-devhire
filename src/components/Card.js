import React from "react";
import like from "../assets/like.svg";
import { useDispatch, useSelector } from "react-redux";
import { addToFavorites } from "../features/devSlice";
import { formatAmount } from "../App";

export function Card({ dev }) {
  const handleClick = (dev) => {
    dispatch(addToFavorites(dev));
  };
  const dispatch = useDispatch();
  const rate = useSelector((state) => state.devs.rate);
  const symbol = useSelector((state) => state.devs.symbol);
  const index = useSelector((state) =>
    state.devs.favorites.findIndex((el) => el.cust_id === dev.cust_id)
  );
  const isFavorite = index === -1 ? true : false;

  return (
    <div className="flex card">
      <div>
        <img src={dev.service_photo} alt="services" className="service" />
      </div>
      <div
        className={`grid heart ${!isFavorite ? "like" : "unlike"} pointer`}
        onClick={() => handleClick(dev)}
      >
        <img src={like} alt="like" />
      </div>
      <div className="avatar">
        <img src={dev.avatar} alt="avatar" />
      </div>
      <div className="flex bottom">
        <div>
          <p className="fw-700">{dev.display_name}</p>
          <p className="fs-100 text-price">{`${symbol}${formatAmount(
            dev.starting_from / rate
          )}`}</p>
        </div>
        <a className="text-accent fs-200" href="/">
          Hire
        </a>
      </div>
    </div>
  );
}
