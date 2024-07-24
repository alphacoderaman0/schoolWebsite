import React from 'react'

const Admissions = () => {
  return (
    <div>
         <div className='px-64 py-10'>
        <h1 className='underline decoration-wavy text-center text-green-950 text-4xl pt-8  font-semibold pb-20 font-[""]'>ADMISSIONS</h1>

        <div className='shadow-2xl rounded-2xl px-44 py-5'>
            <dl className='text-2xl'>
                <dt className='text-3xl font-bold font-[""] underline decoration-soid'>Process :</dt>
                <dd className='pl-32'>Admission forms are available for download. Submit the completed form along with required documents at the school office.</dd>
                <dt className='text-3xl font-bold font-[""] underline decoration-soid'>Criteria :</dt>
                <dd className='pl-32'>Admission is based on merit and availability of seats. Entrance tests may be conducted for certain grades.</dd>
                <dt className='text-3xl font-bold font-[""] underline decoration-soid'>Important Dates :</dt>
                <dd>
                    <ol className='ml-32'>
                        <li className='list-disc'>Admission Form Availability: March 1st.</li>
                        <li className='list-disc'>Last Date for Submission: March 31st.</li>
                        <li className='list-disc'>Entrance Test: April 15th.</li>
                        <li className='list-disc'>Announcement of Results: April 30th.</li>
                    </ol>
                </dd>
            </dl>    
        </div>   
    </div>
    </div>
  )
}

export default Admissions
