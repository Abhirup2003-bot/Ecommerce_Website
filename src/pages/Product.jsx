import React, { useContext, useEffect, useState } from "react";
import Cards from "../components/Cards";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { featchProduct } from "../feature/product/productSlice";
// import { DataContext } from "../context/DataContext";

const Product = () => {
  // const { apiData } = useContext(DataContext);
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(featchProduct());
  }, [dispatch]);

  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>{error}</h1>;

  return (
    <>
      <div className="text-2xl text-center my-6 font-bold">Our Products</div>

      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-4 py-4">
        {products &&
          products.map((item) => (
            <Link to={`/productdetails/${item.id}`} key={item.id}>
              <Cards
                key={item.id}
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

export default Product;
