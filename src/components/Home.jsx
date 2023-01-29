import React from 'react'
import {HiArrowNarrowDown} from 'react-icons/hi'
import Ricardo1 from '../assets/RicardoFoto1.jpg'
import MyCV from '../assets/RicardoCV.pdf'


const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>

    <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
    <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div>
            <p className='text-2xl text-pink-600 mt-16'>Hello, my name is</p>
    <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Ricardo Isidro</h1>
    <h2 className='text-4xl sm:text-4xl font-bold text-[#8892b0]'>I'm a Full Stack Developer</h2>
    <a download='CV Ricardo Isidro' href={MyCV}>
    <button className='text-white border-2 px-6 py-3 my-4 flex items-center hover:bg-pink-600 hover:border-pink-600'>Download CV
      <HiArrowNarrowDown className='ml-3'/>

       </button>
       </a>
            </div>
            <div>
                <img src={Ricardo1} alt="" className='w-60 h-80 rounded-md lg:mt-16'/>
            </div>
        </div>

    



    {/* <p className='text-[#8892b0] py-4 max-w-[700px]'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea et impedit, beatae earum soluta consectetur. Sapiente eius fugiat quae culpa sint, et necessitatibus deserunt inventore tempore quaerat voluptatum voluptate enim earum. Dicta, veniam. Est ut error quia natus blanditiis a, quasi nisi, suscipit repellat reiciendis vitae temporibus assumenda, sequi ducimus?</p> */}


    
    </div>



    </div>
  )
}

export default Home