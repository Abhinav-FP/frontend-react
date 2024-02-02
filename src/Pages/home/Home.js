//import { Link } from "react-router-dom";
import "../../styles/Home.css";
//import Head from "./Head";
import ProductsLists from "../products/ProductsLists";
//import Footer from "../Footer";
function Home() {
  return (
    <div className="intro">
      <div className="grid-container">
      <ProductsLists/>
      </div>
      {/* <h1>Welcome to reactjs</h1>
      <p> This is a dummy page</p> */}
    </div>
  );
}
export default Home;
