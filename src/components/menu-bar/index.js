import React, { Component } from 'react';
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
library.add(fab);

class Toolbar extends Component {
    render() {
        return (
          <Bar>
            <a href="#!">
              <FontAwesomeIcon icon={["fas", "bars"]} />
              {/* <Icon class="fa fa-bars"></Icon> */}
            </a>
            <LinkR href="">
              {/* <Icon mgnr class="fas fa-user"></Icon> */}
              <FontAwesomeIcon icon={["fas", "user"]} />
            </LinkR>
            <a href="#!">
              <Logo>Choualbox</Logo>
            </a>
          </Bar>
        );
    }
}

const LinkR = styled.a`
  float: right;
`;

const Bar = styled.div`
  height: 3em;
  border-bottom: 1px solid #f2f2f2;
`;

// const Icon = styled.i`
//   color: #808080;
//   line-height: 50px;
//   float: left;
//   font-size: 18px;
//   text-align: center;
//   width: 50px;
//   height: 50px;
//   margin-right: ${props => props.mgnr ? "12px" : "0"};
// `;
const Logo = styled.span`
  text-transform: uppercase;
  font-weight: bolder;
  font-style: italic;
  color: #0091ff;
  display: inline-block;
  background-color: transparent;
  height: 50px;
  margin-right: 12px;
  opacity: 1;
  text-decoration: none;
  font-family: Comic Sans MS;
  line-height: 45px;
  padding-left: 5px;
  font-size: 23px;
`;

export default Toolbar;