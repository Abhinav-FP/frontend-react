import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import "../../styles/ProductsItem.css";
import { Link } from "react-router-dom";

export default function ProductItem(props) {
  const { item, fn } = props;
  const [added, setAdded] = useState(false);
  const handleCart = (item) => { 
    fn(item);
    setAdded(!added);
  }
  let result = item.title.replaceAll(" ", "-");
  result=result.replace(/\b\w/g, char => char.toUpperCase());;
  
  return (
    <div className=" container">
      <Col>
        <Card id="crd">
          {/* <Link to={`${item?.title}/${item?.id}`}> */}
          <Link to={`${result}/${item?.id}`}>
            <Card.Img variant="top" className="crd-img" src={item.thumbnail} />
            <Card.Body>
              <Card.Title className="crd-title text-start text-capitalize">{item.title}</Card.Title>
              <Card.Text className="crd-text">{item.description}</Card.Text>
              <Card.Title className="crd-title-price text-start">Price- ${item.price}</Card.Title>
            </Card.Body>
          </Link>
          <button type="button" onClick={() => handleCart(item)} className="btn btn-primary btn-sm">
            {added ? "Remove From Cart" : "Add to cart"}
          </button>
        </Card>
      </Col>
    </div>
  );
}
