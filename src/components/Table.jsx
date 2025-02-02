import React from "react";

const Table = () => {
  return (
    <table className="w-full text-left">
      <thead>
        <tr className=" bg-gray-100 ">
          <th>Description</th>
          <th>Quantity</th>
          <th>Price</th>
          <th>Amount</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Here's long description here</td>
          <td>100</td>
          <td>$86</td>
          <td>$115</td>
        </tr>
      </tbody>
    </table>
  );
};

export default Table;
