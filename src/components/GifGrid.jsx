import { GifGridItem } from "./GifGridItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({ category }) => {
  
  const { images, isLoading } = useFetchGifs( category ); 

  return (
    <>
      <h3>{category}</h3>
      {
        isLoading && ( <h2>Cargando...</h2> )
      }

      <div className="card-grid">
      {

        
      images.map( ( image ) => (
        // {...image} nos retorna todos los valores que están en image,
        //realiza una copia con el operador "..." y en las props
        //de nuestro GifGridItem podemos destructurizar los props
        //para usarlos directamente 
        <GifGridItem key={ image.id } {...image} ></GifGridItem>
      ))
      }
      </div>
    </>
  );
};
