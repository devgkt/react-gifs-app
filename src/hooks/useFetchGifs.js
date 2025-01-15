import { useEffect, useState } from "react";
import { gettGifs } from "../helpers/getGifs";


//Custom hook that makes the request for gifs with fetch
//has an isLoading flag to handle whether it is still loading
//Returns the images and the flag that the GifGrid Component will use
export const useFetchGifs = (category) => {
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getImages = async() =>{
      try {
        const newImages = await gettGifs(category);
        setImages(newImages);
        setIsLoading(false);
      } catch (error) {
        console.log('error: ', error)
      }
    }

    //useEffect is to perform side effects based on certain conditions
    useEffect(() => {
      getImages();
    },
    []//dependency array, if left empty it means that the hook will be executed only the first time the component is built

    );

  return {
    images,
    isLoading
  }
}
