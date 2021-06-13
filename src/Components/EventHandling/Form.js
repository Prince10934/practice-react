import React from "react";

const Form = () => {
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log("submit")
    }
  return( 
    <>
        <form onSubmit={handleSubmit}>
            <button type='submit'>Submit</button>
        </form>
    </>
  );
};

export default Form;
