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
      return state
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
    editComment: (state, action) => {
      // {id : "100", author : "Savinder", text : "jdfjjkfdjghl", replies : []} = action.payload
      // state.items =  [{id : '1', author :"Bob", text : "lorem ipsum", replies :[id :"100" author : "Savinder"]}, {}, {}, {}]
      const editCommentRecursively = (comments) => {
        const [text, editedComment] = action.payload;
        for (let i = 0; i < comments?.length; i++) {
          if (comments[i].id === editedComment.id) {
            comments[i].text = text
            console.log(text)
            return true;
          } else if (comments[i].replies.length > 0) {
            editCommentRecursively(comments[i].replies);
            if (editCommentRecursively(comments[i].replies)) {
              return true;
            }
          }
        }
        console.log("false");
        return false;
      };
      editCommentRecursively(state.items);
      return state
    },
    addTopLevelComment : (state, action) => {
      state.items.unshift(action.payload)
    }
  },
});

export const { addComment, deleteComment, editComment, addTopLevelComment } = commentSlice.actions;
export default commentSlice.reducer;
