import React, { useState } from "react";

export const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState("");

  const onInputChange = ({ target }) => {
    setInputValue(target.value);
  };

  const onSubmit = (event) => {
    const clearedValue = inputValue.trim();
    event.preventDefault();
    if (clearedValue.length < 1) return;
    onNewCategory(clearedValue);
    setInputValue("");
  };

  return (
    //Onsubmit solo sirve para la tecla "enter"
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="buscar gifs..."
        value={inputValue}
        onChange={onInputChange}
      />
    </form>
  );
};
