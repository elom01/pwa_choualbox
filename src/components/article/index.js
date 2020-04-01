import React, { useState } from "react";
import Avatar from "../avatar";
import styled from "styled-components";
import {
  FaChevronCircleUp,
  FaChevronCircleDown,
  FaComment,
  FaHeart,
  FaShare,
  FaUserCircle
} from "react-icons/fa";
import uuid from "uuid/v4";

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
    setPoint(point + 1);
  };
  const removePoint = () => {
    setPoint(point - 1);
  };

  const [comment, setComment] = useState("");
  const [newComments, setComments] = useState([]);
  const [filename, setFilename] = useState("");
  const [file, setFile] = useState("");
  const onSubmit =()=> {
    console.log(file);
          
      setComments([
        ...newComments,
        {
          id: uuid(),
          user: "Anonymous",
          comment: comment,
          file: file,
          filename: filename,
          date: now
        }
      ]);
    setActive(false);
    setComment("");
    setFilename("");
    setFile("");
  };

  countcoms = newComments.length;

  

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
            accept="image/*"
            name="comment"
            placeholder="Comment"
            value={comment}
            onChange={e => {
              setComment(e.target.value);
            }}
            type="text"
          ></CommentInput>
          <File
            name="v"
            type="file"
            value={filename}
            onChange={e => {
              const files = e.target.files;
              const reader = new FileReader();
              setFilename(e.target.value);
              reader.readAsDataURL(files[0]);
              reader.onload = e => {
                setFile({ ...file, file: e.target.result });
              };
            }}
          ></File>
          <Send onClick={onSubmit}>Send</Send>
        </DivForm>
        <DivComment>
          {newComments.map(value => (
            <Comment key={value.id}>
              <CommentUser>
                <FaUserCircle />
                {value.user}
              </CommentUser>
              <CommentContainer>
                <CommentImage
                  src={value.file.file}
                  title={filename}
                ></CommentImage>
                <CommentText>{value.comment}</CommentText>
                <CommentDate>{value.date.toLocaleString()}</CommentDate>
              </CommentContainer>
            </Comment>
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
  display: ${props => (props.active ? "flex" : "none")};
  flex-direction: column;
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
const Comment = styled.div`
  
  border: 1px solid #f3f3f3;
  padding: 10px 5px;
`;
const CommentUser = styled.div`
  font-size: 13px;
  color: #0091ff;
  font-weight: bold;
`;
const CommentContainer = styled.div`
  padding: 10px;
`;

const CommentImage = styled.img`
  display:${props => (props.title == "" ? "none":"initial")};
  position:relative;
  max-width : 100%
`;

const CommentText = styled.pre`
  padding: 0 10px 0 0;
  margin: 10px 0;
`;
const CommentDate = styled.div`
  font-size: 10px;
  color: #808080;
`;

export default Article;
