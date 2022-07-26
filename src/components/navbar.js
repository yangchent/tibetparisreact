import React,  { useState, useEffect } from 'react';
import { Link } from "react-router-dom";


function Navbar() {
  
    const [isAuth, setIsAuth] = useState(false); 
    const [openNav, setOpenNav] = useState(false);

    const toggle =() =>setOpenNav(openNav => !openNav) 

    useEffect(() => {
        if (localStorage.getItem('token') !== null) {

          setIsAuth(true);          
        }       
      }, []);

  

  return (
        <nav className='sticky top-0 z-50 bg-white font-poppins'>
            {/* mobile view */}
            <div className='flex md:hidden'>
                <button onClick={()=> {
                    setOpenNav(true)}}>
                   <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>  
                </button>
                <h1 className='text-myorange font-semibold'>TIBET <span className='text-mygreen'>PARIS</span></h1>
            </div>
            {/* laptop and bigger veiws */}
            <div className="md:flex md:justify-center hidden">
                <div className="flex">
                    <div className="flex space-x-2 lg:space-x-8 items-center text-sm lg:text-md">
                        <Link to="/" className="py-4 px-2  font-semibold hover:text-mygreen transition duration-300">ACCUEIL</Link>
                        <Link to="/about" className="py-4 px-2 whitespace-nowrap font-semibold hover:text-mygreen transition duration-300">À PROPOS DE</Link>
                        <Link to="/boutique" className="py-4 px-2  font-semibold hover:text-mygreen transition duration-300">BOUTIQUE</Link>                    
                        <Link to="/restaurant" className="block  font-semibold px-2 py-4 hover:text-mygreen transition duration-300" >RESTAURANT</Link>
                        <Link to="/ngo" className="block  font-semibold px-2 py-4 hover:text-mygreen transition duration-300" >ASSOCIATION</Link>
                        <Link to="/contact" className="block  font-semibold px-2 py-4 hover:text-mygreen transition duration-300" >CONTACT</Link>
                     </div> 
                    <div>
                        {isAuth === true ? (                                                    
                            <div className='flex mx-4'>
                                <Link to='/logout' className="block  text-myorange px-1 py-4 hover:text-mygreen transition duration-300">Logout</Link>
                            </div>                    
                        ) : (                        
                            <div className='mx-4'>
                                <Link to="/login" className="block  text-myorange px-1 py-4 hover:text-mygreen transition duration-300">Connexion</Link>
                            </div>                                            
                        )}
                    </div>
                </div>                                             
            </div>
            {/* mobile veiw when open navbar open */}
            <aside className={`z-10 absolute top-0 3/4 bg-white rounded -translate-x-full flex flex-col overflow-hidden ${openNav === true ? 'translate-x-0 transform transition duration-500 ease-in-out' : '-translate-x-full transform transition duration-500 ease-in-out'}`}>
                <button className='p-4 self-end' onClick={toggle}>
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg> 
                </button>
                <div className='flex flex-col px-4 mt-4 text-sm space-y-5'>
                    <Link to="/" className="hover:text-mygreen transition duration-300">ACCUEIL</Link>
                    <Link to="/about" className=" hover:text-mygreen transition duration-300">À PROPOS DE</Link>
                    <Link to="/boutique" className=" hover:text-mygreen transition duration-300">BOUTIQUE</Link>                    
                    <Link to="/restaurant" className="hover:text-mygreen transition duration-300" >RESTAURANT</Link>
                    <Link to="/ngo" className=" hover:text-mygreen transition duration-300" >ASSOCIATION</Link>
                    <Link to="/contact" className=" hover:text-mygreen transition duration-300" >CONTACT</Link>
                    <div className=''>
                        {isAuth === true ? (                                                    
                            <div className='flex mx-4'>
                                <Link to='/logout' className="block  text-myorange px-1 py-4 hover:text-mygreen transition duration-300">Logout</Link>
                            </div>                    
                        ) : (
                        <div>
                            <div className=''>
                                <Link to="/login" className="block  text-myorange px-1 py-4 hover:text-mygreen transition duration-300">Connexion</Link>
                            </div>
                        </div>                
                        )}
                    </div>
                </div>
            </aside>
        </nav>
  );
};
export default Navbar;