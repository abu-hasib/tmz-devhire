import React from "react";
import { useSelector } from "react-redux";
import { Card } from "./Card";

export function Favorites() {
  const favorites = useSelector((state) => state.devs.favorites);
  return (
    <>
      <h3 className="fs-500 text-regular">Favorites</h3>
      <div className="flex card-group" style={{ "--gap": "1.2rem" }}>
        {favorites.map((dev) => (
          <Card key={dev.cust_id} dev={dev} />
        ))}
      </div>
    </>
  );
}
