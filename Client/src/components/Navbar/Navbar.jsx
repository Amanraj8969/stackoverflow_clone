import React from 'react'
import {Link} from 'react-router-dom';
import '../../components/Navbar/Navbar.css'
import logo3  from '../../assets/logo3.png';
import  search from '../../assets/search.svg';
import Avatar from '../../components/Avatar/Avatar'
// import Button from '../../components/Avatar/Avatar';

function Navbar() {
    var User = null
    return (
        <nav className='main-nav'>
            <div className='navbar'>
                <Link to='/' className='nav-item nav-logo'>
                    <img src={logo3} alt='logo' className='img-logo' />
                </Link>
                <Link to='/' className='nav-item nav-btn'>About</Link>
                <Link to='/' className='nav-item nav-btn'>Products</Link>
                <Link to='/' className='nav-item nav-btn'>For Teams</Link>
                <form>
                    <input type='text' placeholder='search...' />
                    <img src={search} alt='search_icon' width='18px' className='search-icon'/>
                </form>
                {User === null ?
                    <Link to="/Auth" className="nav-item nav-link">Log In</Link> :
                    <>
                       <Avatar backgroundColor='#009dff' px="10px" py="7px" borderRadius="50%"color="white"> <Link to='/User' style={{color:"white",textDecoration:"none"}}>M</Link></Avatar>
                        <button className="nav-item nav-link">Log Out</button>
                        
                    </>}
            </div>
        </nav>
    );
}

export default Navbar