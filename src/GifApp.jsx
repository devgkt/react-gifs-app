import { useState } from "react";
import {AddCategory} from './components/AddCategory';
import {GifGrid} from './components/GifGrid';


export const GifApp = () => {

    const [categories, setCategories] = useState(['Dragon Ball Z']);

    const addNewCategory = (newCategory) => {//Receives the 'newCategory' from Child (AddCategory component)
        console.log(" value on GifApp component "+newCategory);
        if(categories.includes(newCategory)) return; //handle duplicated
        
        setCategories([newCategory, ...categories ]);//Adds the new category at the beginning of the list
    }

    return (
    <>
        <h1>Gif Application</h1>
        <AddCategory 
            /*
            This version required the vhild to process the new Category, so it sends the setCategories() funtion to the child as prop
            //setCategories = {setCategories} */

            /*
            This version is better, the addNewCategory() function is defined here and it receives the category from the child, so
            the parent process it. The child only sends the new category
            */
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
