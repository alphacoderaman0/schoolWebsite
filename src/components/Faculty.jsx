import React from 'react'

const Faculty = () => {
  return (
    <div>
     <div className='px-64 py-10'>
        <h1 className='underline decoration-wavy text-center text-green-950 text-4xl pt-8  font-semibold pb-20 font-[""]'>FACULTY</h1>

        <div className='shadow-2xl rounded-2xl px-44 py-5'>
            <dl className='text-2xl'>
                <dt className='text-3xl font-bold font-[""] underline decoration-soid'>Life at Springdale :</dt>
                <dt className='pl-32'>
                    <li className='list-disc'><strong>John Doe:</strong>  Principal, M.Ed, 20 years of experience in educational administration.</li>
                    <li className='list-disc'><strong>Jane Smith:</strong>  Vice Principal, M.Sc. in Physics, 15 years of teaching experience.</li>
                    <li className='list-disc'><strong>Emily Jhonson:</strong>  English Teacher, M.A. in English, 10 years of teaching experience</li>
                    <li className='list-disc'><strong>Michael Brown:</strong> Mathematics Teacher, M.Sc. in Mathematics, 8 years of teaching experience.</li>
                    <li className='list-disc'><strong>Sofia Davis:</strong>  Science Teacher, M.Sc. in Chemistry, 12 years of teaching experience.</li>
                    <li className='list-disc'><strong>David Willson:</strong> Computer Science Teacher, B.Tech in Computer Science, 5 years of teaching experience</li>
                </dt>
                
            </dl>    
        </div>   
    </div>    
    </div>
  )
}

export default Faculty
