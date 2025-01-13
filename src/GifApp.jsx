import { useState } from "react";
import {AddCategory} from './components/AddCategory';
import {GifGrid} from './components/GifGrid';


export const GifApp = () => {

    const [categories, setCategories] = useState(['Dragon Ball Z']);

    const addNewCategory = (newCategory) => {//recibe el newCategory del hijo (del AddCategory component)
        console.log(" value on GifApp component "+newCategory);
        if(categories.includes(newCategory)) return; //no permitir duplicados
        
        setCategories([newCategory, ...categories ]);//añade al arreglo categories al principio de la lista
    }

    return (
    <>
        <h1>Gif Application</h1>
        <AddCategory 
            /*
            esta version requiere que el hijo procese la nueva categoria, asi que 
            //le pasa la funcion setCategories()
            //setCategories = {setCategories} */

            /*
            Esta version se define este nueva funcion que recibe la categoria del hijo (AddCategory) y
            luego la funcion addNewCategory lo procesa aqui, en el padre*/
            onNewCategory = {(value) => addNewCategory(value)}
         />


        {/* <button onClick = { addNewCategory }> Add Category </button> */}

        {
            categories.map( (category) => (
                    <GifGrid key = {category} category = {category} />
            ))
        }
        
    </>
    );
};
