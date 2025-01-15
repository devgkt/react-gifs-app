//import { gettGifs } from "../helpers/getGifs";
import { GifItem } from "../components/GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

//Note: `key` is not a prop,  If you need to access the same value within the child component, you should pass it as a different prop.
export const GifGrid = ({category}) => {
    //Using custom Hook, which returns the object and is destructured with {}
    const  {images, isLoading} = useFetchGifs(category);

/*  Below  code was moved to personalized Hook useFetchGifs:

    const [images, setImages] = useState([]);

    const getImages = async() =>{
        const newImages = await gettGifs(category);
        setImages(newImages);
    }

    //useEffect  is used to perform side effects based on conditions or dependencies
    useEffect(() => {
      getImages();
    },
    [] //dependency array: if it is empty, the hook will be executed only the first time the component is built
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
