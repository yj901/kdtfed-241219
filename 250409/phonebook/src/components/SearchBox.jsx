import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Row, Col, Button, Form } from "react-bootstrap";
import styled from "styled-components";

const Container = styled.div`
  & input[type="text"] {
    margin-bottom: 20px;
    padding: 8px;
    font-size: 1.6rem;
    &::placeholder {
      font-size: 1.6rem;
    }
  }
  & button {
    width: 100%;
    padding: 8px;
    font-size: 1.6rem;
  }
`;

const SearchBox = () => {
  const [keyword, setKeyword] = useState("");
  const dispatch = useDispatch();

  const searchByName = (e) => {
    e.preventDefault();
    dispatch({
      type: "SEARCH_BY_USERNAME",
      payload: { keyword },
    });
  };
  return (
    <Container>
      <Form onSubmit={searchByName}>
        <Form.Group>
          <Row>
            <Col xs={9}>
              <Form.Control
                type="text"
                placeholder="검색어를 입력해주세요"
                onChange={(e) => setKeyword(e.target.value)}
              />
            </Col>
            <Col xs={3}>
              <Button type="submit">찾기</Button>
            </Col>
          </Row>
        </Form.Group>
      </Form>
    </Container>
  );
};

export default SearchBox;
