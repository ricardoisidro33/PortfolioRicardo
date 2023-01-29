import React from 'react'
import JobCoach from '../assets/projects/jobcoach.png'
import NbaPedia from '../assets/projects/nbapedia.png'
import RocketsGame from '../assets/projects/rocketsgame.png'
import Portfolio from '../assets/projects/portfolio.png'

const Work = () => {

    const projects = [
    {
      id: 1,
      img: RocketsGame,
      title: "HTML/CSS/JavaScript Game",
      code: "https://github.com/ricardoisidro33/Houston-Rockets-Game",
      demo: "https://ricardoisidro33.github.io/Houston-Rockets-Game/",
      
    },
    {
      id: 2,
      img: NbaPedia,
      title: "Handlebars Full Stack App",
      code: "https://github.com/ricardoisidro33/project2",
      demo: "https://nbapedia.cyclic.app/",
      
    },
    {
      id: 3,
      img: JobCoach,
      title: "ReactJS Full Stack Mobile App",
      code: "https://github.com/goncaloarsenio/project3-client",
      demo: "https://ironhack-project3-client.netlify.app/",
      
    },
    {
      id: 4,
      img: Portfolio,
      title: "ReactJS Full Stack App",
      code: "https://github.com/ricardoisidro33/PortfolioRicardo",
      demo: "https://ricardoisidro.netlify.app/",
      
    },
]




  return (
    <div name="work" className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>


    <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>

    <div className='pb-8'>
        <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>
            Portfolio
        </p>
        <p className='py-6'>Check out some some of my work</p>
    </div>


{/*CONTAINER*/}

    <div 
     className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>





     {/*grid items*/}


{
    projects.map(({id,img,title,demo,code}) => (
        <div style={{backgroundImage:`url(${img})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>





{/* HOVER EFFECTS*/}

            <div className='opacity-0 group-hover:opacity-100'>
                
                    <span className='text-md font-bold text-white tracking-wider'>{title}</span>
                    <div className='pt-8 text-center'>
                        <a href={demo} target="blank">
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                        </a>
                        <a href={code} target="blank">
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                        </a>
                    </div>
                </div>
            </div>



    ))
}



        














        </div>
    </div>

    </div>




    
  )
}

export default Work