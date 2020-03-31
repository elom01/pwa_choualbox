export const ADD_COMMENT = "ADD_COMMENT";
export const DELETE_COMMENT = "DELETE_COMMENT";


export const addComment = payload => ({
  type: ADD_COMMENT,
  payload
});

export const deleteComment = id => ({
  type: DELETE_COMMENT,
  id
});