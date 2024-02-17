import React, {useState} from 'react'; 
import {BsPerson} from 'react-icons/bs'
import {BiSearch} from 'react-icons/bi'
import {AiOutlineClose} from 'react-icons/ai'
import {HiOutlineMenuAlt4} from 'react-icons/hi'
import {FaFacebook, FaInstagram,FaPinterest,FaTwitter} from 'react-icons/fa'


const Navbar = () => {
      
    const [nav, setNav] = useState(false);
    const [logo, setLogo] = useState(false);
    const handleNav = () => {
        setNav(!nav);
        setLogo(!logo);
    };

  return (
    <div className='flex justify-between items-center h-20 px-4 absolute z-10 text-white w-full'>

          <div ><h1 onClick={handleNav} className= {logo ? 'hidden' : 'block'}>BEACHES.</h1></div>

          <ul className='hidden md:flex'>
            <li>Home</li>
            <li>Destinations</li>
            <li>Travels</li>
            <li>View</li> 
            <li>Book</li>          
            </ul>

            
            <div className='hidden md:flex'>
                <BiSearch className='mr-2' size={20}/>
                <BsPerson size={20} />
            </div>
             
              {/**hamburger**/}

            <div onClick={handleNav} className='md:hidden z-10'>
                {nav ? <AiOutlineClose size={20} /> : <HiOutlineMenuAlt4 size={20}/>}
           
            </div>

            {/**mobile menu**/}

            <div onClick={handleNav} className={nav ? 'absolute text-black left-0 top-0 w-full flex flex-col py-7 px-4 bg-gray-100/90' : 'absolute left-[-100%]'}>
                <ul>

            <h1>BEACHES.</h1>        
            <li className='border-b'>Home</li>
            <li className='border-b'>Destinations</li>
            <li className='border-b'>Travels</li>
            <li className='border-b'>View</li> 
            <li className='border-b'>Book</li>   
            <div className='flex flex-col'>
                <button className='my-6'>Search</button>
                <button>Account</button>
            </div>
            <div className='flex justify-between my-6'>
                <FaFacebook className='icon'/>
                <FaTwitter className='icon'/>
                <FaPinterest className='icon'/>
                <FaInstagram className='icon'/>
            </div>

                </ul>
            </div>

    </div>
  )
}

export default Navbar