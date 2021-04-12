import React from "react";

const Card = ({ id, name, email }) => {
  return (
    <div
      className="tc bg-lightest-blue dib br3 pa3 ma2 grow bw2 shadow-5"
      style={{ width: "300px", minWidth: "300px" }}
    >
      <img src={`https://robohash.org/${id}?size=200x200`} alt="robofriend" />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default Card;
