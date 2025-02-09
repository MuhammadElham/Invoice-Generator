import React from "react";

const Table = ({ description, quantity, price, amount }) => {
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
          <td>{description}</td>
          <td>{quantity}</td>
          <td>{price}</td>
          <td>{amount}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default Table;
