import React from 'react';
import './Header.css';

export default ({black}) => {
  return (
    <header className={black ? 'black' : ''}>
        <div className='header--logo'>
            <a href='/'>
                <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Logonetflix.png/800px-Logonetflix.png?20170904093427' alt='Netflix'/>
            </a>
        </div>
        <div className='header--user'>
            <a href='/'>
                <img src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png?20201013161117' alt='Avatar'/>
            </a>
        </div>
    </header>
  );
}
