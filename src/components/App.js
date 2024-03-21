import React, { useState, useEffect } from "react";
import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [showForm, setShowForm] = useState(false); 
  const [finalToyList, setFinalToyList] = useState([])
  const [ deletedToy, setDeletedToy ] = useState({})
  // const [toys, setToys] = useState([]);


  function handleLikeClick(likes, id) {
    fetch(`http://localhost:3001/toys/${id}`,{
      method: "PATCH",
      headers: {
        "Content-Type": "application/JSON"
      },
      body: JSON.stringify({
        likes: likes + 1
      })
    })
      .then(r => r.json())
      .then(updatedToy => {
        const updatedToysListAfterLikes = finalToyList.map(toy => {
          if(toy.id === updatedToy.id){
            return {...toy, likes: updatedToy.likes}
          } else {
            return toy
          }
        })
        setFinalToyList(updatedToysListAfterLikes)
      })
}
  function handleDeleteClick(toyObj){
    console.log(toyObj)
    setDeletedToy(toyObj)
    fetch(`http://localhost:3001/toys/${toyObj.id}`,{
      method: "DELETE",
    })
      
      setFinalToyList(finalToyList.filter(toy => toy.id !== toyObj.id))
  }

//Undo Button
function handleUndoButton () {
  console.log("UNdo:", deletedToy)
  handleSubmit(deletedToy)
}
//Undo Button

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }
  function handleSubmit (newToy) {
    fetch("http://localhost:3001/toys",{
      method: "POST",
      headers: {
        "Content-Type": "application/JSON"
      },
      body: JSON.stringify(newToy)
    })
    .then(r => r.json())
    .then(postedToy => setFinalToyList([...finalToyList, postedToy]))
    .catch(error => console.error(error))
  }

//GET fetch toys in parent component to send to everyone who needs unless otherwise
  useEffect(() => {
    fetch("http://localhost:3001/toys")
      .then(r => r.json())
      .then(toys => {
        setFinalToyList(toys) //toys is an object with one key value pair: toys:[toys]
        })
  }, [])
  return (
    <>
      <Header />
      {showForm ? <ToyForm handleSubmit={handleSubmit}/> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
        <button className="undoButton" onClick={handleUndoButton}>Undo</button>
      </div>
      <ToyContainer 
        toys={finalToyList} 
        handleDeleteClick={handleDeleteClick} 
        handleLikeClick={handleLikeClick}
        />
    </>
  );
}

export default App;
