import React from "react";

const Stats = ({ items }) => {
  
  if (!items.length)
    return (
      <p className="stats">
        <em>Start adding items to your list 🚀</em>
      </p>
    );

  const noOfItems = items.length;
  const noOfPackedItems = items.filter((item) => item.packed).length;
  const percentage = Math.round((noOfPackedItems / noOfItems) * 100);

  return (
    <div>
      <footer className="stats">
        <em>
          {percentage === 100
            ? "You have got everything ! ready to goo 🛩️"
            : `🧳You have ${noOfItems} items in your
          list, and you already packed ${noOfPackedItems} (${percentage}%)`}
        </em>
      </footer>
    </div>
  );
};

export default Stats;
