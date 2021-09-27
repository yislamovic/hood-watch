import { Fragment, useState } from "react";
import FormSucess from "./FormSuccess";
import Register from "./Register";

export default function Form() {
    const [isSubmitted, setIsSubmitted] = useState(false);


    function submitForm() {
        setIsSubmitted(true);
    }

    return (
    
        <div>
           {!isSubmitted ? <Register submitForm={submitForm} /> : <FormSucess />}
        </div>
       
        
    )
}