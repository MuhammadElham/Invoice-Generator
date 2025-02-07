import React from "react";

const TableForm = ({ description, setDescription }) => {
  return (
    // Working on Table 
    <div>
      <label htmlFor="description">Enter the Description</label>
      <input
        type="text"
        id="description"
        name="description"
        placeholder="Item description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
    </div>
  );
};

export default TableForm;
