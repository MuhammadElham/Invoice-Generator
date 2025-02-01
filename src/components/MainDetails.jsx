import React from "react";

const MainDetails = ({name ,address}) => {
  return (
    <div>
      <section className="flex flex-col items-end justify-end">
        <h2 className="text-xl font-bold md:text-4xl uppercase">{name}</h2>
        <p>{address}</p>
      </section>
    </div>
  );
};

export default MainDetails;
