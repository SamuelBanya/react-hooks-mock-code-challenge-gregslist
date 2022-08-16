import React, { useState, useEffect } from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({ search }) {
  const [listings, setListings] = useState([]);
  useEffect(() => {
    fetch("https://gregslist-jsonserver.herokuapp.com/listings")
      .then((response) => response.json())
      .then((listings) => setListings(listings));
  }, []);

  function handleDeleteListing(id) {
    const updatedListingsArray = listings.filter(
      (listing) => listing.id !== id
    );
    setListings(updatedListingsArray);
  }

  const filteredListings = listings.filter((listing) => {
    return listing.description.includes(search);
  });

  const listingCards = filteredListings.map((listingObj) => {
    return (
      <ListingCard
        key={listingObj["id"]}
        listing={listingObj}
        onDeleteListing={handleDeleteListing}
      />
    );
  });

  console.log("filteredListings: ", filteredListings);

  return (
    <main>
      <ul className="cards">{listingCards}</ul>
    </main>
  );
}

export default ListingsContainer;
