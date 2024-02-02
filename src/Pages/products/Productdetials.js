import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const renderStars = (rating) => {
  const stars = [];
  for (let i = 0; i < rating; i++) {
    stars.push(<span>⭐</span>);
  }
  return stars;
};

const FinalPrice = (Price, discountPercentage) => {
  const Final = Price - (Price * discountPercentage) / 100;
  return Final;
};

export default function Productdetials() {
  const { id } = useParams();
  console.log("id", id);
  const [products, setProducts] = useState([]);
  console.log("data", products);
  
  useEffect(() => {
    //Fetch APIs
    // fetch(`${process.env.REACT_APP_SECRETKEY}/products/${id}`)
    //   .then((response) => response.json())
    //   .then((record) => setProducts(record))
    //   .catch((error) => console.error(error));

    // Axios API
    axios
      .get(`${process.env.REACT_APP_SECRETKEY}/products/${id}`)
      .then((record) => {
        setProducts(record.data);
      })
      .catch((error) => console.log(error));
       // eslint-disable-next-line
  }, []);
  return (
    <>
      <div className="container m-5">
        <div className="row">
          <div className="col-md-6">
            <img
              src={products.thumbnail}
              alt="Product Description"
              className="product-img"
            />
          </div>
          <div className="col-md-6 product-data">
            <h1 className="text-capitalize">{products.title}</h1>
            <p>{products.description}</p>
            <p>Price- {products.price}$</p>
            <p className="discount">Discount: {products.discountPercentage}%</p>
            <p>
              Final Price:{" "}
              {parseFloat(
                FinalPrice(products.price, products.discountPercentage).toFixed(
                  2
                )
              )}{" "}
              $
            </p>
            <p>
              Rating: {renderStars(Math.round(products.rating))}
              {Math.round(products.rating)}
            </p>
            <p>Stock Price: {products.stock}</p>
            <p>Brand: {products.brand}</p>
            <p>Category: {products.category}</p>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <p className="data-p">Product Image</p>
          <div className="data-image">
            {products.images &&
              products.images.map((item, index) => (
                <div key={index} className="data-product-img col-md-2">
                  <img src={item} alt={index} className="data-product-img " />
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
}
