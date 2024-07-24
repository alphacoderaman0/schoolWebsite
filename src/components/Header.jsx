import React from 'react'

const Header = () => {
  return (
    <div className='pt-5'>
      <div className="top flex gap-10 justify-center  items-center">
        <img className='h-32' src="https://spskidz.com/assets/img/logo/1.png" alt="Loading..." />
        <h1 className=' text-green-950 text-4xl font-bold '>SPRINGDALE PUBLIC SCHOOL</h1>
      </div>
      <div className='bg-green-950 py-5 mt-10'>
        <ul className='flex gap-10 justify-center items-center text-white text-2xl font-semibold font-[""]'>
            <li><a href="/">HOME</a></li>
            <li><a href="/">ABOUT US</a></li>
            <li><a href="/">ACADEMICS</a></li>
            <li><a href="/">ADMISSIONS</a></li>
            <li><a href="/">FACULTY</a></li>
            <li><a href="/">STUDENT</a></li>
            <li><a href="/">GALLERY</a></li>
            <li><a href="/">CONTACT US</a></li>
        </ul>
      </div>
    </div>
  )
}

export default Header
