import React from 'react'

const Aboutus = () => {
  return (
    <div className='px-10'>
      <h1 className='underline decoration-wavy text-center text-green-950 text-4xl pt-4 font-semibold pb-5 '>About SPS( <strong className='font-[""]'>SPRINGDALE PUBLIC SCHOOL</strong> )</h1>

      <div className='flex justify-center items-center gap-8'>
        <div className='flex flex-col gap-5'>
        <img className='h-[400px] rounded-3xl border-8 border-green-800' src="https://spskidz.com/assets/img/showcase/7.jpeg" alt="no image" />
        <img className='h-[400px] rounded-3xl border-8 border-green-800' src="https://spskidz.com/assets/img/faculty/1.jpeg" alt="no image" />
        </div>
        <dl className=' flex flex-col gap-5 text-3xl shadow-xl rounded-3xl px-8 py-10 text-green-950'>
            <dt className='underline decoration-solid'><strong className='font-[""]'>History :</strong></dt>
            <dd className='ml-24'> Founded in 1985, Springdale Public School has been dedicated to providing quality education and holistic development to students</dd>
            <dt className='underline decoration-solid'><strong className='font-[""]'>Vision :</strong></dt>
            <dd className='ml-24'> To create a learning environment that fosters academic excellence, critical thinking, and ethical values.</dd>
            <dt className='underline decoration-solid'><strong className='font-[""]'>Mission :</strong></dt>
            <dd className='ml-24'> To empower students with the knowledge, skills, and values needed to thrive in a dynamic world.</dd>
            <dt className='underline decoration-solid'><strong className='font-[""]'>Principal's Message :</strong></dt>
            <dd className='ml-24'> At Springdale, we believe in nurturing the potential of every student and guiding them towards a successful future.</dd>
            <dt className='underline decoration-solid'><strong className='font-[""]'>Infrastructure and Facilities :</strong></dt>
            <dd>
                <ol className='ml-32'>
                    <li className='list-disc'>State-of-the-art science and computer labs
</li>
                    <li className='list-disc'>Spacious and well-equipped classrooms
</li>
                    <li className='list-disc'>Library with a vast collection of books and digital resources
</li>
                    <li className='list-disc'>Sports facilities including a playground, gymnasium, and swimming pool
</li>
                </ol>
            </dd>
        </dl>
      </div>
    </div>
  )
}

export default Aboutus
