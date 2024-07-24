import React from 'react'

const Academics = () => {
  return (
    <div className='px-64 py-10'>
        <h1 className='underline decoration-wavy text-center text-green-950 text-4xl pt-8  font-semibold pb-20 font-[""]'>ACADEMICS</h1>

        <div className='shadow-2xl rounded-2xl px-44 py-5'>
            <dl className='text-2xl'>
                <dt className='text-3xl font-bold font-[""] underline decoration-soid'>Currriculum :</dt>
                <dd>
                    <ol className='ml-32'>
                        <li className='list-decimal'><strong className='italic'>Primary(Grades 1-5)</strong> English, Mathematics, Science, Social Studies, Art, Physical Education.</li>
                        <li className='list-decimal'><strong className='italic '>Secondary(Grades 6-10)</strong> English, Mathematics, Science (Physics, Chemistry, Biology), Social Studies, Computer Science, Physical Education, Art.</li>
                        <li className='list-decimal'>
                            <strong className='italic '>Senior Secondary:</strong> 
                            <ol className='ml-36'>
                                <li className='list-disc'><strong className='italic '>Science Stream:</strong> Physics, Chemistry, Biology, Mathematics, Computer Science, English</li>
                                <li className='list-disc'><strong className='italic '>Commerce Stream: </strong> Accountancy, Business Studies, Economics, Mathematics, English</li>
                            </ol>
                        </li>
                    </ol>
                </dd>
                <dt className='text-3xl font-bold font-[""] underline decoration-soid'>Teaching Methodologies :</dt>
                <dd className='pl-32'>We use a blend of traditional and modern teaching techniques to cater to different learning styles.</dd>
                <dt className='text-3xl font-bold font-[""] underline decoration-soid'>Educational Resources :</dt>
                <dd className='pl-32'>Digital classrooms, interactive learning modules, and access to online educational platforms.</dd>
            </dl>    
        </div>   
    </div>
  )
}

export default Academics
