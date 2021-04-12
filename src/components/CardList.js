import React from "react";
import Card from "./Card";
import "./CardList.css";

const CardList = ({ robots }) => {
  return (
    <div className="robotsContainer">
      {robots.map((_, i) => {
        return (
          <Card
            key={`${robots[i].id}${robots[i].name}`}
            id={robots[i].id}
            name={robots[i].name}
            email={robots[i].email}
          />
        );
      })}
    </div>
  );
};

export default CardList;
