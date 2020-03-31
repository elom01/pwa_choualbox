import React, { Component } from 'react';
import Avatar from '../avatar';
import CommentForm from "../commentaire-form";
import styled from "styled-components";
import { FaChevronCircleUp, FaChevronCircleDown, FaComment, FaHeart, FaShare } from "react-icons/fa";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

const Article = (
  { username, title, content, date, group, points, countcoms },
  props
) => {
  const now = new Date();
  const temps = new Date(now - date).getUTCHours();
  const addComment = (e, form) => {
    console.log(form);
    e.preventDefault();
    props.actions.CommentForm.addComment(form);
  };

  return (
    <Container>
      <Avatar></Avatar>
      <SsContainer>
        <div>
          <Username>{username}</Username>
        </div>
        <Section>
          <span role="img" aria-label="emoji">
            😄
          </span>
          <Theme>/g/{group}</Theme>- <time>{temps}</time>
        </Section>
        <Section>{content}</Section>
        <Section>
          <ViewerActions>{points} points </ViewerActions>
          <ViewerActions>{countcoms} coms </ViewerActions>
        </Section>
        <ContainerIcons>
          <DivIcons className="active">
            <Link href="/">
              <FaChevronCircleUp />
            </Link>
          </DivIcons>
          <DivIcons>
            <Link href="/groupes/menu">
              <FaChevronCircleDown />
            </Link>
          </DivIcons>
          <DivIcons>
            <Link href="/box/poster">
              <FaComment />
            </Link>
          </DivIcons>
          <DivIcons>
            <Link href="/m/connexion">
              <FaHeart />
            </Link>
          </DivIcons>
          <div>
            <Link href="/m/connexion">
              <FaShare />
            </Link>
          </div>
        </ContainerIcons>
        <CommentForm submit="addComment"></CommentForm>
      </SsContainer>
    </Container>
  );
};

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