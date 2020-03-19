import React, { Component } from 'react';
import styled from "styled-components";

class toolbar extends Component {
    render() {
        return (
          <Container>
            <DivLink class="active">
              <Link active href="/">
                <i class="fa fa-home"></i>
              </Link>
            </DivLink>
            <DivLink>
              <Link href="/groupes/menu">
                <i class="fa fa-search"></i>
              </Link>
            </DivLink>
            <DivLink>
              <Link href="/box/poster">
                <i class="fa fa-camera"></i>
              </Link>
            </DivLink>
            <DivLink>
              <Link href="/m/connexion">
                <i class="fa fa-comment"></i>
              </Link>
            </DivLink>
            <DivLink>
              <Link href="/m/connexion">
                <i class="fa fa-user"></i>
              </Link>
            </DivLink>
          </Container>
        );
    }
}


const Container = styled.div`
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

export default toolbar;