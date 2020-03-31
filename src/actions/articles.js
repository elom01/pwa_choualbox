import axios from "axios";

export const GET_ARTICLE = "GET_ARTICLE";
export const ADD_ARTICLE = "ADD_ARTICLE";
export const DELETE_ARTICLE = "DELETE_ARTICLE";

export const getArticle = payload => ({
  type: GET_ARTICLE,
  payload
});

export const addArticle = payload => ({
  type: ADD_ARTICLE,
  payload
});

export const deleteArticle = id => ({
  type: DELETE_ARTICLE,
  id
});

export const articleCall = () => dispatch => {
  axios
    .get("http://51.254.118.15:3456/articles")
    .then(res => {
      dispatch(getArticle(res.data));
    })
    .catch(err => {
      console.log(err);
    });
};
