import React, { useState, useEffect } from 'react';
import './header.css';
import '../App.css';
import { Button } from './Button';




function Header() {
    const [button, setButton] = useState(true);
    const showButton = () => {
        if (window.innerWidth <= 960) {
          setButton(false);
        } else {
          setButton(true);
        }
      };
    useEffect(() => {
    showButton();
  }, []);
  return (
    <div className='header'>
        <div className="banner">
            <p>We're here for you</p>
            <p>The Mind Junction is a platform to ask for and provide support to people struggling with mental health challenges and for people who care about them.</p>
        
        {button && <Button buttonStyle='btn--primary'>SIGN UP</Button>}
        </div>
    </div>
  );
}

export default Header;