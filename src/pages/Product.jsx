import React, { useEffect, useRef, useCallback } from "react";
import Cards from "../components/Cards";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchProduct, nextPage } from "../feature/product/productSlice";

const Product = () => {
  const dispatch = useDispatch();

  const { products, loading, page, hasMore } = useSelector(
    (state) => state.products,
  );

  const observer = useRef();

  // Fetch products
  useEffect(() => {
    dispatch(fetchProduct(page));
  }, [page, dispatch]);

  // Observer for last element
  const lastProductRef = useCallback(
    (node) => {
      if (loading) return;

      if (observer.current) observer.current.disconnect();

      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          dispatch(nextPage());
        }
      });

      if (node) observer.current.observe(node);
    },
    [loading, hasMore, dispatch],
  );

  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen text-gray-900 dark:text-gray-100">
      {/* TITLE */}
      <div className="text-2xl text-center py-6 font-bold">Our Products</div>

      {/* PRODUCTS GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-4 px-4">
        {products.map((item, index) => {
          if (products.length === index + 1) {
            return (
              <Link
                ref={lastProductRef}
                to={`/productdetails/${item.id}`}
                key={item.id}
              >
                <Cards
                  id={item.id}
                  title={item.title}
                  image={item.thumbnail}
                  price={item.price}
                  rating={item.rating}
                  category={item.category}
                />
              </Link>
            );
          }

          return (
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
          );
        })}
      </div>

      {/* LOADING */}
      {loading && (
        <h1 className="text-center py-6 text-lg text-gray-700 dark:text-gray-300">
          Loading more products...
        </h1>
      )}

      {/* NO MORE */}
      {!hasMore && (
        <h1 className="text-center py-6 text-gray-500 dark:text-gray-400">
          No more products
        </h1>
      )}
    </div>
  );
};

export default Product;
