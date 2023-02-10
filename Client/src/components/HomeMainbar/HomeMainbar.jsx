import React from 'react'
import { Link,useLocation } from 'react-router-dom';
import QuestionList from './QuestionList';
import { useNavigate } from 'react-router-dom';
import '../HomeMainbar/HomeMainbar.css';

const HomeMainbar = () => {

  const location=useLocation();
const user=null;
const navigate=useNavigate();

  var questionList=[
    {
    _id:1,
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
    _id:2,
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
    _id:3,
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




const checkAuth=()=>{
  if(user===null){
    alert("Login or signup to ask a question")
    navigate('/Auth')
  }else{
    navigate('/AskQuestion')
  }
}



  return (
   <div className='main-bar'>
    <div className='main-bar-header'>
      {
        location.pathname==='/'?<h1>Top Questions</h1>:<h1>All Question</h1>
      }
      <button onClick={checkAuth} className='ask-btn'>Ask Question</button>
    </div>
    <div>
      {
        questionList===null?
        <h1>Loading....</h1>:
        <>
        <p>{questionList.length} Question</p>

        <QuestionList questionList={questionList}/> 
        
        </>
      }
    </div>
      
   </div>
  )
}

export default HomeMainbar