import React from "react";
import { useSelector } from "react-redux";
import { Card } from "./Card";

export function Developers({ headingText }) {
  const devs = useSelector((state) => state.devs.all);

  return (
    <>
      <h1 className="fs-500 text-regular">Hire Top Developers</h1>
      <div className="flex card-group" style={{ "--gap": "1.2rem" }}>
        {devs.map(({ _source: dev }) => (
          <Card key={dev.cust_id} dev={dev} />
        ))}
      </div>
    </>
  );
}
