import React, { useState } from "react";
//importando desde index.js en components
//CONCEPTO: cuando js busca una importación, trata de encontrar
//primero un archivo index.js (este lo creamos para tener todas las importaciones)
import { AddCategory, GifGrid } from "./components";

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
