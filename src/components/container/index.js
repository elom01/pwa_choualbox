import React, { Component } from 'react';
import Article from '../article';
import Quickbar from "../quick-bar";
import styled from "styled-components";

class Container extends Component {
    render() {
        return (
          <DivContainer>
            <Quickbar></Quickbar>
            <Article></Article>
          </DivContainer>
        );
    }
}

const DivContainer = styled.div`
  height: calc(100vh - 6em - 2px);
  overflow-y: scroll;
`; 

export default Container;