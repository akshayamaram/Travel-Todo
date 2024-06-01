import React, { useState } from "react";

const Form = ({onAddItems}) => {

  const [itemText, setItemText] = useState('')
  const [itemCount, setItemCount] = useState(1)

  function handleSubmit (e) {
    e.preventDefault();

    if(!itemText) return

    const newItem = {itemText, itemCount, packed: false, id: Date.now()}

    onAddItems(newItem)

    setItemText('')
    setItemCount(1)
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>what do you need for your 🤩 trip?</h3>
      <select value={itemCount} onChange={(e) => setItemCount(Number(e.target.value))}>
        {Array.from({ length: 20 }, (_, i) => i + 1).map((e) => (
          <option value={e} key={e}>
            {e}
          </option>
        ))}
      </select>
      <input type="text" placeholder="Item..." value={itemText} onChange={(e) => setItemText(e.target.value)} />
      <button>Add</button>
    </form>
  );
};

export default Form;
