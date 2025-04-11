import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import { Container, Row, Col } from "react-bootstrap";

const ProductAll = () => {
  const [productList, setProductList] = useState([]);
  const [query, setQuery] = useSearchParams();

  const getProducts = async () => {
    let searchQuery = query.get("q") || "";
    const url = `https://my-json-server.typicode.com/yj901/ex-shoppingmall/products?q=${searchQuery}`;
    const resopnse = await fetch(url);
    const data = await resopnse.json();
    setProductList(data);
  };

  useEffect(() => {
    getProducts();
  }, [query]);

  return (
    <>
      <Container>
        <Row className="justify-content-center">
          {productList.map((menu, index) => (
            <Col className="mb-4" key={index} xs={12} sm={6} md={4} lg={3}>
              <ProductCard item={menu} />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default ProductAll;
