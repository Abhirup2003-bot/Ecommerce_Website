import React, { useContext, useEffect, useState } from "react";
import Cards from "../components/Cards";
import { Link } from "react-router-dom";
import { DataContext } from "../context/DataContext";

const Product = () => {
  const { apiData } = useContext(DataContext);

  return (
    <>
      <div className="text-2xl text-center my-6 font-bold">Our Products</div>

      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-4 py-4">
        {apiData &&
          apiData.map((item) => (
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
