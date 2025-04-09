import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { Container, Row, Col, Dropdown, Button } from "react-bootstrap";

const Wrapper = styled.div`
  margin-top: 50px;
  & button {
    padding: 10px;
    font-size: 1.7rem;
  }
  & .dropdown-item {
    font-size: 1.7rem;
  }
`;

const Img = styled.img`
  width: 100%;
  border-radius: 10px;
`;
const ProductDesc = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
const ProductTitle = styled.div`
  font-size: 1.8rem;
`;
const ProductPrice = styled.div`
  font-size: 1.8rem;
`;
const ProductSale = styled.div`
  font-weight: 600;
  font-size: 2rem;
`;

const ProductDetail = () => {
  const [product, setProduct] = useState(null);
  const { id } = useParams();

  const getProductDetail = async () => {
    const url = `http://localhost:3000/products/${id}`;
    const resopnse = await fetch(url);
    const data = await resopnse.json();
    setProduct(data);
  };

  const formattedPrice = new Intl.NumberFormat("ko-KR", {
    style: "currency",
    currency: "KRW",
  }).format(product?.price);

  useEffect(() => {
    getProductDetail();
  }, []);

  return (
    <Container>
      <Wrapper>
        <Row>
          <Col>
            <Img src={product && product?.img} alt={product && product?.id} />
          </Col>
          <Col>
            <ProductDesc>
              <ProductTitle>상품명 : {product && product?.title}</ProductTitle>
              <ProductPrice>
                상품가격 : {product && formattedPrice}{" "}
              </ProductPrice>
              <ProductSale>
                {product && product?.sale ? "슈퍼세일" : ""}
              </ProductSale>
              <Dropdown.Toggle variant="outline-dark">
                사이즈 선택
              </Dropdown.Toggle>
              <Dropdown.Menu>
                {product &&
                  product?.size.length > 0 &&
                  product?.size.map((item, index) => (
                    <Dropdown.Item key={index} href="#">
                      {item}
                    </Dropdown.Item>
                  ))}
              </Dropdown.Menu>
              <Button variant="dark">장바구니</Button>
              <Button variant="success">상품결제</Button>
            </ProductDesc>
          </Col>
        </Row>
      </Wrapper>
    </Container>
  );
};

export default ProductDetail;
