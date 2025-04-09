import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import { Container, Row, Col } from "react-bootstrap";

const ProductAll = () => {
  const [productList, setProductList] = useState([]);

  const getProducts = async () => {
    const url = "http://localhost:3000/products";
    const resopnse = await fetch(url);
    const data = await resopnse.json();
    setProductList(data);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <Container>
        <Row>
          {productList.map((menu, index) => (
            <Col key={index} lg={3}>
              <ProductCard item={menu} />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default ProductAll;
