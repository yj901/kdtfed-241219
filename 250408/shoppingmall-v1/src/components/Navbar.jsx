import React, { useState } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faUser,
  faBars,
  faClose,
} from "@fortawesome/free-solid-svg-icons";
import { useAuth } from "../AuthContext";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Logo = styled.div`
  width: 170px;
  margin: 10px 0 20px;
  a {
    display: block;
  }
  & img {
    width: 100%;
  }
`;

const MenuArea = styled.ul`
  display: flex;
  gap: 20px;
`;

const HeaderTop = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 20px;
  position: absolute;
  top: 25px;
  right: 20px;
`;

const SearchBox = styled.div`
  & > input {
    width: 140px;
    border: none;
    border-bottom: 1px solid var(--dark-color);
    padding: 4px 6px;
    &::placeholder {
      opacity: 1;
      transition: opacity 0.3s;
    }
    &:focus {
      outline: none;
      &::placeholder {
        opacity: 0;
      }
    }
  }
`;

const LoginAuth = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  cursor: pointer;
`;

const ToggleButton = styled.div`
  position: absolute;
  top: 30px;
  left: 30px;
  cursor: pointer;
`;

const SideMenu = styled.div`
  width: ${({ width }) => (width === undefined ? 0 : `${width}px`)};
  /* width: 250px; */
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background: var(--dark-color);
  color: var(--light-color);
  z-index: 5;
  transition: all 0.3s;
  overflow: hidden;
  & > svg {
    position: absolute;
    top: 30px;
    right: 30px;
    cursor: pointer;
    font-size: 2.2rem;
  }
  & > ul {
    display: flex;
    flex-direction: column;
    gap: 30px;
    font-size: 1.8rem;
    padding: 70px 40px;
    & > li {
      cursor: pointer;
      word-break: keep-all;
    }
  }
`;

const menuList = [
  "여성",
  "남성",
  "추천",
  "브랜드",
  "베스트",
  "신제품",
  "이벤트",
  "슈퍼세일",
];

const Navbar = () => {
  const { authenticate, setAuthenticate } = useAuth();
  const [width, setWidth] = useState();
  const [opacity, setOpacity] = useState(0);
  const navigate = useNavigate();

  const onCheckEnter = (e) => {
    if (e.key === "Enter") navigate(`?q=${e.target.value}`);
  };

  const goToLogin = () => {
    navigate("/login");
  };

  return (
    <>
      <Container>
        <Logo>
          <Link to={"/"}>
            <img
              src="https://i.namu.wiki/i/QFzK26X2eiqKigDmhM-0Tl0jnnfSZWDC7xgRzzJfrUHy1HdJ3iWnkWWapoDixDajvEQN6TypKjBRh1M-KHjLUR9X2HTb36e8wKHGJhmfljjXXsPSMTJd-8OnbrFxx1uKC-I09As38llC03Zxg2LrVw.webp"
              alt="musinsa"
            />
          </Link>
        </Logo>
        <MenuArea className="menu">
          {menuList.map((menu, index) => (
            <li key={index}>
              <a href="#">{menu}</a>
            </li>
          ))}
        </MenuArea>
        <HeaderTop>
          {authenticate ? (
            <LoginAuth
              onClick={() => {
                setAuthenticate(false);
                navigate("/");
              }}
            >
              <FontAwesomeIcon icon={faUser} />
              <span>로그아웃</span>
            </LoginAuth>
          ) : (
            <LoginAuth onClick={goToLogin}>
              <FontAwesomeIcon icon={faUser} />
              <span>로그인</span>
            </LoginAuth>
          )}

          <SearchBox>
            <FontAwesomeIcon icon={faSearch} />
            <input type="text" placeholder="상품검색" onKeyUp={onCheckEnter} />
          </SearchBox>
        </HeaderTop>
        <SideMenu width={width} opacity={opacity}>
          <FontAwesomeIcon
            icon={faClose}
            onClick={() => {
              setWidth(0);
              setOpacity(0);
            }}
          />
          <ul className="side-menu-list">
            {menuList.map((menu, index) => (
              <li key={index}>{menu}</li>
            ))}
          </ul>
        </SideMenu>
        <ToggleButton>
          <FontAwesomeIcon
            icon={faBars}
            onClick={() => {
              setWidth(250);
              setOpacity(1);
            }}
          />
        </ToggleButton>
      </Container>
    </>
  );
};

export default Navbar;
