import "../styles/New.css";
import useForm from "../hooks/useForm";
import { useState, useEffect } from 'react';

export default function New(){
    const { handleChange, handleSubmit, values, setValue} = useForm(handleNewPost) 

    function handleNewPost(){
    
       console.log("values 10 -->", values)
    }

    return (
        <>
         <div className="new-post-container">
             <form onSubmit={handleSubmit} className="new-post-form">
             <h1>New Report</h1>
           <div className="form-group">
             <label>Title: </label>
             <input type="text"
             name="title" 
             placeholder="Title of Report"
             onChange={handleChange}
             required
             >
             </input>
           </div>

         <div className="form-group">
             <p>Description: </p>
            <textarea
            className="description-box"
             name="description"
             rows="10"
             cols="10"
             placeholder="Insert Description"
             onChange={handleChange}
             required
            >
            </textarea>
            </div>

         <div className="form-group">
            <label>Category: </label>
            <select name="category" onChange={handleChange} required>
              <option value="trending">Trending</option>
              <option value="celebrate">Celebrate</option>
              <option value="caution">Cautio</option>
              <option value="report-crime">Report A Petty Crime</option>
              <option value="community-news">Community News</option>
              <option value="community-question">Question</option>
              <option value="other">Other</option>
          </select>
         </div>
         <div className="button-container">
          <button type="submit" className="btn">Post</button>
        </div>
          </form>
          </div>
       </>
    )
}