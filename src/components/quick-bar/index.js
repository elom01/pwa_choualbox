import React, { Component } from "react";
import styled from "styled-components";

class Quickbar extends Component {
  render() {
    return (
      <Container>
        <DivLink class="active">
          <Link href="#!"><span>Populaires</span></Link>
        </DivLink>
        <DivLink>
          <Link href="#!"><span>Nouveaux</span></Link>
        </DivLink>
        <DivLink>
          <Link href="#!"><span>Actifs</span></Link>
        </DivLink>
        <DivLink>
          <Link href="#!"><span>Meilleurs</span></Link>
        </DivLink>
      </Container>
    );
  }
}

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 8px;
`;
const DivLink = styled.div`
  background: #f3f3f3;
  border-radius: 6px;
  padding: 8px;
`;
const Link = styled.a`
  text-decoration: none;
  color: #808080;
  font-size: 13px;
`;

export default Quickbar;
