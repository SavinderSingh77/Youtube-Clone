import { createSlice } from "@reduxjs/toolkit";
import { nestedComments } from "./constants";

const commentSlice = createSlice({
  name: "comment",
  initialState: {
    items: nestedComments,
  },
  reducers: {
    addComment: (state, action) => {
      // action.payload = [parentid, {id : "", author, text : "". replies:[]}]
      const [parentId, comment] = action.payload;
      const addCommentRecursively = (comments) => {
        // Recursively search for parent comment and add the new comment
        // [{id:"1", replies : []}, {}, {} ]
        for (let i = 0; i < comments.length; i++) {
          if (comments[i].id === parentId) {
            comments[i].replies.push(comment);
            return true;
          } else if (comments[i].replies.length > 0) {
            if (addCommentRecursively(comments[i].replies)) {
              return true;
            }
          }
        }
        return false;
      };
      addCommentRecursively(state.items);
    },

    deleteComment: (state, action) => {
      const deleteCommentRecursively = (comments) => {
        for (let i = 0; i < comments.length; i++) {
          if (comments[i].id === action.payload) {
            // If we find the comment we want to delete, remove it from the array
            comments.splice(i, 1);
            return true;
          } else if (comments[i].replies.length > 0) {
            deleteCommentRecursively(comments[i].replies);
          }
        }
        return false;
      };

      deleteCommentRecursively(state.items);
    },
  },
});

export const { addComment, deleteComment } = commentSlice.actions;
export default commentSlice.reducer;
