import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  addComment,
  addTopLevelComment,
  deleteComment,
  editComment,
} from "./Utilities/commentSlice";

import { useDispatch } from "react-redux";
const generateUniqueId = () => {
  return Math.random().toString(36).slice(2, 9);
};

function countComments(comments) {
  let count = comments.length;
  for (let i = 0; i < comments.length; i++) {
    if (comments[i].replies.length > 0) {
      count += countComments(comments[i].replies);
    }
  }
  return count;
}

const WriteComment = ({ data, handleWriteComment, isReply, isEdit }) => {
  const [text, setText] = useState("");

  const dispatch = useDispatch();
  const handleEditComment = (arr) => {
    dispatch(editComment(arr));
  };
  const handleAddComment = () => {
    dispatch(
      addComment([
        data.id,
        {
          id: generateUniqueId(),
          control: true,
          author: "Savinder",
          text: text,
          replies: [],
        },
      ])
    );
  };

  useEffect(() => {
    if (isEdit) {
      setText(data.text);
    } else if (isReply) {
      setText("");
    }
  }, [isEdit, isReply]);

  return (
    <div className="flex flex-col gap-2 px-2 md:px-12 justify-center items-center ">
      <input
        type="text"
        placeholder="Write a comment"
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
        className="px-4 py-2 text-black dark:text-black rounded-md outline-1 outline outline-black w-full "
      />
      <div className="flex justify-start items-center gap-2">
        <button
          className="rounded-lg px-4 py-2 border border-solid border-slate-900  w-[100px] font-bold hover:scale-95 bg-[#04090ab6] text-white dark:bg-white dark:text-black"
          onClick={() => {
            if (isReply) {
              handleWriteComment(false);
              handleAddComment();
            } else {
              handleEditComment([text, data]);
              handleWriteComment(false);
            }
          }}
          disabled={!text}
        >
          {isReply ? "Sumbit" : "Edit"}
        </button>

        <button
          className="rounded-lg px-4 py-2 border border-solid border-slate-900  w-[100px] font-bold hover:scale-95 bg-[#04090ab6] text-white dark:bg-white dark:text-black"
          onClick={() => {
            handleWriteComment(false);
          }}
          disabled={!text}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

const Comment = ({ data }) => {
  const [isReply, setIsReply] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const dispatch = useDispatch();
  const handleDeleteComment = (data) => {
    dispatch(deleteComment(data.id));
  };
  const [writeComment, setWriteComment] = useState(false);
  const handleWriteComment = (value) => {
    setWriteComment(value);
  };

  return (
    <div>
      <div className=" flex justify-start items-center gap-2 py-1 shadow-xl bg-[#04090ab6] dark:bg-white file:my-4 border-none pl-2 rounded-lg">
        {" "}
        <span className="flex text-md  text-white text-[20px] font-bold justify-center items-center px-[12px] py-[5px] rounded-full bg-stone-700 ">
          {data.author.slice(0, 1).toUpperCase()}
        </span>{" "}
        <div className="flex flex-col justify-start items-start dark:text-black text-white">
          <span>{data.author}</span> <span>{data.text}</span>
        </div>
      </div>

      <div className="flex justify-start items-start gap-2">
        <h3
          className="pl-12 pb-2 pt-1 cursor-pointer font-bold text-blue-700 hover:text-blue-900"
          onClick={() => {
            setWriteComment(true);
            setIsReply(true);
            setIsEdit(false);
          }}
        >
          Reply
        </h3>
        {data.control && (
          <h3
            className="pl-12 pb-2 pt-1 cursor-pointer font-bold text-red-700 hover:text-red-900"
            onClick={() => {
              handleDeleteComment(data);
            }}
          >
            Delete
          </h3>
        )}

        {data.control && (
          <h3
            className="pl-12 pb-2 pt-1 cursor-pointer font-bold text-green-700 hover:text-green-900"
            onClick={() => {
              setWriteComment(true);
              setIsEdit(true);
              setIsReply(false);
            }}
          >
            Edit
          </h3>
        )}
      </div>

      {writeComment && (
        <WriteComment
          data={data}
          handleWriteComment={handleWriteComment}
          isReply={isReply}
          isEdit={isEdit}
        />
      )}
    </div>
  );
};

const CommentList = ({ list }) => {
  return list?.map((comment) => {
    return (
      <div key={comment.id}>
        <Comment data={comment} />

        {comment.replies?.length ? (
          <div
            className={`pl-10 py-1 border-l  border-black dark:border-white`}
          >
            <CommentList list={comment.replies} />
          </div>
        ) : null}
      </div>
    );
  });
};

const NestedComments = () => {
  const [isCommentOpen, setIsCommentOpen] = useState(false);
  const comments = useSelector((store) => store.comment.items);
  const { items } = useSelector((store) => store.comment);
  const dispatch = useDispatch();
  const handleTopLevelComment = (data) => {
    dispatch(addTopLevelComment(data));
  };
  const [text, setText] = useState("");
  return (
    <div className=" flex flex-col px-6 gap-2 w-100% ">
      <div className="flex justify-between ">
        <h2 className="font-bold text-xl text-blue-700  ">
          {" "}
          {countComments(comments)} Comments
        </h2>
        <div
          onClick={() => {
            setIsCommentOpen(!isCommentOpen);
          }}
        >
          {!isCommentOpen ? (
            <FontAwesomeIcon
              className="pr-10 cursor-pointer"
              icon={faCaretDown}
            />
          ) : (
            <FontAwesomeIcon
              className="pr-10 cursor-pointer"
              icon={faCaretUp}
            />
          )}
        </div>
      </div>
      <div className="flex justify-between gap-1 items-center">
        <span className="flex text-md  px-4 text-white font-bold justify-center items-center w-[40px] h-[40px] rounded-full bg-stone-700 ">
          {"S"}
        </span>{" "}
        <textarea
          type="text"
          placeholder="Write a Comment"
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
          className=" basis-full bg-white dark:bg-black px-3 font-semibold  pt-6  outline-none border-none  rounded-lg text-black dark:text-white"
        ></textarea>
        <button
          className="px-4 py-2 border-stone-700 border rounded-3xl font-semibold bg-black text-white hover:bg-white hover:text-black transition-all duration-500 ease-in-out active:scale-95"
          onClick={() => {
            setIsCommentOpen(true);
            handleTopLevelComment({
              id: generateUniqueId(),
              control: true,
              author: "Savinder",
              text: text,
              replies: [],
            });
            setText("");
          }}
          disabled={!text}
        >
          Comment
        </button>
      </div>

      {isCommentOpen ? (
        <div className="border-b border-stone-700 mb-6  ">
          <CommentList list={items} />
        </div>
      ) : null}
    </div>
  );
};

export default NestedComments;
