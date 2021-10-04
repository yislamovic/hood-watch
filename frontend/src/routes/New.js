import "../styles/New.css";
import useForm from "../hooks/useForm";
import { useState, useEffect } from 'react';


export default function New(props){
    const { handleChange, handleSubmit, values, setValues } = useForm(handleNewPost)
    const [titleLength, setTitleLength] = useState(0)
    const [textLength, setTextLength] = useState(0)
    const [isDisabled, setIsDisabled] = useState(true)
    const [errors, setErrors] = useState({})

    // the callback function is already doing our console.logs
    function handleNewPost(){
        if (values.title.length > 30) {
           return setErrors({ title: "Title must be less than 30 characters"})
       }
       if (values.post.length > 500) {
        return setErrors({ report: "Report must be less than 500 characters"})
    }
       
       setValues({})
       console.log("Form Submitted")
    }

   useEffect(() => {
      if (Object.values(values).filter(value => value !== "").length === 6) {
        setIsDisabled(false)
      } else {
        setIsDisabled(true)
      }
      if (values.report) {
        setTextLength(values.report.length)
      }

      if(values.title) {
        setTitleLength(values.title.length)
      }
    }, [values])
  
     return (
        <>
         <div className="new-post-container">
            
             <form onSubmit={handleSubmit} className="new-post-form">
             <h1>New Report</h1>

            <div className="new-form-group">
             <label className="input-label">Title:</label>
             <input type="text"
             name="title"
             className="box" 
             placeholder="Title of Report"
             value={values.title}
             onChange={handleChange}
             required
             >
             </input>
             <span id="counter"><label>{titleLength}/30</label></span>
             {errors.title && <span className="error-message">{errors.title}</span>}
           </div>


         <div className="new-form-group">
            <label className="input-label">Category:</label>
            <select name="category" className="category-box" value={values.category} onChange={handleChange} required>
              <option value="trending">Trending</option>
              <option value="celebrate">Celebrate</option>
              <option value="caution">Caution</option>
              <option value="report-crime">Report A Petty Crime</option>
              <option value="community-news">Community News</option>
              <option value="community-question">Question</option>
              <option value="other">Other</option>
          </select>
         </div>

         <div className="new-form-group">
             <label className="input-label">Whats on Your Mind 🤔 :</label>
            <textarea
            className="description-box"
             name="report"
             rows="10"
             cols="10"
             placeholder="Type Your Report Here"
             value={values.post}
             onChange={handleChange}
             required
            >
            </textarea>
             <span id="counter"><label>{textLength}/500</label></span>
            {errors.post && <span className="error-message">{errors.post}</span>}
         </div>


         <div className="new-form-group">
             <label className="input-label">Street Number and Street Name:</label>
             <input type="text"
             name="street_number_and_name" 
             className="box" 
             placeholder="37 Chester Hill Rd"
             value={values.street_number_and_name}
             onChange={handleChange}
             required
             >
             </input>
          </div>

          <div className="new-form-group">
             <label className="input-label">City:</label>
             <input type="text"
             name="city" 
             className="box" 
             placeholder="Toronto"
             value={values.city}
             onChange={handleChange}
             required
             >
             </input>
          </div>

          <div className="new-form-group">
             <label className="input-label">Province (Make Shortform):</label>
             <input type="text"
             name="province" 
             className="box" 
             placeholder="ON"
             value={values.province}
             onChange={handleChange}
             required
             >
             </input>
          </div>

          <div className="new-form-group">
             <label className="input-label">Postal Code:</label>
             <input type="text"
             name="postal_code" 
             className="box" 
             placeholder="M5T 1E4"
             value={values.postal_code}
             onChange={handleChange}
             required
             >
             </input>
          </div>

        <div className="new-button-container">
          <button type="submit" className="new-btn" disabled={isDisabled}>Post</button>
        </div>

          </form>
          </div>
       </>
    )
}