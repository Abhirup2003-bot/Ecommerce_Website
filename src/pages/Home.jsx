import React, { useEffect } from "react";
import HeroSection from "../components/HeroSection";
import Cards from "../components/Cards";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchProduct, nextPage } from "../feature/product/productSlice";

const Home = () => {
  const { products, loading, page } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProduct(page));
  }, [page, dispatch]);

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop + 1 >=
        document.documentElement.scrollHeight &&
      !loading
    ) {
      dispatch(nextPage());
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [loading]);

  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen text-gray-900 dark:text-gray-100">
      <HeroSection />

      {/* TOP RATED */}
      <div className="text-2xl text-center my-6 font-bold">
        Our Top Rated Products
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 py-4 px-4">
        {products &&
          products
            .filter((item) => item.rating > 4)
            .slice(0, 8)
            .map((item) => (
              <Link to={`/productdetails/${item.id}`} key={item.id}>
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

      {/* SMARTPHONES */}
      <div className="text-2xl text-center my-6 font-bold">Our Furnitures</div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 py-4 px-4">
        {products &&
          products
            .filter((item) => item.category === "furniture")
            .slice(0, 4)
            .map((item) => (
              <Link to={`/productdetails/${item.id}`} key={item.id}>
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
    </div>
  );
};

export default Home;
