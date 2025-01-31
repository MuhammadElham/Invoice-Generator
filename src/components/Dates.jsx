import React from "react";

const Dates = () => {
  return (
    <div>
      <section>
        <article className="my-5 flex items-end justify-end">
          <ul>
            <li>
              <span className="font-bold">Invoice number: </span>
            </li>
            <li>
              <span className="font-bold">Invoice date: </span>
            </li>
            <li>
              <span className="font-bold">Due date: </span>
            </li>
          </ul>
        </article>
      </section>
    </div>
  );
};

export default Dates;
