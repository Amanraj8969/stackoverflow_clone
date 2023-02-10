import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { AiFillCaretUp } from 'react-icons/ai';
import {AiFillCaretDown} from 'react-icons/ai';

import './Questions.css'
import Avatar from '../../components/Avatar/Avatar'
import DisplayAnswer from './DisplayAnswer';

const QuestionsDetails = () => {

     const {id}=useParams()
     console.log(id);
    var questionList=[
        {
        _id:'1',
        upVotes:3,
        downVotes:2,
        noOfAnswer:2,
        questionTitle:"What is a function",
        questionBody:"It mean to be",
        questionTags:["java","node.js","react js","mongodb"],
        userPosted:"mano",
        askedOn:"jan1",
        userId:1,
        answer:[{
          answerBody:"Answer",
          userAnswered:'kumar',
          answeredOn:"jan 2",
          userId:2,
        }]
      },
    
      {
        _id:'2',
        upVotes:3,
        downVotes:2,
        noOfAnswer:0,
        questionTitle:"What is a function",
        questionBody:"It mean to be",
        questionTags:["java","node.js","react js","mongodb"],
        userPosted:"mano",
        askedOn:"jan1",
        userId:1,
        answer:[{
          answerBody:"Answer",
          userAnswered:'kumar',
          answeredOn:"jan 2",
          userId:2,
        }]
      },
    
      {
        _id:'3',
        upVotes:3,
        downVotes:2,
        noOfAnswer:0,
        questionTitle:"What is a function",
        questionBody:"It mean to be",
        questionTags:["java","node.js","react js","mongodb"],
        userPosted:"mano",
        askedOn:"jan1",
        userId:1,
        answer:[{
          answerBody:"Answer",
          userAnswered:'kumar',
          answeredOn:"jan 2",
          userId:2,
        }]
      }
    
    ]



  return (
    <div className='question-details-page'>
       {
        questionList===null ?
        <h1>Loading...</h1>:
        <>
          {
            questionList.filter(question=>question._id===id).map(question=>(
                <div key={question._id}>
                   {console.log(question)} 
                     <section className='question-details-container'>
                        <h1>{question.questionTitle}</h1>
                    <div className='question-details-container-2'>
                        <div className="question-votes">
                            <AiFillCaretUp className='votes-icon'/>
                            <p>{question.upVotes -question.downVotes}</p>
                            <AiFillCaretDown className='votes-icon'/>
                        </div>
                        <div style={{width:"100%"}}>
                              <p className='question-body'>{question.questionBody}</p>
                              <div className="question-details-tags">
                                {
                                    question.questionTags.map((tag)=>(
                                        <p key={tag}>{tag}</p>
                                    ))
                                }
                              </div>
                              <div className="question-action-user">
                                <div>
                                    <button type='button' className='edit-question-btn'>Share</button>
                                    <button type='button' className='edit-question-btn'>Delete</button>
                                </div>
                                <div>
                                    <p>Asked {question.askedOn}</p>
                                    <Link to={`/User/${question.userId}`} className='user-link' style={{color:'#0086d8'}}>
                                        <Avatar backgroundColor="orange" px='8px' py='5px'>{question.userPosted.charAt(0).toUpperCase()}</Avatar>
                                        <div>{question.userPosted}</div>
                                    </Link>
                                </div>
                              </div>
                        </div>
                    </div>
                     </section>
                     {
                        question.noOfAnswer !==0 && (
                            <section>
                                <h3>{question.noOfAnswer} answers</h3>
                                <DisplayAnswer key={question._id} question={question}/>
                            </section>
                        )
                     }


                     <section className='post-ans-container'>
                        <h3>Your Answer</h3>
                        <form >
                            <textarea name='' id='' cols='30' rows='10'/>
                            <br/>
                            <input type='submit' className='post-ans-btn' value='Post Your Answer'/>
                        </form>
                        <p>Browse other Question tagged
                            {
                                question.questionTags.map((tag)=>(
                                    <Link to='/Tags' key={tag} className='ans-tags'> {tag} </Link>
                                ))
                            }or
                            <Link to='/AskQuestion' style={{textDecoration:"none",color:"#009dff"}}>ask Your own question.</Link>

                            
                        </p>
                     </section>
                     </div>
            ))
          }
        </>
       }
    </div>
  )
}

export default QuestionsDetails