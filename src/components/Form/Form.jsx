import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addMovie, getPosts } from "../../actions/postAction";
import "./Form.css";

const Form = () => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const dispatch = useDispatch();

  const handleForm = async (e) => {
    e.preventDefault();

    if (title && category) {
      const data = {
        title,
        category,
        likes: 0,
      };

      await dispatch(addMovie(data));
      // arès le submit clear le formulaire
      setTitle("");
      setCategory("");
      // ajoute un id au film en json après le submit
      dispatch(getPosts());
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={(e) => handleForm(e)} className="formulaire">
        Ajouter un film
        <input
          type="text"
          placeholder="Titre du Film"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
        <input
          type="text"
          placeholder="Thriller..."
          onChange={(e) => setCategory(e.target.value)}
          value={category}
        />
        <input type="submit" value="Envoyer" />
      </form>
    </div>
  );
};

export default Form;
