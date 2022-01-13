import React from "react";
import PropTypes from "prop-types";
import Trash from "../icons/Trash.jsx";
import Write from "../icons/Write.jsx";
import Like from "../icons/Like.jsx";
import Dislike from "../icons/Dislike.jsx";
import "../Card/Card.css";

export default function Card({
  category,
  dislikes,
  likes,
  title,
  handleClick,
  image,
  onLike,
  onDislike,
  comment,
  editToggle,
  handleEdit,
  setEditComment,
  commentUser,
}) {
  return (
    <div className="card-container">
      <div className="card-movie">
        <img src={image} alt={title} className="card-img" />
      </div>
      <div className="movie-infos">
        <div className="buttons-likes">
          <button onClick={onLike}>
            <Like />
          </button>{" "}
          {likes}
          <button onClick={onDislike}>
            <Dislike />
          </button>
          {dislikes}
          <button type="button" onClick={handleClick}>
            <Trash />
          </button>
          <div className="movie-categories">{category}</div>
        </div>
        <h2 className="movie-title">{title}</h2>
        {comment ? (
          <section className="card-comment">
            {editToggle ? (
              <form onSubmit={(e) => handleEdit(e)}>
                <textarea
                  type="text"
                  defaultValue={comment}
                  onChange={(e) => setEditComment(e.target.value)}
                />
                <input type="submit" value="Modifier" />
              </form>
            ) : (
              <>
                <h5 className="critique"> critique:</h5>
                <p className="comments">{comment}</p>
              </>
            )}
            <div className="author">
              <h6>{commentUser}</h6>
              <div className="edit-delete">
                <Write />
                <Trash />
              </div>
            </div>
          </section>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}

Card.propTypes = {
  category: PropTypes.string.isRequired,
  comment: PropTypes.string.isRequired,
  commentUser: PropTypes.string.isRequired,
  dislikes: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
};
