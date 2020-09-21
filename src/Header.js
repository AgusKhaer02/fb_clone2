import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import FlagIcon from '@material-ui/icons/Flag';
import SubscriptionsOutlinedIcon from '@material-ui/icons/SubscriptionsOutlined';
import StorefrontOutlinedIcon from '@material-ui/icons/StorefrontOutlined';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import { Avatar, IconButton } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import ForumIcon from '@material-ui/icons/Forum';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { useStateValue } from './StateProvider';

function Header() {
  const [{ user }, dispatch] = useStateValue();

  return (
    <div className='header'>
      <div className='header__left'>
        <img
          src='https://cdn.icon-icons.com/icons2/2108/PNG/512/facebook_icon_130940.png'
          alt=''
        />
        <div className='header__input'>
          <SearchIcon />
          <input type='text' placeholder='Search Facebook' />
        </div>
      </div>

      <div className='header__center'>
        <div className='header__option header__option--active'>
          <HomeIcon fontSize='large' />
        </div>
        <div className='header__option'>
          <FlagIcon fontSize='large' />
        </div>
        <div className='header__option'>
          <SubscriptionsOutlinedIcon fontSize='large' />
        </div>
        <div className='header__option'>
          <StorefrontOutlinedIcon fontSize='large' />
        </div>
        <div className='header__option'>
          <SupervisedUserCircleIcon fontSize='large' />
        </div>
      </div>

      <div className='header__right'>
        <div className='header__info'>
          <Avatar src={user.photoURL}/>
          <h4>{user.displayName}</h4>
        </div>

        {/* Add Icon */}
        <IconButton>
          <AddIcon />
        </IconButton>

        {/* Forum Icon */}
        <IconButton>
          <ForumIcon />
        </IconButton>

        {/* Notifications Active Icon */}
        <IconButton>
          <NotificationsActiveIcon />
        </IconButton>

        {/* Expand More Icon */}
        <IconButton>
          <ExpandMoreIcon />
        </IconButton>
      </div>
    </div>
  );
}

export default Header;
