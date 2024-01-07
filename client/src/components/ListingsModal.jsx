import { color } from "framer-motion";
import React from "react";
import Modal from "react-modal";
import { Link } from "react-router-dom";

Modal.setAppElement("#root");

const customStyles = {
    content: {
      maxWidth: "1000px", 
      maxHeight: "100vh", 
      margin: "0 auto",
      backgroundColor: "rgb(222, 231, 231)"

    },
  };

const ListingsModal = ({ isOpen, onRequestClose, listings, handleDeleteListing }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Listings Modal"
      style={customStyles}
    >
      <button
        onClick={onRequestClose}
        className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 focus:outline-none"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
      <div className="max-w-lg mx-auto p-3">
        <h1 className="text-3xl font-semibold text-center my-7">Your Listings</h1>
        {listings && listings.length > 0 ? (
          <div className="flex flex-col gap-4">
            {listings.map((listing) => (
              <div
                key={listing._id}
                className="border border-slate-400 rounded-lg p-3 flex justify-between items-center gap-5"
              >
                <Link to={`/listing/${listing._id}`}>
                  <img
                    src={listing.imageUrls[0]}
                    alt="listing cover"
                    className="h-16 w-16 object-contain"
                  />
                </Link>
                <Link to={`/listing/${listing._id}`} className="text-slate-700 font-semibold flex-1 hover:underline truncate">
                  <p>{listing.name}</p>
                </Link>
                <div className="flex flex-col p-3 items-center">
                  <Link to={`/update-listing/${listing._id}`}>
                    <button type="button" className="text-green-700 uppercase hover:underline ">
                      Edit
                    </button>
                  </Link>
                  <button
                    onClick={() => handleDeleteListing(listing._id)}
                    type="button"
                    className="text-red-700 uppercase hover:underline" 
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-slate-700">No listings available.</p>
        )}
        <button
          onClick={onRequestClose}
          className="mt-5 text-green-700 w-full p-3 border rounded-lg hover:opacity-65"
        >
          Close
        </button>
      </div>
    </Modal>
  );
};

export default ListingsModal;
