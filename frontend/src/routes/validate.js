export default function validateInfo(values) {
    let errors = {};
    // First Name
    if (!values.first_name.trim()) {
        errors.username = "First Name is Required"
    }
    
    // Last Name
    if (!values.last_name.trim()) {
        errors.last_name = "Last Name is Required"
    }
    
    // Country
    if (!values.country.trim()) {
        errors.last_name = "Country is Required"
    }
    // Province/State
    if (!values.province_or_state.trim()) {
        errors.last_name = "Province/State is Required"
    }
    // City
    if (!values.city.trim()) {
        errors.last_name = "City is Required"
    }

    // Street
    if (!values.street.trim()) {
        errors.street = "Street is Required"
    }

    // Email
    if (!values.email) {
        errors.email = "Email Required"
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = "Email address is invalid";
    }
    
    // Password
    if (!values.password) {
        errors.password = "Password Required"
    } else if (values.password.length < 10) {
        errors.password = "Password must be at least 10 characters long"
    }
    // Password Confirm
    if (!values.password_confirm) {
        errors.password_confirm = "Password Required"
    } else if (values.password_confirm.length !== values.password) {
        errors.password_confirm = "Passwords do not match"
    }
    return errors;
}