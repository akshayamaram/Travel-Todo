import React, { useState } from "react";

/** sample structure of data 
const initialItems = [
  { id: 1, itemText: "Passports", itemCount: 2, packed: false },
  { id: 2, itemText: "Socks", itemCount: 12, packed: true },
  { id: 3, itemText: "Charger", itemCount: 1, packed: false },
];
*/

const PackingList = ({ items, onDeleteItems, onCheckboxToggle, onClearList }) => {
  const [sortBy, setSortBy] = useState("input");

  let sortedItems;

  if (sortBy === "input") sortedItems = items;

  if (sortBy === "itemText")
    sortedItems = items
      .slice()
      .sort((a, b) => a.itemText.localeCompare(b.itemText));

  if (sortBy === "packed")
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));

  return (
    <div className="list">
      <ul>
        {sortedItems.map((item, index) => (
          <Item
            item={item}
            key={index}
            onDeleteItems={onDeleteItems}
            onCheckboxToggle={onCheckboxToggle}
          />
        ))}
      </ul>

      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort by input order</option>
          <option value="itemText">Sort by item name</option>
          <option value="packed">Sort by packed status</option>
        </select>
        <button onClick={onClearList}>Clear List</button>
      </div>
    </div>
  );
};

const Item = ({ item, onDeleteItems, onCheckboxToggle }) => {
  return (
    <li>
      <input
        type="checkbox"
        value={item.packed}
        onChange={() => onCheckboxToggle(item.id)}
      />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.itemCount} {item.itemText}
      </span>
      <button onClick={() => onDeleteItems(item.id)}>❌</button>
    </li>
  );
};

export default PackingList;
