import React from 'react';
import './Home.css';
import {Link} from "react-router-dom";
import AppsIcon from '@mui/icons-material/Apps';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Search from '../Search'

function Home() {
  return (
    <div className='home'>
      <div className='home_header'>
          <div className='home_headerLeft'>
            <Link to='/about'>About</Link>
            <Link to='/store'>Store</Link>
          </div>
          <div className='home_headerRight'>
            <Link to='/gmail'>Gmail</Link>
            <Link to='/images'>Images</Link>
          <AppsIcon/>
          <AccountCircleIcon/>
          </div>
      </div>
      <div className='home_body'>
      <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Google_logo_%282013-2015%29.svg/1500px-Google_logo_%282013-2015%29.svg.png' alt=''></img>
      <div className='home_inputContainer'>
      <Search hideButtons/>
      </div>
      </div>
    </div>
  )
}

export default Home;


// We use the Link because we don't want that whole app is refresh / reload.
// a tag reload whole app 