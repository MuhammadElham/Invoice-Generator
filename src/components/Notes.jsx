import React from "react";

const Notes = ({ notes }) => {
  return (
    <div>
      <section className="mb-5">
        <p>{notes}</p>
      </section>
    </div>
  );
};

export default Notes;
