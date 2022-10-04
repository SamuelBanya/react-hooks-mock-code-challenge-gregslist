import React, { useState } from "react";

function ListingCard({ listing, onDeleteListing }) {
  const { id, image, description, location } = listing;

  const [favorited, setFavorited] = useState(false);

  function handleFavoriteClickFalse() {
    setFavorited(false);
  }

  function handleFavoriteClickTrue() {
    setFavorited(true);
  }

  function handleDeleteClick() {
    fetch(`https://react-hooks-mock-code-challenge.onrender.com/listings/${id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then(() => {
        console.log("Delete request success!");
        onDeleteListing(id);
      });
  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">
        {favorited ? (
          <button
            onClick={handleFavoriteClickFalse}
            className="emoji-button favorite active"
          >
            ★
          </button>
        ) : (
          <button
            onClick={handleFavoriteClickTrue}
            className="emoji-button favorite"
          >
            ☆
          </button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button onClick={handleDeleteClick} className="emoji-button delete">
          🗑
        </button>
      </div>
    </li>
  );
}

export default ListingCard;
