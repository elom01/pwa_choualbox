import React, { useState } from "react";
import styled from "styled-components";

const ArticleForm = ({ submit }) => {
  const [form, setForm] = useState({
    title: "",
    group: "",
    article: "",
    file: ""
  });
  return (
    <DivForm>
      <Input
        name="title"
        placeholder="Title"
        onChange={e => setForm({ ...form, title: e.target.value })}
        type="text"
        onBlur={() =>
          form.comment.length < 1
            ? setForm({
                ...form,
                isError: true,
                isErrorMessage: "Votre équipe n'est pas bonne."
              })
            : setForm({ ...form, isError: false })
        }
      ></Input>
      <Group
        name="group"
        onChange={e => setForm({ ...form, group: e.target.value })}
        type="text"
        onBlur={() =>
          form.comment.length < 1
            ? setForm({
                ...form,
                isError: true,
                isErrorMessage: "Votre équipe n'est pas bonne."
              })
            : setForm({ ...form, isError: false })
        }
      >
        <option defaultValue disabled>
          Group
        </option>
        <option>Fun</option>
        <option>Musique</option>
        <option>Actualités</option>
        <option>interessant</option>
        <option>Cool Story</option>
        <option>Questions</option>
        <option>Sexy</option>
        <option>Art</option>
        <option>Jeux vidéo</option>
        <option>Ecchi</option>
        <option>FreaksChouals</option>
        <option>Bons plans</option>
        <option>papachoual</option>
        <option>COUB</option>
        <option>Rap/Hip Hop</option>
        <option>c'estmonchoual</option>
        <option>Dank Memes</option>
        <option>PlumeDeChoual</option>
        <option>BacktothePast</option>
        <option>Cuisine</option>
        <option>Cinéma</option>
        <option>Anniverchoual</option>
        <option>Science</option>
        <option>Bounce</option>
        <option>daccord</option>
        <option>Beauf</option>
        <option>Complots</option>
        <option>faitsdivers</option>
        <option>CreaPerso</option>
        <option>Wallpaper</option>
      </Group>
      <Article
        name="article"
        placeholder="Article"
        onChange={e => setForm({ ...form, article: e.target.value })}
        type="text"
        onBlur={() =>
          form.comment.length < 1
            ? setForm({
                ...form,
                isError: true,
                isErrorMessage: "Votre équipe n'est pas bonne."
              })
            : setForm({ ...form, isError: false })
        }
      ></Article>
      <File
        name="file"
        type="file"
        onChange={e => setForm({ ...form, file: e.target.value })}
        onBlur={() =>
          form.comment.length < 1
            ? setForm({
                ...form,
                isError: true,
                isErrorMessage: "Votre équipe n'est pas bonne."
              })
            : setForm({ ...form, isError: false })
        }
      ></File>
      <Send disabled={form.isError} type="submit">
        Send
      </Send>
    </DivForm>
  );
};

const DivForm = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1em;
  border-bottom: 1px solid #f2f2f2;
`;

const Input = styled.input`
  border: none;
  border-bottom: 1px solid #0091ff;
  padding: 0 5px;
  margin-bottom: 1em;
  font-size: 15px;
`;

const Group = styled.select`
  border: none;
  border-bottom: 1px solid #0091ff;
  margin-bottom: 1em;
  font-size: 15px;
`;

const Article = styled.textarea`
  border: none;
  border-bottom: 1px solid #0091ff;
  padding: 0 5px;
  font-size: 15px;
  margin-bottom: 1em;
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


export default ArticleForm;