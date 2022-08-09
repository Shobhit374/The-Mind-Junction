import React,{useEffect,useState} from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

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

  window.addEventListener('resize', showButton);
  const user = false;

  const logged = () => {if(user){return <><li className='nav-item'>
              <Link
                to='/write'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Write
              </Link>
            </li>
            <li className='nav-item'>
            <Link
              to='/login'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Logout
            </Link>
          </li></>}
            else {return <><li className='nav-item'>
            <Link
              to='/login'
              className='nav-links' 
              onClick={closeMobileMenu}
            >
              Login
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/signup'
              className='nav-links' 
              onClick={closeMobileMenu}
            >
              Signup
            </Link>
          </li>
          </>}}
  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            <p id='title'>THE MIND JUNCTION</p>
            <i class="fa-solid fa-peace"></i>
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/About'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                About
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/contact'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Contact
              </Link>
            </li>
            {logged()}
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;