//import Row from 'react-bootstrap/Row';
//import logo512 from "../../assets/img/logo512.png";
//import { Link } from 'react-router-dom';
import { useContext, useEffect, useState } from "react";
import ProductItem from "./ProductItem";
import { UserContext } from "../../Context/UserContextProvider";
//import CartIcon from '../Cart/CartIcon';

function ProductsLists() {
  const { setText } = useContext(UserContext);
  const [cartItems, setCartItems] = useState([]);
  const [products, setProducts] = useState([]);
  const [showProducts, setShowProducts] = useState([]);
  
  // useEffect(() => {
  //   localStorage && localStorage.setItem("cart", cartItems?.length);
  // }, [cartItems]);
  useEffect(() => {
    fetch(`${process.env.REACT_APP_SECRETKEY}/products`)
      .then((response) => response.json())
      .then((record) => {
        setProducts(record.products);
        setShowProducts(record.products); // Initialize showProducts with all products
      })
      .catch((error) => console.error(error));
  }, []);

  const handleClick = (clickedItem) => {
    const itemIndex = cartItems.findIndex((item) => item.id === clickedItem.id);
    if (itemIndex === -1) {
      const newCartItems = [...cartItems, clickedItem];
      setCartItems([...cartItems, clickedItem]);
      setText(newCartItems);
    } else {
      const updatedCartItems = [...cartItems];
      console.log("updatedCartItems", updatedCartItems);
      updatedCartItems.splice(itemIndex, 1);
      setCartItems(updatedCartItems);
      setText(updatedCartItems);
    }
  };

  const [select, setSelect] = useState("All");
  const filter = (value) => {
    setSelect(value);
    let filteredProducts = [];
    if (value === "All") {
      filteredProducts = products;
    } else if (value === "Smartphones") {
      filteredProducts = products.filter(
        (item) => item.category === "smartphones"
      );
    } else if (value === "Laptops") {
      filteredProducts = products.filter((item) => item.category === "laptops");
    } else if (value === "Perfumes") {
      filteredProducts = products.filter(
        (item) => item.category === "fragrances"
      );
    } else if (value === "Skincare") {
      filteredProducts = products.filter(
        (item) => item.category === "skincare"
      );
    } else if (value === "Groceries") {
      filteredProducts = products.filter(
        (item) => item.category === "groceries"
      );
    } else if (value === "Home-Decoration") {
      filteredProducts = products.filter(
        (item) => item.category === "home-decoration"
      );
    }
    setShowProducts(filteredProducts);
  };

  const FilterCategories = [
    "All",
    "Smartphones",
    "Laptops",
    "Perfumes",
    "Skincare",
    "Groceries",
    "Home-Decoration",
  ];

  return (
    <div className="container">
      <div className="d-flex justify-content-center">
        {FilterCategories &&
          FilterCategories.length &&
          FilterCategories.map((value) => (
            <button
              key={value}
              type="button"
              className={`btn btn-sm ${value===select?"btn-primary":"btn-light"} mt-3 mb-1 mx-2`}
              onClick={() => filter(value)}
            >
              {value}
            </button>
          ))}
      </div>
      <div className="row">
        {/* FilterCategories buttons */}
        {/* Product items on Home Page */}
        {showProducts &&
          showProducts.length &&
          showProducts.map((item, index) => (
            <div className="col-md-3 col-sm-6" key={index}>
              <ProductItem item={item} fn={handleClick} />
            </div>
          ))}
      </div>
    </div>
  );
}
export default ProductsLists;
