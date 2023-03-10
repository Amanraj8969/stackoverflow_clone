import React from 'react'
import {Routes ,Route} from 'react-router-dom';
import Home from './Page/Home/Home'
import Auth from './Page/Auth/Auth';
import Questions from './Page/Questions/Question';
import AskQuestion from './Page/AskQuestion/AskQuestion';
import DisplayQuestion from './Page/Questions/DisplayQuestion';


const AllRoutes = () => {
  return (
     <Routes>
     <Route path='/' element={<Home/>}/>
      <Route path='/Auth' element={<Auth/>}/>
      <Route path='/Questions' element={<Questions/>}/>
      <Route path='/AskQuestion' element={<AskQuestion/>}/>
      <Route path='/Questions/:id' element={<DisplayQuestion/>}/>
     </Routes>
     
     
  )
}

export default AllRoutes