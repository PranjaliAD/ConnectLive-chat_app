import React from 'react'
import { IoSearchSharp } from "react-icons/io5";

const SearchInput = () => {
  return (
    <form className='flex items-center gap-2'>
        <input type="text" placeholder='Search' className='input input-bordered rounded-full' />
        <button type='submit' className='btn btn-circle bg-white text-blue-950'>
        <IoSearchSharp className='w-6 h-6 outline-none' />
        </button>
    </form>
  )
}

export default SearchInput;

//starter code for searchinput
// import React from 'react'
// import { IoSearchSharp } from "react-icons/io5";

// const SearchInput = () => {
//   return (
//     <form className='flex items-center gap-2'>
//         <input type="text" placeholder='Search' className='input input-bordered rounded-full' />
//         <button type='submit' className='btn btn-circle bg-white text-blue-950'>
//         <IoSearchSharp className='w-6 h-6 outline-none' />
//         </button>
//     </form>
//   )
// }

// export default SearchInput;