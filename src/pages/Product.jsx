import React, { useEffect } from "react";
import Cards from "../components/Cards";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchProduct, nextPage } from "../feature/product/productSlice";

const Product = () => {
  const dispatch = useDispatch();

  const { products, loading, error, page } = useSelector(
    (state) => state.products,
  );

  useEffect(() => {
    dispatch(fetchProduct(page));
  }, [page, dispatch]);

  const handleScroll = () => {
    if (
      window.innerHeight + window.scrollY >=
      document.documentElement.scrollHeight - 50
    ) {
      dispatch(nextPage());
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (loading) return <h1 className="text-center text-xl">Loading...</h1>;
  if (error) return <h1 className="text-center text-red-500">{error}</h1>;

  return (
    <>
      <div className="text-2xl text-center my-6 font-bold">Our Products</div>

      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-4 py-4">
        {products &&
          products.map((item) => (
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
    </>
  );
};

export default Product;
