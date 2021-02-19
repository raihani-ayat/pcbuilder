import React,{useState , useEffect} from 'react';
import {Link} from 'react-router-dom';
import './navBar.css';

function NavBar() {
    const [click, setClick] = useState(false);
    const [button , setButton] =useState(true);

    const menuClickHandler = () =>setClick(!click);

    const closeMenu= () => setClick(false);

    const showButton = () => {
        if(window.innerWidth<=960){
           setButton(false); 
        }else{
            setButton(true);
        }
    };
    useEffect(() => {
        showButton()
    }, []);
    window.addEventListener('resize', showButton)
    

    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                  <Link to="/" className="navbar-logo">
                   BUI<i class="fab fa-linode"></i>DER
                  </Link>  
                  <div className="menu-icon" onClick={menuClickHandler}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                  </div>
                  <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                      <li className={click ? 'nav-item active' :'nav-items'}>
                          <Link to='/shop' className="nav-links" onClick={closeMenu}>Shop</Link>
                          
                      </li>
                      <li className={click ? 'nav-item active' :'nav-items'}>
                          <Link to='/guides' className="nav-links" onClick={closeMenu}>Build Guides</Link>
                          
                      </li>
                      <li className={click ? 'nav-item active' :'nav-items'}>
                          <Link to='/examples' className="nav-links" onClick={closeMenu}>Build Examples</Link>
                          
                      </li>
                      <li className={click ? 'nav-item active' :'nav-items'}>
                          <Link to='/login' className="nav-links" onClick={closeMenu}>Log in</Link>
                          
                      </li>

                      
                  </ul>
                </div>

            </nav>
        </>
    )
}

export default NavBar;