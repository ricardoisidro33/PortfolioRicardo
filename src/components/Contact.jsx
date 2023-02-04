import React from 'react'

const Contact = () => {
  return (
    <div name="contact" className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4'>
    <form action="https://getform.io/f/d68aefd0-d2ad-4db7-afa3-643b4e0caaf6" method="POST" className='flex flex-col max-w-[600px] w-full'>
        <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>Contact</p>
            <p className='text-gray-300 py-4'>Submit the form below to get in touch with me. You can also send me an email - ricardo.isidro33@gmail.com</p>
        </div>
        <input type="text" name="name" placeholder='Name' className='p-2'/>
        <input type="email" name="email" placeholder='Email' className='my-4 p-2'/>
        <textarea name="message" rows="5" placeholder='Message' className='p-2'></textarea>
        <button className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center'>Let's Talk</button>
    </form>

    </div>
  )
}

export default Contact