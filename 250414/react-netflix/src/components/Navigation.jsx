import { Container, Button, Form, Nav, Navbar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import styled from "styled-components";

const Wrapper = styled.div`
  & .me-navbar {
    width: 1550px;
    margin: 0 auto;
    background: var(--dark-color);
    @media screen and (max-width: 1650px) {
      width: 100%;
      padding: 0 20px;
    }
  }

  & .inner-item {
    padding: 10px 0;
  }

  & .me-2 {
    padding: 2px 14px;
    font-size: 1.6rem;
    position: relative;
  }

  & button[type="button"] {
    padding: 2px 14px;
    position: relative;
    font-size: 1.6rem;
  }
`;

const Logo = styled.img`
  width: 100px;
`;

const BtnItem = styled.span`
  color: var(--light-color);
  &:hover {
    color: var(--accent-color);
  }
`;

const Navigation = () => {
  return (
    <Wrapper>
      <Navbar className="me-navbar">
        <Container fluid className="inner-item">
          <Navbar.Brand href="/">
            <Logo
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/200px-Netflix_2015_logo.svg.png"
              alt="logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="/">
                <BtnItem>Home</BtnItem>
              </Nav.Link>
              <Nav.Link href="/movies">
                <BtnItem>Movie</BtnItem>
              </Nav.Link>
              <Nav.Link href="/">
                <BtnItem>TV</BtnItem>
              </Nav.Link>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-danger">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Wrapper>
  );
};

export default Navigation;
