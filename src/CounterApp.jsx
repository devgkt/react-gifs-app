import React, { useState } from 'react'
import PropTypes from 'prop-types'

//Receive prop "value" from parent
export const CounterApp = ({value}) => {

    const [counter, setCounter] = useState(value);

    const add = () => {
       setCounter(counter + 1);
       //setCounter((c) => c+1);
    }

    const substract = () => {
        setCounter(counter - 1);
    }
    const reset = () => setCounter(value);//one line on function
    

  return (
    <>
        <h1>CounterApp</h1>
        <h2> { counter } </h2>
        <button onClick = { add }> +1 </button>
        <button onClick = { substract }> -1 </button>
        <button onClick = { reset }> Reset </button>
    </>
  );
};

//Define prop types
CounterApp.propTypes = {
    value: PropTypes.number.isRequired
}
