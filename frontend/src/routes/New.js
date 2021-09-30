import "../styles/New.css";
import useForm from "../hooks/useForm";
import { useState, useEffect } from 'react';

export default function New(){
    const { handleChange, handleSubmit, values, setValues } = useForm(handleNewPost)
    const [textLength, setTextLength] = useState(0)
    const [isDisabled, setIsDisabled] = useState(true)
    const [errors, setErrors] = useState({})

    // the callback function is already doing our console.logs
    function handleNewPost(){
        if (values.title.length > 30) {
           return setErrors({ title: "Title must be less than 30 characters"})
       }
       if (values.post.length > 500) {
        return setErrors({ post: "Description must be less than 500 characters"})
    }
       
       setValues({})
       console.log("Form Submitted")
    }

    useEffect(() => {
      if (Object.values(values).filter(value => value !== "").length === 3) {
        setIsDisabled(false)
      } else {
        setIsDisabled(true)
      }
      if (values.post) {
        setTextLength(values.post.length)
      }
    }, [values])


    return (
        <>
         <div className="new-post-container">
            
             <form onSubmit={handleSubmit} className="new-post-form">
             <h1>New Report</h1>

            <div className="new-form-group">
             <label>Title: </label>
             <input type="text"
             name="title" 
             placeholder="Title of Report"
             value={values.title}
             onChange={handleChange}
             required
             >
             </input>
             {errors.title && <p className="error-message">{errors.title}</p>}
           </div>

         <div className="new-form-group">
             <p>Post: </p>
            <textarea
            className="description-box"
             name="post"
             rows="10"
             cols="10"
             placeholder="Insert Description"
             value={values.post}
             onChange={handleChange}
             required
            >
            </textarea>
             <p><label>{textLength}/500</label></p>
            {errors.post && <p className="error-message">{errors.post}</p>}
         </div>

         <div className="new-form-group">
            <label>Category: </label>
            <select name="category" value={values.category} onChange={handleChange} required>
              <option value="trending">Trending</option>
              <option value="celebrate">Celebrate</option>
              <option value="caution">Cautio</option>
              <option value="report-crime">Report A Petty Crime</option>
              <option value="community-news">Community News</option>
              <option value="community-question">Question</option>
              <option value="other">Other</option>
          </select>
            {errors.category && <p className="error-message">{errors.category}</p>}
         </div>

         <div className="new-form-group">
             <label>Street Name One: </label>
             <input type="text"
             name="street_one" 
             placeholder="Title of Report"
             value={values.street_one}
             onChange={handleChange}
             required
             >
             </input>
             {errors.title && <p className="error-message">{errors.title}</p>}
          </div>

          <div className="new-form-group">
             <label>Street Name Two: </label>
             <input type="text"
             name="street_name_two" 
             placeholder="Title of Report"
             value={values.street_two}
             onChange={handleChange}
             required
             >
             </input>
             {errors.title && <p className="error-message">{errors.title}</p>}
          </div>

           <div className="new-form-group">
             <label>Postal Code: </label>
             <input type="text"
             name="post_code" 
             placeholder="Title of Report"
             value={values.postal_code}
             onChange={handleChange}
             required
             >
             </input>
             {errors.title && <p className="error-message">{errors.title}</p>}
          </div>

         <div className="button-container">
          <button type="submit" className="btn" disabled={isDisabled}>Post</button>
        </div>

          </form>
          </div>
       </>
    )
}