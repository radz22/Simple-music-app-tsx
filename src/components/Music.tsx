import React, { useState, ChangeEvent } from 'react'
import { IoHome } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { GiLoveSong } from "react-icons/gi";
import { Musicdatas, sounds } from '../musicData/MusicData';
const Music = () => {

const [data, setData] = useState<any[]>(sounds)
const [search, setSearch] = useState<string>("")
const [dropDown, setDropDown] = useState<string>("")

const filters = data.filter((item) => item.title.toLowerCase().includes(search.toLowerCase()))
const uniqueNames = Array.from(new Set(data.map(item => item.label)));
console.log(dropDown)
  return (
    <div className={`bg-[#121212] w-full max-lg:h-auto  ` }>
       
    
    <div className=' px-5 flex w-full gap-20 h-auto max-lg:flex-col	  '>
      
      <div className={`w-2/5 mt-10	bg-[#1a1a1a] w-3/12 h-screen	px-3 py-4 max-lg:w-full max-2xl:h-screen max-lg:h-auto`}>
<div>
  <p className='text-2xl text-white	font-bold font-sans
	max-sm:text-xl	'> <span className='text-[#20ec00] font-semibold font-serif
	'>Santify</span></p>
</div>

<div className='flex items-center mt-5 gap-7'>
 
 <div>
 <Link to='/'><h1 className='text-3xl text-white	font-bold max-sm:text-2xl'><IoHome /></h1></Link>
 </div>
<div>
<Link to='/'> <p className='text-white text-center text-xl	 text-white	font-bold max-sm:text-base		 '>HOME</p></Link>
</div>
</div>
<div className='mt-6 w-11/12 max-lg:flex max-lg:items-center max-lg:justify-center max-lg:w-full	'>
<input type='text'
 className='w-11/12	px-3  py-2 border border-slate-400	rounded-md  max-lg:w-7/12		max-sm:w-11/12'
 placeholder='Search Music'
 value={search}
 onChange={(e) => setSearch(e.target.value)}
 />
</div>
      </div>


      <div className='w-4/5		mt-10 bg-[#1a1a1a] h-auto  px-4 py-4 max-lg:w-full '>
        <div className='flex items-center gap-3 '>
          <div>
          <h1 className='text-white text-3xl		font-bold'>Song PlayList</h1>
          </div>
          <div>
            <h1 className='text-white text-3xl	font-bold	'><GiLoveSong /></h1>
          </div>
        
        </div>



<div>

  <div>
  <div className='w-full flex  justify-end mt-8 px-3'>
      <select className='w-fit py-4 px-4	text-center text-lg	 rounded-md	 font-semibold cursor-pointer	' value={dropDown}
        onChange={(e) => setDropDown(e.target.value)}>
        <option value="">Select an Artist</option>
        {uniqueNames.map((option) => (
            <option key={option} value={option}>
          {option}
          </option>
          
        ))}
      </select>

  
      </div>
  </div>
    {
    filters.length == 0 ? (
      <div className='max-lg:h-screen'>
        <p className='text-center mt-32 text-red text-3xl	text-[#ff0000] font-bold'>Music Not Found</p>
      </div>
    ) : (
     
     
      <div className='grid grid-cols-4 gap-3 place-items-center  w-full bg-[#121212] py-4 max-2xl:grid-cols-3   max-md:grid-cols-2 max-sm:grid-cols-1 max-lg:h-auto max-sm:h-auto  mt-10'>
      {
        data.filter((item) => item.label.toLowerCase().includes(dropDown.toLowerCase())  && item.title.toLowerCase().includes(search.toLowerCase()))
        .map((item) => (
          <div className='mt-12  bg-[#1a1a1a] px-3 py-5 rounded-md	w-11/12	 max-2xl:w-[95%]		'>
              <div className='w-full		'>
                <Link to={`/music/${item.id} `}><img src={item.image} className='w-full	h-52			rounded-md	' /></Link>
                </div>
                <div className='mt-3'>
                  <h1 className='text-center text-white text-lg	 font-semibold	'>{item.title}</h1>
                </div>
                <div className='mt-5'>
                  <p className='text-[#757574] text-lg'>{item.singer}</p>
                  <p className='text-[#757574] text-lg'>{item.publish}</p>
                  </div>
          </div>
        ))
       }
   </div>

 
    )
  }
</div>
    
        
      </div>

    </div>
    </div>
  )
}

export default Music