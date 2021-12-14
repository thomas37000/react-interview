import React from "react";
import PropTypes from "prop-types";
import "./Card.css";

export default function Card({
  category,
  dislikes,
  id,
  likes,
  title,
  handleClick,
  onToggle,
}) {
  return (
    <div className="card-container">
      <div className="card">
        <div className="card-movie">
          <h2 className="movie-title">{title}</h2>
        </div>
        <div className="technos">{category}</div>
      </div>
      <button
        type="button"
        className={likes ? "btn-like" : "btn-dislike"}
        onClick={onToggle}
      >
        {likes ? likes : dislikes}
      </button>
      <button type="button" className="btn-delete" onClick={handleClick}>
        supprimer
      </button>
    </div>
  );
}

Card.propTypes = {
  category: PropTypes.string.isRequired,
  dislikes: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
};
