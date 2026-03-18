import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import ProductDetailsView from "../components/ProductDetailsView";
import Cards from "../components/Cards";
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct } from "../feature/product/productSlice"; // ✅ correct import

const ProductDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const { products, loading, error } = useSelector((state) => state.products);

  // ✅ Fetch only when products are empty
  useEffect(() => {
    if (!products || products.length === 0) {
      dispatch(fetchProduct());
    }
  }, [dispatch, products]);

  if (loading)
    return (
      <h2 className="text-center mt-10 text-gray-800 dark:text-gray-200">
        Loading...
      </h2>
    );

  if (error)
    return (
      <h2 className="text-center mt-10 text-red-500 dark:text-red-400">
        {error}
      </h2>
    );

  if (!products || products.length === 0) {
    return (
      <h2 className="text-center mt-10 text-gray-800 dark:text-gray-200">
        Loading...
      </h2>
    );
  }

  const singleProduct = products.find((item) => item.id === Number(id));

  if (!singleProduct) {
    return (
      <h2 className="text-center mt-10 text-gray-800 dark:text-gray-200">
        Product Not Found
      </h2>
    );
  }

  const relatedProducts = products.filter(
    (item) =>
      item.category === singleProduct.category && item.id !== singleProduct.id,
  );

  return (
    <div className="bg-white dark:bg-[#0F1111] min-h-screen">
      <>
        <ProductDetailsView
          id={singleProduct.id}
          title={singleProduct.title}
          image={singleProduct.thumbnail}
          price={singleProduct.price}
          rating={singleProduct.rating}
          category={singleProduct.category}
          description={singleProduct.description}
          images={singleProduct.images}
          returnPolicy={singleProduct.returnPolicy}
        />

        <h1 className="my-10 text-center text-3xl font-bold text-gray-900 dark:text-gray-100">
          Related Products
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 py-4">
          {relatedProducts.slice(0, 8).map((item) => (
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
    </div>
  );
};

export default ProductDetails;
