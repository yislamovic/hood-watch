import { useState } from 'react';

export default function useForm(callback){
    const [values,setValues] = useState({})
    const handleChange = e => {
        // grabbing the values of the inputs we put in, this works because of the 'name' in the register form
        const { name, value } = e.target
        // continuosly updates
        console.log("values -->", values)
        setValues({
            ...values,
            [name]:value
        });
    };
    
    // handleSubmit
    const handleSubmit = e => {
        e.preventDefault();
        callback();
    }

    

    return { handleChange, handleSubmit, values, setValues }
}

