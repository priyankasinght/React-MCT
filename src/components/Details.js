import React from "react";
import "./style.css";

const Details = ({ weather, units }) => {
  const tempUnit = units === "metric" ? "°C" : "°F";
  const cards = [
    {
      id: 1,
      title: "Max Temp",
      data: weather.temp_max.toFixed(),
      unit: tempUnit,
    },

    {
      id: 2,
      title: "Min Temp",
      data: weather.temp_min.toFixed(),
      unit: tempUnit,
    },

    {
      id: 3,
      title: "Humidity",
      data: weather.humidity,
      unit: "%",
    },

  ];
  return (
    <div className="details">

      {cards.map(({ id, icon, title, data, unit }) => (
        <div key={id} className="card">
          <div className="card-icon">
            {icon}
            <h5>{title}</h5>
          </div>
          <h2>{`${data} ${unit}`}</h2>
        </div>
      ))}

    </div>
  );
};

export default Details;