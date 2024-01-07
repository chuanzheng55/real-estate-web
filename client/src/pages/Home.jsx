import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import SwiperCore from "swiper";
import "swiper/css/bundle";
import ListingItem from "../components/ListingItem";

import { motion } from "framer-motion";

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1 } },
  };

  const textVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 1, delay: 0.2 } },
  };

  const buttonVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { duration: 0.5, delay: 0.4 } },
    hover: { scale: 1.05 },
  };



const Home = () => {
  const [offerListings, setOfferListings] = useState([]);
  const [saleListings, setSaleListings] = useState([]);
  const [rentListings, setRentListings] = useState([]);
  SwiperCore.use(Navigation);

  useEffect(() => {
    const fetchOfferListings = async () => {
      try {
        const res = await fetch("/api/listing/get?offer=true&limit=6");
        const data = await res.json();
        setOfferListings(data);
        fetchRentListing();
      } catch (error) {
        console.log(error);
      }
    };
    const fetchRentListing = async () => {
      try {
        const res = await fetch("/api/listing/get?type=rent&limit=6");
        const data = await res.json();
        setRentListings(data);
        fetchSaleListing();
      } catch (error) {
        console.log(error);
      }
    };
    const fetchSaleListing = async () => {
      try {
        const res = await fetch("/api/listing/get?type=sale&limit=6");
        const data = await res.json();
        setSaleListings(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchOfferListings();
  }, []);

  return (
    <div>
     <motion.div
      className="bg-gradient-to-b from-blue-500 to-blue-300 p-8 text-white"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="max-w-6xl mx-auto">
        <motion.h1
          className="text-3xl md:text-6xl font-bold mb-4"
          variants={textVariants}
        >
          Find Your Next Home
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl mb-6"
          variants={textVariants}
        >
          DreamSpace helps you find your perfect place with ease. Our expert
          support is always available.
        </motion.p>
        <Link
          to={"/search"}
          className="text-blue-800 font-semibold hover:underline"
        >
          <motion.button
            variants={buttonVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Let's Get Started
          </motion.button>
        </Link>
      </div>
    </motion.div>
      <Swiper navigation>
        {offerListings &&
          offerListings.length > 0 &&
          offerListings.map((listing) => (
            <SwiperSlide key={listing._id}>
              <div
                style={{
                  background: `url(${listing.imageUrls[0]}) center no-repeat`,
                  backgroundSize: "cover",
                  height: "500px",
                }}
              ></div>
            </SwiperSlide>
          ))}
      </Swiper>

      <div className="max-w-6xl mx-auto p-8">
        {offerListings && offerListings.length > 0 && (
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">
              Recent Offers
            </h2>
            <Link
              className="text-blue-600 hover:underline text-sm font-semibold"
              to={'search?offer=true'}
            >
              See More Offers
            </Link>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
              {offerListings.map((listing) => (
                <ListingItem listing={listing} key={listing._id} />
              ))}
            </div>
          </div>
        )}

        {rentListings && rentListings.length > 0 && (
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">
              Recent Places for Rent
            </h2>
            <Link
              className="text-blue-600 hover:underline text-sm font-semibold"
              to={'search?type=rent'}
            >
              See More Places for Rent
            </Link>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
              {rentListings.map((listing) => (
                <ListingItem listing={listing} key={listing._id} />
              ))}
            </div>
          </div>
        )}

        {saleListings && saleListings.length > 0 && (
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">
              Recent Places for Sale
            </h2>
            <Link
              className="text-blue-600 hover:underline text-sm font-semibold"
              to={'search?type=sale'}
            >
              See More Places for Sale
            </Link>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
              {saleListings.map((listing) => (
                <ListingItem listing={listing} key={listing._id} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
