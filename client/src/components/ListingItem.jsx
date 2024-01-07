import React from "react";
import { Link } from "react-router-dom";
import { MdLocationOn } from "react-icons/md";
import { useState, useEffect } from "react";

const ListingItem = ({ listing }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    let interval;
    if (isHovering && listing.imageUrls.length > 1) {
      interval = setInterval(() => {
        setCurrentImageIndex(
          (prevIndex) => (prevIndex + 1) % listing.imageUrls.length
        );
      }, 500); // Change image every 500 milliseconds (0.5 second)
    }

    return () => clearInterval(interval);
  }, [isHovering, listing.imageUrls]);

  return (
    <div
      className="bg-white shadow-md hover:shadow-lg transition-shadow overflow-hidden rounded-lg w-full sm:w-[330px] relative"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <Link to={`/listing/${listing._id}`}>
        <div className="h-[320px] sm:h-[300px] w-full overflow-hidden">
          <img
            className="object-cover w-full h-full hover:scale-105 transition-all duration-300"
            src={listing.imageUrls[currentImageIndex]}
            alt="listing cover"
          />
        </div>
        <div className="p-3 flex flex-col gap-2 w-full">
          <p className=" truncate text-lg font-semibold text-slate-700">
            {listing.name}
          </p>
          <div className="flex items-center gap-1">
            <MdLocationOn className="h-4 w-4 text-green-700" />
            <p className="text-sm text-gray-600 truncate w-full font-semibold">
              {listing.address}
            </p>
          </div>
          <div>
            <p className="text-sm text-gray-600 line-clamp-3">
              {listing.description}
            </p>
            </div>

            {/* // bottom  */}
          <div className="">
            <p className=" text-slate-700 mt-2 font-semibold flex items-center">
              $
              {listing.offer
                ? (
                    Number(listing.regularPrice) - Number(listing.discountPrice)
                  ).toLocaleString("en-US")
                : Number(listing.regularPrice).toLocaleString("en-US")}
              {listing.type === "rent" && " / Month"}
            </p>

            <div className="flex gap-5 fiex">
              <div className="font-bold text-sm">
                {listing.bedrooms > 1
                  ? `${listing.bedrooms} Beds`
                  : `${listing.bedrooms} Bed`}
              </div>
              <div className="font-bold text-sm">
                {listing.bathrooms > 1
                  ? `${listing.bathrooms} Baths`
                  : `${listing.bathrooms} Bath`}
              </div>
            </div>
            </div>   
        </div>
      </Link>
    </div>
  );
};

export default ListingItem;
