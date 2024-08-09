import {useEffect, useRef, useContext} from 'react';
import medicare from '../../assets/images/logo.png';
import { NavLink, Link } from 'react-router-dom';
import { BiMenu } from 'react-icons/bi';
import { authContext } from '../../context/authContext';
 
//array navLinks that redirects to the pages
const navLinks = [
  {
    path:'/home',
    display:'Home'
  },
  {
    path:'/doctors',
    display:'Find a Doctor'
  },
  {
    path:'/services',
    display:'Services'
  },
  {
    path:'/contact',
    display:'Contact'
  },
];

const Header = () => {
  const headerRef = useRef(null);
  const menuRef = useRef(null);
  const {user, role, token} = useContext(authContext);

  /**
   * @desc adds sticky header effect when user scrolls more than 80 px
   * @returns void
   */
  const handleStickyHeader = () =>{
    window.addEventListener('scroll', () => {
      if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80){
        headerRef.current.classList.add('sticky_header');
      }else{
        headerRef.current.classList.remove('sticky_header');
      }
    });  
  };

  /**
   * calls handleStickyHeader when mounted or updated
   * Sets up a cleanup function to remove the scroll event listener when the component is unmounted.
   */ 
  useEffect(()=>{
    handleStickyHeader();
    return () => window.removeEventListener('scroll', handleStickyHeader);
  });

 /**  
  * @desc 
  * 
  */

  const toggleMenu = () => menuRef.current.classList.toggle('show_menu');

  return (
    <header className='header flex items-center'ref={headerRef}>
      <div className='container'>
        <div className='flex items-center justify-between'>
          {/*========logo=========*/}
            <div>
              <img src={medicare} alt=''/>
            </div>

            {/*========menu=========*/}
            <div className='navigation' ref={menuRef} onClick={toggleMenu}>
              <ul className='menu flex items-center gap-[2.7rem]'>
               {navLinks.map((link, index) => (
                  <li key = {index}>
                    <NavLink
                    to={link.path}
                    className={navClass => navClass.isActive ? 'text-primaryColor text-[16px] leading-7 font-[600]' :
                    'text-textColor text-[16px] leading-7 font-[500] hover:text-primaryColor'}
                    >{link.display}
                    </NavLink>
                  </li>
               ))}
              </ul>
            </div>

            {/*========nav right=========*/}
            <div className='flex items-center gap-4'>
            
            {
              token && user ? 
              (
              <div>
                  <Link to={`${role === 'doctor'? '/doctors/profile/me' : '/users/profile/me'}`}>
                    <figure className='w-[35px] h-[35px] rounded-full cursor-pointer'>        
                    <img 
                        src={user ? user.photo : 'photo'} 
                        className='w-full h-[35px] rounded-full' 
                        alt='doctor' />
                    </figure>
                    {/* <h2>{user? user.name : 'welcome'}</h2> */}
                  </Link>
                </div> ) : (
              
              <Link to='/login'>
                <button className='bg-primaryColor py-2 px-6 text-black font-[600] h-[44px] flex items-center justify-center rounded-full'>Login</button>
              </Link>
              )
            }
                
                <span className='md:hidden' onClick={toggleMenu}>
                  <BiMenu className='w-6 h-6 cursor-pointer'/>
                </span>
            </div>
        </div>
      </div>
    </header>
  )
}

export default Header