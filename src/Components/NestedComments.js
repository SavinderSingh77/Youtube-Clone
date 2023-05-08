import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { addComment, deleteComment } from "./Utilities/commentSlice";

import { useDispatch } from "react-redux";

const WriteComment = ({ data, handleWriteComment, isReply, isEdit }) => {
  const [text, setText] = useState("");
  const generateUniqueId = () => {
    return Math.random().toString(36).slice(2, 9);
  };
  const dispatch = useDispatch();

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

  return (
    <div className="flex flex-col gap-2 px-12 justify-center items-center ">
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
              alert("Edit");
            }
          }}
        >
          {isReply ? "Sumbit" : "Edit"}
        </button>

        <button
          className="rounded-lg px-4 py-2 border border-solid border-slate-900  w-[100px] font-bold hover:scale-95 bg-[#04090ab6] text-white dark:bg-white dark:text-black"
          onClick={() => {
            handleWriteComment(false);
          }}
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
      <div className=" flex justify-start items-center gap-2 py-1 shadow-xl bg-[#04090ab6] dark:bg-white file:my-4 border-none px-3 rounded-lg">
        {" "}
        <span className="flex text-md  text-white font-bold justify-center items-center w-[40px] h-[40px] rounded-full bg-stone-700 ">
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
           
          }}
        >
          Reply
        </h3>
        {data.control && (
          <h3
            className="pl-12 pb-2 pt-1 cursor-pointer font-bold text-red-700 hover:text-red-900"
            onClick={() => {
              console.log(data);
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
  const { items } = useSelector((store) => store.comment);
  console.log(items);
  return (
    <div className=" flex flex-col px-6 gap-2 max-w-[70%]">
      <CommentList list={items} />
    </div>
  );
};

export default NestedComments;
