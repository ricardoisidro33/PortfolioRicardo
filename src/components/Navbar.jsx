import React, {useState} from 'react'
import {FaBars, FaTimes, FaGithub, FaLinkedin} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import {Link} from 'react-scroll'
import MyCV from '../assets/RicardoCV.pdf'




const Navbar = () => {
    const [nav, setNav] = useState(false)

    const handleClick = () => setNav(!nav)


  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>


    <div>
    <p className='Logo text-3xl'>#RicardoIsidro</p>
    </div>



   
        <ul className='hidden md:flex'>
        <li><Link to="home"  smooth={true}  duration={500}>Home
        </Link></li>
        <li><Link to="about"  smooth={true}  duration={500}>About
        </Link></li>
        <li><Link to="skills"  smooth={true}  duration={500}>Skills
        </Link></li>
        <li><Link to="work"  smooth={true}  duration={500}>Portfolio
        </Link></li>
        <li><Link to="contact"  smooth={true}  duration={500}>Contact
        </Link></li>
        </ul>


<div onClick={handleClick} className='md:hidden z-10'>
    {!nav ? <FaBars/> : <FaTimes/>}
</div>


{/*MOBILE MENU*/}

<ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
        <li className='py-6 text-4xl'><Link onClick={handleClick} to="home"  smooth={true}  duration={500}>Home
        </Link></li>
        <li className='py-6 text-4xl'><Link onClick={handleClick} to="about"  smooth={true}  duration={500}>About
        </Link></li>
        <li className='py-6 text-4xl'><Link onClick={handleClick} to="skills"  smooth={true}  duration={500}>Skills
        </Link></li>
        <li className='py-6 text-4xl'><Link onClick={handleClick} to="work"  smooth={true}  duration={500}>Portfolio
        </Link></li>
        <li className='py-6 text-4xl'><Link onClick={handleClick} to="contact"  smooth={true}  duration={500}>Contact
        </Link></li>
        </ul>




<div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
<ul>
    <li className='w-[160px] h-[60px] flex justify-between items center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600 rounded-tr-md'>
        <a href='https://www.linkedin.com/in/ricardoisidro/' target="blank" className='flex justify-between items-center w-full text-gray-300 '>
        Linkedin <FaLinkedin size={30}/>
        </a>
    </li>

    <li className='w-[160px] h-[60px] flex justify-between items center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
        <a href='https://github.com/ricardoisidro33' target="blank" className='flex justify-between items-center w-full text-gray-300'>
        Github <FaGithub size={30}/>
        </a>
    </li>

    <li className='w-[160px] h-[60px] flex justify-between items center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
        <a href="mailto:ricardo.isidro33@gmail.com" className='flex justify-between items-center w-full text-gray-300'>
        E-mail <HiOutlineMail size={30}/>
        </a>
    </li>

    <li className='w-[160px] h-[60px] flex justify-between items center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69] rounded-br-md'>
        <a className='flex justify-between items-center w-full text-gray-300' 
        download='CV Ricardo Isidro' href={MyCV}>
        Resume <BsFillPersonLinesFill size={30}/>
        </a>
    </li>


</ul>
</div>


    </div>
  )
}

export default Navbar