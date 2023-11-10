import  { useState } from 'react';
import Link from '../Link/Link';

import { faBars, faXmark} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Header = () => {
    const [open, setOpen]=useState(false)
    const routes=[
        {
            id: 1,
            name:"Home",
            path:"/home"
        },
        {
            id: 1,
            name:"About",
            path:"/about"
        },
        {
            id: 1,
            name:"Contact",
            path:"/contact"
        },
        {
            id: 1,
            name:"Products",
            path:"/product"
        },
        {
            id: 1,
            name:"Services",
            path:"/services"
        }
    ]
    return (
       <div className='text-left '>
        
      <div onClick={()=>setOpen(!open)} className='md:hidden'>  
       
      <span>{open===true?  <FontAwesomeIcon icon={faXmark} />: <FontAwesomeIcon icon={faBars} />}</span>
      </div>
      
        <nav className={`md:flex flex-row justify-evenly absolute md:static duration-500 ${open? 'top-12':'-top-36' } `}>
        
            {
                routes.map(route=> <Link key={route.id} route={route}></Link>)
            }
        </nav>
        </div>
    );
};

export default Header;