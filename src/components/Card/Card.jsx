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
  AddOneLike,
  AddOneDisLike,
}) {
  return (
    <div className="card-container">
      <div className="card-movie">
        <img src={image} alt={title} className="card-img" />
      </div>
      <div className="movie-infos">
        <h2 className="movie-title">{title}</h2>
        <div className="movie-categories">{category}</div>

        <div className="buttons-likes">
          <button onClick={AddOneLike}>
            <img
              className="like-png"
              src="https://spng.pngfind.com/pngs/s/28-281560_youtube-like-button-transparent-like-youtube-png-png.png"
              alt="like this movie"
            />
          </button>{" "}
          {likes}
          <button onClick={AddOneDisLike}>
            <img
              className="dislike-png"
              src="https://e7.pngegg.com/pngimages/360/748/png-clipart-facebook-dislike-illustration-social-media-facebook-like-button-facebook-dislike-blue-angle.png"
              alt="dislike this movie"
            />
          </button>
          {dislikes}
        </div>

        <button type="button" className="btn-delete" onClick={handleClick}>
          supprimer
        </button>
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
