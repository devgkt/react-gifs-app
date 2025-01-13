import { useState } from "react"


//Recibe la funcion onNewCategory() en las props y ahi le pasa el valor del input
export const AddCategory = ( { onNewCategory /*setCategories*/} ) => {
    
    
    const [inputValue, setInputValue] = useState('');

    //desestructurar props al teclear
    const onInputChange = ({target}) => {
        setInputValue(target.value);
    }

    
    const onSubmitForm = (event) => {
        event.preventDefault();//prevenir el refreh del browser
        const cleanedInput  = inputValue.trim();
        if(cleanedInput.length < 1) return;//no permitir vacio
        
        /*
        en esta version recibe la funcion setCategories() en las props
        y el añadido del item en la lista esta dentro del componente
        al usar form se envia la info y se refresaca la pagina
        no desestructuramos como en el evento onChange
        toma la lista actual y le añade el nuevo valor
        */
        //setCategories ((categories) => [inputValue, ...categories]);



        /*
          En esta vrsion recibe la funcion onNewCategory en las props, y le pasa el input value 
          para que sea el padre quien procese la categoria
        */
        console.log(" value on Add category component "+cleanedInput);
        onNewCategory(cleanedInput);

        setInputValue('');//limpiar input despues de procesar la lista(estado)
    }

  return (
    <form onSubmit = { onSubmitForm }>

        <input
        text = ""
        placeholder = "Search gifs"
        value = {inputValue} //el valor en el input
        //onChange = { (event) => onInputChange(event)} //one option
        onChange = { onInputChange }
        />
    </form>
    
  )
}
