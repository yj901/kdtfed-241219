import GlobalStyles from "./GlobalStyles.styles";
import { Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";

const Title = styled.h1`
  margin: 100px 0;
  text-align: center;
  font-size: 3.2rem;
  font-weight: 600;
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <Title>연락처</Title>
      <Container>
        <Row>
          <Col className="me-4">
            <ContactForm />
          </Col>
          <Col>
            <ContactList />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
