import React, { Component } from 'react';
import styled from "styled-components";
import { FaBars, FaUser } from "react-icons/fa";

const Toolbar = () => {
        return (
          <Bar>
            <DivLeft>
              <BarLink href="#!">
                <FaBars />
              </BarLink>
              <a href="#!">
                <Logo>Choualbox</Logo>
              </a>
            </DivLeft>
            <DivRight>
              <BarLink href="">
                <FaUser />
              </BarLink>
            </DivRight>
          </Bar>
        );
    }

const DivRight = styled.div`
  width: 100%;
  text-align: right;
`;
const DivLeft = styled.div`
  display: flex;
  align-items: center;
  align-content: space-evenly;
  width: 100%;
`;

const BarLink = styled.a`
    color:#808080;
`;

const Bar = styled.div`
  display: flex;
  height: 3em;
  border-bottom: 1px solid #f2f2f2;
  align-items: center;
  padding: 0 1em;
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