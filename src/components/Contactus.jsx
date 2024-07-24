import React from 'react'

const Contactus = () => {
  return (
    <div>
      <div  className='px-64 py-10'> <h1 className='underline decoration-wavy text-center text-green-950 text-4xl pt-8  font-semibold pb- font-[""]'>CONTACT US</h1></div>

      <div className='px-22 py-28 flex justify-center gap-10'>
      <section className="bg-white shadow-2xl rounded-2xl ">
    <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
      <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 ">INFORMATION</h2>
      <p className="mb-8 lg:mb-16 font-light text-center text-gray-500  sm:text-xl">Wanted to get Admission? Want to send feedback OR Complain about our School? Need details about our School? Let us know.</p>
      <form action="/" className=" px-16 space-y-8">
          
          <div className='flex items-center gap-2'>
              <p className="block mb-2  font-medium text-gray-900 text-3xl ">Email:</p>
              <p className="block p-3 w-full text-2xl text-gray-900 text-center bg-gray-50 rounded-lg border border-none">info@springdale.edu</p>
          </div>
          <div className='flex items-center gap-2'>
              <p className="block mb-2  font-medium text-gray-900 text-3xl ">Phone:</p>
              <p className="block p-3 w-full text-2xl text-gray-900 text-center bg-gray-50 rounded-lg border border-none">+1 (123) 456-7890</p>
          </div>
          <div className='flex items-center gap-2'>
              <p className="block mb-2  font-medium text-gray-900 text-3xl ">Address:</p>
              <p className="block p-3 w-full text-2xl text-gray-900 text-center bg-gray-50 rounded-lg border border-none">Springdale Public School, 123 Education Lane, Cityville, State, ZIP Code</p>
          </div>
        
        <div>
        <iframe className='rounded-2xl' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3561.7259353602644!2d79.01873947489057!3d26.78500476556814!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3975e078e85c0581%3A0xd51414d7d75eb2c6!2sSpringdale%20Public%20School!5e0!3m2!1sen!2sin!4v1721824173461!5m2!1sen!2sin" width="600" height="300"></iframe>
        </div>
          
      </form>
  </div>
        </section>
        <section className="bg-white shadow-2xl rounded-2xl ">
  <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
      <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 ">Fill this to be in contact</h2>
      
      <form action="/" className="space-y-8">
          <div>
              <label for="subject" className="block mb-2 text-xl font-medium text-gray-900 ">Name</label>
              <input type="text" id="subject" className="block p-3 w-full text-lg text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 " placeholder="Kindly Enter your Name" required/>
          </div>
          <div>
              <label for="email" className="block mb-2 text-xl font-medium text-gray-900 ">Email</label>
              <input type="email" id="email" className="shadow-sm text-lg bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5   " placeholder="Kindly Enter your Email" required/>
          </div>
          <div className="sm:col-span-2">
              <label for="message" className="block mb-2 text-xl font-medium text-gray-900 ">Your message</label>
              <textarea id="message" rows="6" className="block p-2.5 w-full text-lg text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 " placeholder="Leave a comment..."></textarea>
          </div>
          <button type="submit" className="py-3 px-5 text-xl font-medium text-center text-white rounded-lg bg-blue-700 sm:w-fit hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-primary-300">Send message</button>
      </form>
  </div>
        </section>
      </div>
    </div>
  )
}

export default Contactus
