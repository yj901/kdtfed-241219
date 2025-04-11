import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { Container, Row, Col, Dropdown, Button } from "react-bootstrap";

const Wrapper = styled.div`
  margin-top: 50px;
  & button {
    width: 100%;
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
  const [selectedSize, setSelectedSize] = useState("사이즈 선택");
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  const getProductDetail = async () => {
    setLoading(true);
    const url = `https://my-json-server.typicode.com/yj901/ex-shoppingmall/products/${id}`;
    const resopnse = await fetch(url);
    const data = await resopnse.json();
    setLoading(false);
    setProduct(data);
  };

  const formattedPrice = new Intl.NumberFormat("ko-KR", {
    style: "currency",
    currency: "KRW",
  }).format(product?.price);

  useEffect(() => {
    getProductDetail();
  }, []);

  if (loading || product === null) {
    return <h1>Loading...</h1>;
  } else {
    return (
      <Container>
        <Wrapper>
          <Row>
            <Col className="me-4 d-flex justify-content-end">
              <Img src={product?.img} alt={product?.id} />
            </Col>
            <Col>
              <ProductDesc>
                <ProductTitle>상품명 : {product?.title}</ProductTitle>
                <ProductPrice>상품가격 : {formattedPrice}</ProductPrice>
                <ProductSale>{product?.sale ? "슈퍼세일" : ""}</ProductSale>
                <Dropdown>
                  <Dropdown.Toggle variant="outline-dark" id="dropdown-basic">
                    {selectedSize}
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    {product &&
                      product?.size.length > 0 &&
                      product?.size.map((item, index) => (
                        <Dropdown.Item
                          key={index}
                          onClick={() => setSelectedSize(item)}
                        >
                          {item}
                        </Dropdown.Item>
                      ))}
                  </Dropdown.Menu>
                </Dropdown>
                <Button variant="dark">장바구니</Button>
                <Button variant="success">상품결제</Button>
              </ProductDesc>
            </Col>
          </Row>
        </Wrapper>
      </Container>
    );
  }
};

export default ProductDetail;
