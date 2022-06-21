import React, { useEffect, useState } from "react";
import "../styles/Homepage.css";
import { data } from "../data";
import Card from "../components/Cards";

function Homepage() {
  const [items, setItems] = useState(data);
  const [category, setCategory] = useState("men");
  console.log(data);
  useEffect(() => {
    let tempData = data;
    let newData = tempData.filter((item) => item.category === category);
    setItems(newData);
  }, [category]);
  return (
    <div>
      <div className="banner__container">
        <div className="banner__container__left">
          <div>
            <p>DISCOVER</p>
            <h3>FASHION SPRING</h3>
            <p>SUMMER</p>
          </div>
          <h1>2020</h1>
          <button>SHOP NOW</button>
        </div>
      </div>
      <div className="homepage__categories">
        <div onClick={() => setCategory("men")}>
          <img src="./assets/men.jpg" />
          <h4>MEN</h4>
        </div>
        <div onClick={() => setCategory("women")}>
          <img src="./assets/women.jpg" />
          <h4>WOMEN</h4>
        </div>
        <div onClick={() => setCategory("electronics")}>
          <img src="./assets/electronics.jpg" />
          <h4>ELECTRONICS</h4>
        </div>
        <div onClick={() => setCategory("jewelery")}>
          <img src="./assets/jewelery.jpg" />
          <h4>JEWELERY</h4>
        </div>
      </div>
      <div className="homepage__banner__2">
        <div>
          <div className="homepage__banner__2__sub">
            <h6>FRESH ARRIVALS</h6>
            <h4>NEW STYLE</h4>
          </div>
        </div>
        <div>
          <div className="homepage__banner__2__sub">
            <h6>YOU'LL</h6>
            <h4>LOVE</h4>
          </div>
        </div>
      </div>
      <div className="homepage__cards__container">
        <h5>There is somthing for everyone</h5>
        <div className="homepage__cards">
          {items.map((item) => {
            return <Card key={item.id} item={item} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default Homepage;
