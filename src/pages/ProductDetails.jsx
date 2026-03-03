import React, { useContext } from "react";
import { useParams, Link } from "react-router-dom";
import ProductDetailsView from "../components/ProductDetailsView";
import Cards from "../components/Cards";
import { DataContext } from "../context/DataContext";

const ProductDetails = () => {
  const { id } = useParams();
  const { apiData } = useContext(DataContext);

  // If data not loaded yet
  if (!apiData || apiData.length === 0) {
    return <h2 className="text-center mt-10">Loading...</h2>;
  }

  const singleProduct = apiData.find((item) => item.id === Number(id));

  // If product not found
  if (!singleProduct) {
    return <h2 className="text-center mt-10">Product Not Found</h2>;
  }

  const relatedProducts = apiData.filter(
    (item) =>
      item.category === singleProduct.category && item.id !== singleProduct.id,
  );

  return (
    <>
      <ProductDetailsView
        id={singleProduct.id}
        title={singleProduct.title}
        image={singleProduct.thumbnail}
        price={singleProduct.price}
        rating={singleProduct.rating}
        category={singleProduct.category}
        description={singleProduct.description}
      />

      <h1 className="my-10 text-center text-3xl font-bold">Related Products</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 py-4">
        {relatedProducts.slice(0, 4).map((item) => (
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

export default ProductDetails;
