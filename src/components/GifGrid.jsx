//import { gettGifs } from "../helpers/getGifs";
import { GifItem } from "../components/GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({category}) => {

    //Usando un custom hook, aqui como dicho hook devuelve un objeto, se desestructuta con {}
    const  {images, isLoading} = useFetchGifs(category);

/*  Este codigo se movió al hook personalizado useFetchGifs

    const [images, setImages] = useState([]);

    const getImages = async() =>{
        const newImages = await gettGifs(category);
        setImages(newImages);
    }

    //useEffect es para realizar efectos secundarios basado en ciertas condiciones
    useEffect(() => {
      getImages();
    },
    [] //arreglo de dependecnias, si se queda vacio significa que el hook se ejecutara solo la primera vez que construye el componente
    );
*/

  return (
    <>
        <h3>{category}</h3>
        {
            isLoading && (<h3>Cargando...</h3>)
        }
        

        <div className="card-grid">
            {
                images.map( (image) => (
                    <GifItem 
                        key = {image.id}
                        { ...image }
                    />
                ))
            }
        </div>
    
    </>
  )
}
