import React from 'react';
import StarWarsLogo from './StarWarsLogo';
import './Header.css';

const Header = (props) => {
    return (
      <div className='Header'>
        <StarWarsLogo />
      </div>
    );
};

export default Header;
