import React, { useState } from "react";
import styled from "styled-components";
import ArticleForm from "../article-form";
import { FaHome, FaSearch, FaCamera, FaComment, FaUser } from "react-icons/fa";

const Toolbar = () => {
  const [active, setActive] = useState(false);
  const activeIt = () => {
    setActive(!active);
  };

  return (
    <Container>
      <ContainerBar>
        <DivLink>
          <Link active href="/">
            <FaHome></FaHome>
          </Link>
        </DivLink>
        <DivLink>
          <Link href="/groupes/menu">
            <FaSearch />
          </Link>
        </DivLink>
        <DivLink>
          <Link href="/box/poster">
            <FaCamera />
          </Link>
        </DivLink>
        <DivLink>
          <Link href="#!" onClick={activeIt}>
            <FaComment />
          </Link>
        </DivLink>
        <DivLink>
          <Link href="/m/connexion">
            <FaUser />
          </Link>
        </DivLink>
      </ContainerBar>
      <DivForm active={active}>
        <ArticleForm></ArticleForm>
      </DivForm>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
const ContainerBar = styled.div`
  display: flex;
  height: 3em;
  border-bottom: 1px solid #f2f2f2;
`;
const DivLink = styled.div`
  line-height: 50px;
  font-size: 18px;
  text-align: center;
  width: calc(100vw / 5);
  height: 50px;
`;
const Link = styled.a`
  color: ${props => (props.active ? "#0091ff" : "#808080")};
`;

const DivForm = styled.div`
  display: ${props => (props.active ? "flex" : "none")};
  justify-content: center;
`;

export default Toolbar;
