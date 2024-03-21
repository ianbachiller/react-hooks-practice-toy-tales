import React, {useState} from "react";

function ToyForm({handleFormSubmit, handleSubmit}) {
  const[ toyName, setToyName ] = useState("")
  const[ toyImage, setToyImage ] = useState("")
  function handleNameChange (e) {
    setToyName(e.target.value)
  }
  function handleImageChange (e) {
    setToyImage(e.target.value)
  }
  function handleFormSubmit (e){
    e.preventDefault()
    const newToy = {
      name: toyName,
      image: toyImage,
      likes: 0
    }
    handleSubmit(newToy)
    setToyName("")
    setToyImage("")
  }
  return (
    <div className="container">
      <form className="add-toy-form" onSubmit={handleFormSubmit}>
        <h3>Create a toy!</h3>
        <input
          type="text"
          name="name"
          placeholder="Enter a toy's name..."
          className="input-text"
          value={toyName}
          onChange={handleNameChange}
        />
        <br />
        <input
          type="text"
          name="image"
          placeholder="Enter a toy's image URL..."
          className="input-text"
          value={toyImage}
          onChange={handleImageChange}        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
        />
      </form>
    </div>
  );
}

export default ToyForm;
