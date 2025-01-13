import { useEffect, useState } from "react";
import { gettGifs } from "../helpers/getGifs";


//Custom hook que realiza la peticion de gifs con fetch
//tiene un flag isLoading para manejar si aun sigue cargando
//devuleve las imagenes y la flag que usara el GifGrid Component
export const useFetchGifs = (category) => {
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getImages = async() =>{
        const newImages = await gettGifs(category);
        setImages(newImages);
        setIsLoading(false);
    }

    //useEffect es para realizar efectos secundarios basado en ciertas condiciones
    useEffect(() => {
      getImages();
    },
    [] //arreglo de dependecnias, si se queda vacio significa que el hook se ejecutara solo la primera vez que construye el componente

    );

  return {
    images,
    isLoading
  }
}
