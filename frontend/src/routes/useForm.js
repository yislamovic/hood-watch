import {useState, useEffect} from 'react'
import validateInfo from './validate';

export default function useForm(validate){
    const [values,setValues] = useState({
    //    when user first loads register page, this is the state of everything
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

        setErrors(validateInfo(values))
    }

    return {handleChange, values, handleSubmit, errors }
}

