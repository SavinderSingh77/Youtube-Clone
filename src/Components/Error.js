import React from "react";
import { useRouteError } from "react-router-dom";
import { Link } from "react-router-dom";

const Error = () => {
  console.log(useRouteError());

  return (
    <>
      <div className="container mx-auto h-screen flex flex-col justify-center items-center">
        <div className="gif">
          <img src="https://i.postimg.cc/2yrFyxKv/giphy.gif" alt="gif_ing" />
        </div>
        <div className="content flex flex-col justify-center items-center">
          <h1 className="main-heading text-4xl font-bold mb-4 py-4">
            Failed to Fetch or Page not Found !
          </h1>

          <Link to="/">
            {" "}
            <button className="py-4 px-6 bg-blue-500 text-white text-lg rounded-md hover:bg-blue-600">
              Back to home <i className="far fa-hand-point-right"></i>
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Error;
