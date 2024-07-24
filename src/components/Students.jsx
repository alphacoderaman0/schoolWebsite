import React from 'react'

const Students = () => {
  return (
    <div>
         <div className='px-64 py-10'>
        <h1 className='underline decoration-wavy text-center text-green-950 text-4xl pt-8  font-semibold pb-20 font-[""]'>STUDENTS</h1>

        <div className='shadow-2xl rounded-2xl px-44 py-5'>
            <dl className='text-2xl'>
                <dt className='text-3xl font-bold font-[""] underline decoration-soid'>Life at Springdale :</dt>
                <dt className='pl-32'>
                    <li className='list-disc'><strong>Extracurricular Activities:</strong> Music, Dance, Drama, Art, Sports, Robotics, Debate Club, Science Club</li>
                    <li className='list-disc'><strong>Clubs and Societies:</strong> Literary Society, Environmental Club, Astronomy Club, Coding Club</li>
                </dt>
                <dt className='text-3xl font-bold font-[""] underline decoration-soid'>Achievements :</dt>
                <dt className='pl-32'>
                    <li className='list-disc'><strong>John Smith -</strong> National Level Math Olympiad Winne</li>
                    <li className='list-disc'><strong>Sarah Lee -</strong> Gold Medalist in State Swimming Championship</li>
                    <li className='list-disc'><strong>Tech Innovators Club -</strong> Winners of Inter-School Robotics Competition</li>
                </dt>
                <dt className='text-3xl font-bold font-[""] underline decoration-soid'>Student Council :</dt>
                <dt className='pl-32'>
                    <li className='list-disc'><strong>President -</strong> Amy Parker , Grade 12</li>
                    <li className='list-disc'><strong>Vise-President -</strong> Rajiv Mehta , Grade 11</li>
                    <li className='list-disc'><strong>Secretary -</strong> Lisa Wong , Grade 10</li>
                </dt>
            </dl>    
        </div>   
    </div>
    </div>
  )
}

export default Students
