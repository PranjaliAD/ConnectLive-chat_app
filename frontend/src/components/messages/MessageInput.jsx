import React from 'react'
import {BsSend} from "react-icons/bs";

const MessageInput = () => {
  return (
    <form className='px-4 my-3'>
        <div className='w-full relative'>
            <input type="text" className='border text-sm rounded-lg block w-full p-2.5 bg-blue-950 border-gray-700 text-white' 
            placeholder='Send a message'
            />
            <button type='submit' className='absolute inset-y-0 end-0 flex items-center pe-3 text-white'>
                <BsSend/>
            </button>
        </div>
    </form>
  )
}

export default MessageInput;

//starter code for messageinput
// import React from 'react'
// import {BsSend} from "react-icons/bs";

// const MessageInput = () => {
//   return (
//     <form className='px-4 my-3'>
//         <div className='w-full relative'>
//             <input type="text" className='border text-sm rounded-lg block w-full p-2.5 bg-blue-950 border-gray-700 text-white' 
//             placeholder='Send a message'
//             />
//             <button type='submit' className='absolute inset-y-0 end-0 flex items-center pe-3 text-white'>
//                 <BsSend/>
//             </button>
//         </div>
//     </form>
//   )
// }

// export default MessageInput;