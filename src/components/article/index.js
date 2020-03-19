import React, { Component } from 'react';
import Avatar from '../avatar';
import styled from "styled-components";

class Article extends Component {
    render() {
        return (
          <Container>
            <Avatar></Avatar>
            <SsContainer>
              <div>
                <Username>Username</Username>
              </div>
              <Section>
                <span role="img" aria-label="emoji">😄</span>
                <Theme>/g/blagues</Theme>- <time>1h</time>
              </Section>
              <Section>
                sfqsevxc s vsd sef e ff esfvrsvdvsd efsdf sdfsfefsed fs fze fzef
                sfqsevxc s vsd sef e ff esfvrsvdvsd efsdf sdfsfefsed fs fze fzef
                sfqsevxc s vsd sef e ff esfvrsvdvsd efsdf sdfsfefsed fs fze fzef
                sfqsevxc s vsd sef e ff esfvrsvdvsd efsdf sdfsfefsed fs fze fzef
                sfqsevxc s vsd sef e ff esfvrsvdvsd efsdf sdfsfefsed fs fze fzef
                sfqsevxc s vsd sef e ff esfvrsvdvsd efsdf sdfsfefsed fs fze fzef
                sfqsevxc s vsd sef e ff esfvrsvdvsd efsdf sdfsfefsed fs fze fzef
                sfqsevxc s vsd sef e ff esfvrsvdvsd efsdf sdfsfefsed fs fze fzef
              </Section>
              <Section>
                <ViewerActions>93 points</ViewerActions>
                <ViewerActions>10 coms</ViewerActions>
              </Section>
              <ContainerIcons>
                <DivIcons class="active">
                  <Link href="/">
                    <i class="fa fa-chevron-circle-up"></i>
                  </Link>
                </DivIcons>
                <DivIcons>
                  <Link href="/groupes/menu">
                    <i class="fa fa-chevron-circle-down"></i>
                  </Link>
                </DivIcons>
                <DivIcons>
                  <Link href="/box/poster">
                    <i class="fa fa-comment"></i>
                  </Link>
                </DivIcons>
                <DivIcons>
                  <Link href="/m/connexion">
                    <i class="fa fa-heart"></i>
                  </Link>
                </DivIcons>
                <div>
                  <Link href="/m/connexion">
                    <i class="fa fa-share"></i>
                  </Link>
                </div>
              </ContainerIcons>
            </SsContainer>
          </Container>
        );
    }
}

const Container = styled.div`
  display: flex;
  padding: 15px 10px;
  float: left;
  border-bottom: 1px solid #f2f2f2;
`;
const SsContainer = styled.div`
  margin-left: 1em;
`;
const Username = styled.span`
  font-size: 13px;
  font-weight: bold;
`;
const Section = styled.div`
  padding: 5px 0;
`;
const Theme = styled.span`
    font-size: 13px; color: #808080;
`;
const time = styled.span`
  font-size: 13px;
  color: #808080;
`;
const ViewerActions = styled.span`
  font-size: 12px;
  color: #808080;
  font-size: 12px;
  color: #808080;
`;

const ContainerIcons = styled.div`
    display: flex; 
    padding: 5px 0;
`;

const DivIcons = styled.div`
  height: 40px;
  width: 40px;
`;
const Link = styled.div`
  text-decoration: none;
  color: #808080;
  font-size: 19px;
`;

export default Article;