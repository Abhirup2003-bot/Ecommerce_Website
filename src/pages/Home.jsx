import React, { useContext, useEffect, useState } from "react";
import HeroSection from "../components/HeroSection";
import Cards from "../components/Cards";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { featchProduct } from "../feature/product/productSlice";

const Home = () => {
  const { products, loading, error } = useSelector((state) => state.products);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(featchProduct());
  }, [dispatch]);

  return (
    <>
      <HeroSection />
      <div className="text-2xl text-center my-6 font-bold">
        Our Highest Rated Products
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 py-4">
        {products &&
          products
            .filter((item) => item.rating > 4.1)
            .slice(0, 4)
            .map((item) => (
              <Link to="product" key={item.id}>
                <Cards
                  id={item.id}
                  title={item.title}
                  image={item.thumbnail}
                  price={item.price}
                  rating={item.rating}
                  category={item.category}
                />
              </Link>
            ))}
      </div>
      <div className="text-2xl text-center my-6 font-bold">
        Our Fragrances Products
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 py-4">
        {products &&
          products
            .filter((item) => item.category === "fragrances")
            .slice(0, 4)
            .map((item) => (
              <Link to="product" key={item.id}>
                <Cards
                  id={item.id}
                  title={item.title}
                  image={item.thumbnail}
                  price={item.price}
                  rating={item.rating}
                  category={item.category}
                />
              </Link>
            ))}
      </div>
    </>
  );
};

export default Home;
