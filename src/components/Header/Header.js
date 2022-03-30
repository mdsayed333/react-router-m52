import React from 'react';
import { Link } from 'react-router-dom';
import CustomLink from '../CustomLink/CustomLink';

const Header = () => {
    return (
        <div>
            <h1>Welcome to my fancy Routing website!!!</h1>
            <nav>
                <CustomLink to='/'>Home</CustomLink>
                <CustomLink to='/friends'>Friends</CustomLink>
                <CustomLink to='/posts'>Posts</CustomLink>
                <CustomLink to='/about'>About Us</CustomLink>
                <Link to="/countries">Countries</Link>
                {/* <Link to="/">Home</Link> */}
                {/* <Link to="/friends">Friends</Link> */}
                {/* <Link to="/about">About Us</Link> */}
            </nav>
        </div>
    );
};

export default Header;