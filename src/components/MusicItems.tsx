import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { sounds } from '../musicData/MusicData';
import { IoHome } from "react-icons/io5";
const MusicItems = () => {


    const { id } = useParams<{ id: string }>();

    const MusicItems = sounds.find((item) => item.id == id)
  return (
    <div className='bg-[#121212] w-full py-20 px-3 h-auto '>
      <div className='bg-[#1a1a1a] w-fit py-4 px-5	flex items-center gap-4 rounded-md	'>
       <div className=''>
    <Link to='/'>   <h1 className='text-white text-3xl	cursor-pointer	'> <IoHome/></h1> </Link>
       </div>
       <div className='text-white '>
       <Link to='/'><h1 className='text-2xl	font-bold cursor-pointer	'>Home</h1></Link>
       </div>
        </div> 

       <div className='w-full flex items-center justify-center'>
 
 <div className='bg-[#1a1a1a] w-3/5	flex items-center justify-center flex-col h-auto py-5 px-5 rounded-lg	'>


<div className='w-3/5	mt-5'>
  <img src={MusicItems?.image} className='w-full h-72		rounded-md		'/>
</div>
<div>
  <h1 className='text-white text-2xl font-bold	mt-5'>{MusicItems?.title}</h1>
</div>
<div className='bg-white mt-5'>
<audio controls >
        <source src={MusicItems?.src} type="audio/mp3" className='cursor-pointer	' />
        Your browser does not support the audio element.
      </audio>
</div>

<div className='mt-16 w-10/12	'>
  <p className='text-[#757574] text-lg  '>{MusicItems?.lyrics}</p>
</div>
<div className='mt-10'>
  <p className='text-white text-lg'>{MusicItems?.singer}</p>
  <p  className='text-white text-lg'>{MusicItems?.publish}</p>
</div>

 </div>
       </div>
        
      
    </div>
  )
}

export default MusicItems