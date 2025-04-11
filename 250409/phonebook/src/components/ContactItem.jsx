import React from "react";
import { Row, Col } from "react-bootstrap";
import styled from "styled-components";

const Img = styled.img`
  width: 100%;
  border-radius: 10px;
`;

const Name = styled.div`
  font-size: 2rem;
  padding: 8px;
  border-radius: 8px;
  background: #f2f2f2;
  font-weight: bold;
  margin-bottom: 8px;
`;

const Num = styled.div`
  font-size: 1.7rem;
`;

const ContactItem = ({ item }) => {
  return (
    <Row>
      <Col xs={3}>
        <Img
          src="https://upload.wikimedia.org/wikipedia/commons/b/bc/Unknown_person.jpg"
          alt="img"
        />
      </Col>
      <Col xs={9}>
        <Name>{item?.name}</Name>
        <Num>{item?.phoneNumber}</Num>
      </Col>
    </Row>
  );
};

export default ContactItem;
