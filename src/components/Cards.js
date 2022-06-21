import React from "react";
import "../styles/Cards.css";
function Cards({ item }) {
  console.log(item);
  return (
    <div className="cards">
      <img src={item.image} />
    </div>
  );
}

export default Cards;
