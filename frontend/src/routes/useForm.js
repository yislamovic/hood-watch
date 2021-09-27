import {useState, useEffect} from 'react'

function useForm(){
    const [values,setValues] = useState({

        first_name: '',
        last_name: '',
        country: '',
        province_or_state: '',
        city: '',
        street: '',
        email: '',
        password: '',
        password_confirm: ','
    })

    const [errors, setErrors] = useState({})
    
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

    const handleSubmit = e => {
        e.preventDefault();
    }

    return {handleChange, values, handleSubmit}
}

export default useForm;