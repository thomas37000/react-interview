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
  image,
}) {
  return (
    <div className="card-container">
      <div className="card-movie">
        <img src={image} alt={title} className="card-img" />
      </div>
      <div className="movie-infos">
        <h2 className="movie-title">{title}</h2>
        <div className="movie-categories">{category}</div>
        <div className="btn-list">
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
      </div>
    </div>
  );
}

Card.propTypes = {
  category: PropTypes.string.isRequired,
  dislikes: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
};
