import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({toys, handleDeleteClick, handleLikeClick}) {
  const finalList = toys
  const mapFinalToyList = finalList.map(toy => 
    <ToyCard 
      key={toy.id} 
      name={toy.name}
      image={toy.image}
      likes={toy.likes}
      toyObj={toy}
      handleDeleteClick={handleDeleteClick}
      handleLikeClick={handleLikeClick}
      />)
  return (
    <div id="toy-collection">{mapFinalToyList}</div>
  );
}

export default ToyContainer;
