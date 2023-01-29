import React from 'react'

const About = () => {
  return (
    <div name="about" className='w-full h-screen bg-[#0a192f] text-gray-300'>
    <div className='flex flex-col justify-center items-center w-full h-full'>
    <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
        <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>About</p>
        </div>
        <div>


        </div>
        </div>
        <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold'>
                <p>Hi, I'm Ricardo, nice to meet you. Please take a look around</p>
            </div>
            <div>
                <p>My passion for coding started in 2014 when I took a high school programming course and it only grew stronger until I graduated in 2017. After pursuing a degree in business management at university for 2 years, I realized it wasn't the right fit for me, left university and started working at a supermarket. However, my passion for coding never faded and in 2022 took a web development bootcamp at Ironhack. I am now fully dedicated to continuously improving and delivering exceptional results in all my projects.</p>
            </div>
        </div>
    </div>

    </div>

  )
}

export default About