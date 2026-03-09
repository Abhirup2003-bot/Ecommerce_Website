import React from "react";
import { useParams, Link } from "react-router-dom";
import ProductDetailsView from "../components/ProductDetailsView";
import Cards from "../components/Cards";
import { useSelector } from "react-redux";

const ProductDetails = () => {
  const { id } = useParams();

  const { products, loading, error } = useSelector((state) => state.products);

  if (loading) return <h2 className="text-center mt-10">Loading...</h2>;
  if (error) return <h2 className="text-center mt-10">{error}</h2>;

  if (!products || products.length === 0) {
    return <h2 className="text-center mt-10">Loading...</h2>;
  }

  const singleProduct = products.find((item) => item.id === Number(id));

  if (!singleProduct) {
    return <h2 className="text-center mt-10">Product Not Found</h2>;
  }

  const relatedProducts = products.filter(
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
