import { useState } from "react"


//Received the onNewCategory() function in props and there passes the input value(the new category)
export const AddCategory = ( { onNewCategory /*setCategories*/} ) => {
    
    
    const [inputValue, setInputValue] = useState('');

    //destructuring props when pressing keyboard
    const onInputChange = ({target}) => {
        setInputValue(target.value);
    }

    
    const onSubmitForm = (event) => {
        event.preventDefault();//prevent browser refresh on submit form
        const cleanedInput  = inputValue.trim();
        if(cleanedInput.length < 1) return;
        
        /*
        In this version, the setCategories() function is received in the props and the process of adding the item to the list is within
        the child component. When using form, the information is sent and the page is refreshed. 
        We do not destructure as in the onChange event, it takes the current list and adds the new value.
        */
        //setCategories ((categories) => [inputValue, ...categories]);



        /*
          In this version, the child receives the onNewCategory function in the props, and passes the input value so that the parent
           is the one who processes the category.
        */
        console.log(" value on Add category component "+cleanedInput);
        onNewCategory(cleanedInput);

        setInputValue('');//Clean input after processing the list(state)
    }

  return (
    <form onSubmit = { onSubmitForm }>

        <input
        text = ""
        placeholder = "Search gifs"
        value = {inputValue} //value on input
        //onChange = { (event) => onInputChange(event)} //one option
        onChange = { onInputChange }
        />
    </form>
    
  )
}
