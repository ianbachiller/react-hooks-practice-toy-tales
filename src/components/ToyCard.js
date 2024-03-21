import React, { useState} from "react";

function ToyCard({name, image, likes, toyObj, handleDeleteClick, handleLikeClick}) {

  return (
    <div className="card">
      <h2>{name}</h2>
      <img
        src={image}
        alt={name}
        className="toy-avatar"
      />
      <p> {likes} Likes </p>
      <button className="like-btn" onClick={() => handleLikeClick(likes, toyObj.id)}> Like {"👍🏼"}</button>
      <button className="del-btn" onClick={() => handleDeleteClick(toyObj)}> Donate </button>
    </div>
  );
}

export default ToyCard;
