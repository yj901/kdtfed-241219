import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import styled from "styled-components";
import { addContact } from "../redux/reducer";

const Container = styled.div`
  & input[type="text"] {
    margin-bottom: 20px;
    padding: 8px;
    font-size: 1.6rem;
    &::placeholder {
      font-size: 1.6rem;
    }
  }
  & button[type="submit"] {
    width: 100%;
    padding: 8px;
    font-size: 1.6rem;
  }
`;

const ContactForm = () => {
  const [name, setName] = useState("");
  const [phoneNum, setPhoneNum] = useState("");
  const dispatch = useDispatch();

  const addContactHandler = (e) => {
    e.preventDefault();
    if (!name || !phoneNum) return alert("정상적인 값을 입력해주세요");
    dispatch(addContact({ name, phoneNum }));
    setName("");
    setPhoneNum("");
  };
  return (
    <Container>
      <Form onSubmit={addContactHandler}>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>이름</Form.Label>
          <Form.Control
            value={name}
            type="text"
            placeholder="이름 입력"
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasic">
          <Form.Label>전화번호</Form.Label>
          <Form.Control
            value={phoneNum}
            type="text"
            placeholder="전화번호 입력"
            onChange={(e) => setPhoneNum(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          추가
        </Button>
      </Form>
    </Container>
  );
};

export default ContactForm;
