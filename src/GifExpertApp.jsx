import React, { useState } from "react";
import { AddCategory } from "../components/AddCategory";
import { GifGrid } from "../components/GifGrid";

export const GifExpertApp = () => {
  //creando un Hook
  const [categories, setCategories] = useState([
    "Valorant",
  ]);

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;
    setCategories([newCategory, ...categories]);
  };

  return (
    <>
      <h1>GifExpertApp</h1>

      <AddCategory onNewCategory={onAddCategory} />

      {categories.map((category) => (
        
          <GifGrid key={category} category={category} />
        
      ))}
    </>
  );
};