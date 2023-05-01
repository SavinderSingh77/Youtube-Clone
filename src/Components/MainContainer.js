import React from "react";
import Card from "./card";
import Shimmer from "./Shimmer";
import { useSelector } from "react-redux";

function MainContainer() {
  const { data, isLoading } = useSelector((store) => store.API_DATA.items);
  console.log(data, isLoading);

  return !data.length ? (
    <div className="my-10  mr-4  flex flex-wrap justify-center items-start gap-12">
      {Array(12)
        .fill("")
        .map((shimmer, index) => (
          <Shimmer key={index} />
        ))}
    </div>
  ) : (
    <div className=" my-10  mr-4  flex flex-wrap justify-center items-start gap-12 ">
      {data?.map((card, index) => (
        <Card key={card.id + index} data={card} />
      ))}
      {isLoading && (
        <>
          <div className="my-10  mr-4  flex flex-wrap justify-center items-start gap-12">
            {Array(8)
              .fill("")
              .map((shimmer, index) => (
                <Shimmer key={index} />
              ))}
          </div>
        </>
      )}
    </div>
  );
}

export default MainContainer;
