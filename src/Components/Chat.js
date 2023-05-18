const Chat = ({ name, message }) => {
  return (
    <>
      <div className="flex justify-start gap-6 items-center  my-2">
        <div className="flex justify-start gap-4 items-center min-w-[150px] w-[30%]">
          <p
            className=" flex justify-center items-center text-md  text-white text-md font-bold  w-[40px] h-[40px]
     rounded-full bg-stone-700 "
          >
            {name?.slice(0, 1).toUpperCase()}
          </p>
          <p>{name}</p>
        </div>
        <p className="w-[70%]">{message}</p>
      </div>
    </>
  );
};

export default Chat;
