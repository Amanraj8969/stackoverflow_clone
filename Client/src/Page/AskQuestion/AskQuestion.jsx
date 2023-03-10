import React from "react"
import { useNavigate } from 'react-router-dom';
import './AskQuestion.css'

const  AskQuestion = () => {
 return (
           <div className="ask-question">
            <div className="ask-ques-container">
             <h1>Ask a Public Question</h1>
             <form>
                <div className="ask-form-container">
                    <label htmlFor="ask-ques-title">
                        <h4>Title</h4>
                        <p>Be specific and imagine you’re asking a question to another person.</p>

                        <input type="text" id="ask-ques-title" placeholder="e.g.How to create a react app"/>
                    </label>

                    <label htmlFor="ask-ques-body">
                        <h4>Body</h4>
                        <p>Introduce the problem and expand on what you put in the body. Minimum 40 characters.</p>
                         <textarea name="" id="ask-ques-body" cols="30" rows="10"></textarea>
                       
                    </label>

                    <label htmlFor="ask-ques-tags">
                        <h4>Tags</h4>
                        <p>Add up to 5 tags to describe what your question is about. Start typing to see suggestions.</p>

                        <input type="text" id="ask-ques-tags" placeholder="e.g.React,Nodejs"/>
                    </label>
                </div>
                <input type="submit" value="Review your Question" className="review-btn"/>
             </form>
            </div>
           </div>
    )
  }

  export default AskQuestion