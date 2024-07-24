import React from 'react'

const Gallery = () => {
  return (
    <div className='px-96 py-10'>
      <div  className='px-64 py-10'> <h1 className='underline decoration-wavy text-center text-green-950 text-4xl pt-8  font-semibold pb-20 font-[""]'>GALLERY</h1></div>


<h1 className='text-green-950 text-4xl underline decoration-wavy pb-10 font-semibold italic' >Photos</h1>
<div className='grid grid-rows-2 grid-flow-col gap-10 '>
    {/* Card-1 */}
    <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow ">
        <a href="/">
            <img class="rounded-t-lg hover:saturate-200 transition ease-in-out delay-150" src="https://media.istockphoto.com/id/498385323/photo/school-sports-lesson.webp?b=1&s=170667a&w=0&k=20&c=qqyDBfqhxpcXjvWuKWsVShPBfevfrkDZsUvxerE722o=" alt="" />
        </a>
        <div class="p-5">
            <a href="/">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">SPORTS DAY</h5>
            </a>
            <p class="mb-3 font-normal text-gray-500 text-xl">Students participating in various sports events.</p>
            
        </div>
    </div>
    {/* Card-2 */}
    <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow ">
        <a href="/">
            <img class="rounded-t-lg hover:saturate-200 transition ease-in-out delay-150" src="https://media.istockphoto.com/id/1203437060/photo/diverse-group-of-elementary-school-girls-presenting-their-group-science-fair-entry.jpg?s=2048x2048&w=is&k=20&c=uJQ8qr6WqcmSbnG1mG1vvR4JXCYPzyl-VY1ohyOQ9Eo=" alt="" />
        </a>
        <div class="p-5">
            <a href="/">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">SPORTS DAY</h5>
            </a>
            <p class="mb-3 font-normal text-gray-500 text-xl">Students participating in various sports events.</p>
            
        </div>
    </div>
    {/* Card-3 */}
    <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow ">
        <a href="/">
            <img class="rounded-t-lg hover:saturate-200 transition ease-in-out delay-150" src="https://firebasestorage.googleapis.com/v0/b/spskidz-backend.appspot.com/o/Gallery%2F743a1a9d-06d8-4e21-9732-b10225d6e175?alt=media&token=421756e8-8f6a-4371-bda2-525bb07c643d" alt="" />
        </a>
        <div class="p-5">
            <a href="/">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">SPORTS DAY</h5>
            </a>
            <p class="mb-3 font-normal text-gray-500 text-xl">Students participating in various sports events.</p>
            
        </div>
    </div>
    {/* Card-4 */}
    <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow ">
        <a href="/">
            <img class="rounded-t-lg hover:saturate-200 transition ease-in-out delay-150" src="https://plus.unsplash.com/premium_photo-1691844987972-fd36840179a2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y2xhc3Nyb29tLmpwZ3xlbnwwfHwwfHx8MA%3D%3D" alt="" />
        </a>
        <div class="p-5">
            <a href="/">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">SPORTS DAY</h5>
            </a>
            <p class="mb-3 font-normal text-gray-500 text-xl">Students participating in various sports events.</p>
            
        </div>
    </div>
    {/* Card-5 */}
    <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow ">
        <a href="/">
            <img class="rounded-t-lg hover:saturate-200 transition ease-in-out delay-150" src="https://media.istockphoto.com/id/1404889664/photo/library-and-books.webp?b=1&s=170667a&w=0&k=20&c=oDHjhq9iGfoihaieD82IitF6RZIX5y2bRSgN_03RQqs=" alt="" />
        </a>
        <div class="p-5">
            <a href="/">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">SPORTS DAY</h5>
            </a>
            <p class="mb-3 font-normal text-gray-500 text-xl">Students participating in various sports events.</p>
            
        </div>
    </div>   
</div>


<h1 className='text-green-950 text-4xl underline decoration-wavy py-10 font-semibold italic' >Videos</h1>

<div className='flex gap-10  '>
   <iframe style={{width:'900px',height:'1000px',marginTop:'-290px'}} className=' ' _ngcontent-shp-c44="" src="https://player.vimeo.com/video/692776668?h=907cc6ac5c&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&amp;autoplay=1&amp;loop=1&amp;quality=1080p"></iframe> 
   <div>
    <h1 className='text-green-950 text-4xl underline decoration-solid pb-10 font-semibold italic'>Our School Tour</h1>
    <p className='text-gray-600 text-2xl  font-semibold italic'>"Virtual tour of Springdale Public School."</p>
   </div>
</div>
<div className='flex flex-row-reverse gap-10'>
   <iframe width="1000" height="450" style={{marginTop:'-190px'}} className=' ' _ngcontent-shp-c44="" src= "https://www.youtube.com/embed/ZKtz14UteCY?si=hPEtjY-psRvE1puc&amp;start=254"></iframe> 
   <div style={{marginTop:'-190px'}}>
    <h1 className='text-green-950 text-4xl underline decoration-solid pb-10 font-semibold italic'>Our Annual Function</h1>
    <p className='text-gray-600 text-2xl  font-semibold italic'>"Highlights from the Annual Function 2023."</p>
   </div>
</div>
  </div>
  )
}

export default Gallery
