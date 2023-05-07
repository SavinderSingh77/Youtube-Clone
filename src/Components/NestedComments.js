import { nestedComments } from "./Utilities/constants";

const Comment = ({ data }) => {
  return (
    <div className=" flex justify-start items-center gap-2 py-1 bg-stone-600 my-4 border-none px-3 rounded-lg">
      {" "}
      <span className="flex text-2xl  text-white font-bold justify-center items-center w-[50px] h-[50px] rounded-full bg-stone-700 ">
        {data.author.slice(0, 1).toUpperCase()}
      </span>{" "}
      <span>{data.author}</span> <span>:</span> <span>{data.text}</span>
    </div>
  );
};

const CommentList = ({ list }) => {
  return list.map((comment) => {
    return (
      <div key={comment.id}>
        <Comment data={comment} />

        {comment.replies.length ? (
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
  return (
    <div className=" flex flex-col px-6 gap-2 max-w-[70%]">
      <CommentList list={nestedComments} />
    </div>
  );
};

export default NestedComments;
