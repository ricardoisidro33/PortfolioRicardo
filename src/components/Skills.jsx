import React from 'react'
import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import Node from '../assets/node.png';
import GitHub from '../assets/github.png';
import Tailwind from '../assets/tailwind.png';
import Mongo from '../assets/mongo.png';

const Skills = () => {


    const skills = [
    {
      id: 1,
      img: HTML,
      title: "HTML",
      
    },
    {
      id: 2,
      img: CSS,
      title: "CSS",
     
    },
    {
      id: 3,
      img: JavaScript,
      title: "JavaScript",
    
    },
    {
      id: 4,
      img: ReactImg,
      title: "ReactJs",
     
    },
    {
      id: 5,
      img: Tailwind,
      title: "Tailwind",
   
    },
    {
      id: 6,
      img: Mongo,
      title: "MongoDB",
      
    },
    {
      id: 7,
      img: Node,
      title: "NodeJs",
      
    },
    {
      id: 8,
      img: GitHub,
      title: "GitHub",
      
    },
  ];





  return (
    <div name="skills" className='w-full h-screen bg-[#0a192f] text-gray-300'>



    <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>

        <div>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>Skills</p>
            <p className='py-4'>These are the technologies I've worked with</p>
        </div>


        <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
        


        {
            skills.map(({id,img,title}) => (
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
        <img src={img} alt="" className='w-20 mx-auto'/>
        <p className='my-4'>{title}</p>
        </div>
            ))
        }
        

</div>
    </div>





    </div>
  )
}

export default Skills





