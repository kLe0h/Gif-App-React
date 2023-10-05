import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const GifGrid = ({ category }) => {
  const [images, setImages] = useState([]);

  const getImages = async () => {
    const newImages = await getGifs(category);
    setImages(newImages);
  };

  useEffect(() => {
    getImages();
  }, []);

  return (
    <>
      <h3>{category}</h3>

      <ol>
      {
      images.map( ({id, title, url}) => (
        <li key={ id }>{ title }: <a href={url}>URL</a></li>
      ))
      }
      </ol>
    </>
  );
};
