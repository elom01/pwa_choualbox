import React, { useState } from "react";
import styled from "styled-components";

const CommentForm = ({ submit }) => {
    const [form, setForm] = useState({
      comment: "",
      file: "",
    });
  return (
    <DivForm onSubmit={e => submit(e, form)}>
      <Comment
        name="comment"
        placeholder="Comment"
        onChange={e => setForm({ ...form, favoriteTeam: e.target.value })}
        type="text"
        onBlur={() =>
          form.comment.length < 1 && form.file.length < 1
            ? setForm({
                ...form,
                isError: true,
                isErrorMessage: "Veuillez saisir votre commentaire"
              })
            : setForm({ ...form, isError: false })
        }
      ></Comment>
      <File
        name="v"
        type="file"
        onChange={e => {
          const files = e.target.files
          const reader =  new FileReader()
          reader.readAsDataURL(files[0])
          reader.onload = (e)=> {
            setForm({ ...form, file: e.target.result });
          }
        }}
        onBlur={() =>
          form.comment.length < 1 && form.file.length < 1
            ? setForm({
                ...form,
                isError: true,
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


const DivForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const Comment = styled.textarea`
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

export default CommentForm;