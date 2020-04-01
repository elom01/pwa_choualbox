import React, { useState, useEffect } from "react";
import Avatar from "../avatar";
import styled from "styled-components";
import {
  FaChevronCircleUp,
  FaChevronCircleDown,
  FaComment,
  FaHeart,
  FaShare
} from "react-icons/fa";
import uuid from "uuid/v4";
import Comment from "../commentaire";

const Article = (
  { username, title, content, date, points, group, countcoms },
  props
) => {
  const now = new Date();
  const temps = new Date(now - date).getUTCHours();

  const [active, setActive] = useState(false);
  const activeIt = () => {
    setActive(!active);
  };
  const [favorite, setFavorite] = useState(false);
  const favoriteIt = () => {
    setFavorite(!favorite);
  };

  let [point, setPoint] = useState(points);
  const addPoint = () => {
    setPoint(point++);
  };
  const removePoint = () => {
    setPoint(points--);
  };

  const [comment, setComment] = useState("");
  const [newComments, setComments] = useState([]);

  const onSubmit = e => {
      setComments(oldArray => [
        ...oldArray,
        {
          id: uuid(),
          comment: comment,
          date: now
        }
      ]);

    console.log(newComments);

    setComment("");
  };

  const [form, setForm] = useState({
    file: ""
  });

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
          <ViewerActions>{point} points </ViewerActions>
          <ViewerActions>{countcoms} coms </ViewerActions>
        </Section>
        <ContainerIcons>
          <DivIcons>
            <Link href="#!" onClick={addPoint}>
              <FaChevronCircleUp />
            </Link>
          </DivIcons>
          <DivIcons>
            <Link href="#!" onClick={removePoint}>
              <FaChevronCircleDown />
            </Link>
          </DivIcons>
          <DivIcons>
            <Link href="#!" onClick={activeIt}>
              <FaComment />
            </Link>
          </DivIcons>
          <DivIcons>
            <Link href="#!" onClick={favoriteIt} favorite={favorite}>
              <FaHeart />
            </Link>
          </DivIcons>
          <div>
            <Link href="#!">
              <FaShare />
            </Link>
          </div>
        </ContainerIcons>
        <DivForm active={active}>
          <CommentInput
            name="comment"
            placeholder="Comment"
            onChange={e => {
              setComment(e.target.value);
            }}
            type="text"
          ></CommentInput>
          <File
            name="v"
            type="file"
            onChange={e => {
              const files = e.target.files;
              const reader = new FileReader();
              reader.readAsDataURL(files[0]);
              reader.onload = e => {
                setForm({ ...form, file: e.target.result });
              };
            }}
          ></File>
          <Send onClick={onSubmit}>Send</Send>
        </DivForm>
        <DivComment>
          {newComments.map(value => (
            <Comment
              key={value.id}
              content={value.comment}
              date={value.date}
            ></Comment>
          ))}
        </DivComment>
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
  font-size: 13px;
  color: #808080;
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
const Link = styled.a`
  text-decoration: none;
  color: ${props => (props.favorite ? "red" : "#808080")};
  font-size: 19px;
`;

const DivForm = styled.div`
  display: ${props => (props.active ? "initial" : "none")};
`;

const CommentInput = styled.textarea`
  border: none;
  border-bottom: 1px solid #0091ff;
  padding: 0 5px;
  margin-bottom: 1em;
  font-size: 15px;
`;
const File = styled.input`
  border: none;
  margin-bottom: 1em;
  font-size: 15px;
`;

const Send = styled.button`
  border: none;
  border-radius: 4px;
  margin-bottom: 1em;
  background-color: #0091ff;
  color: white;
  font-size: 15px;
  font-weight: bold;
  width: 70px;
  height: 25px;
`;

const DivComment = styled.div``;

export default Article;
