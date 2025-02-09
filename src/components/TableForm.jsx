import React from "react";

const TableForm = ({
  description,
  setDescription,
  quantity,
  setQuantity,
  price,
  setPrice,
  amount,
  setAmount,
}) => {
  return (
    <>
      <div className="flex flex-col">
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
      <div className="md:grid grid-cols-3 gap-10">
        <div className="flex flex-col">
          <label htmlFor="quantity">Enter the Quantity</label>
          <input
            type="text"
            id="quantity"
            name="quantity"
            placeholder="Item quantity"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="price">Enter the Price</label>
          <input
            type="text"
            id="price"
            name="price"
            placeholder="Item price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="amount">Enter the Amount</label>
          <input
            type="text"
            id="amount"
            name="amount"
            placeholder="Item amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
      </div>
    </>
  );
};

export default TableForm;
