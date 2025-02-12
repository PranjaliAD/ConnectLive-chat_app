import React from 'react'
import Messages from './Messages';
import MessageInput from './MessageInput';
import {TiMessages} from "react-icons/ti";

const MessageContainer = () => {
  const noChatSelected = false;
  return (
    <div className='md:min-w-[550px] flex flex-col' style={{ backgroundImage: 'url(../../../public/chat-back.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        {noChatSelected ?(
          <NoChatSelected/>
        ) : (
          <>
        {/* Header */}
            <div className='bg-gray-200 px-4 py-2 mb-2'>
                <span className='label-text text-blue-950'>To : </span>{" "}
                <span className='text-blue-950 font-bold'>ABCD XYZ</span>
            </div>

        <Messages/>
        <MessageInput/>
        </>
        )}
    </div>
  )
}

const NoChatSelected = () => {
  return (
    <div 
      className='flex items-center justify-center w-full h-full' style={{ backgroundImage: 'url(../../../public/chat-back1.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className='px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2'>
        <p>Welcome ABCD XYZ !!</p>
        <p>Select a chat to start messaging</p>
        <TiMessages className='text-3xl md:text-6xl text-center' />
      </div>
    </div>
  )
}
export default MessageContainer;

//starter code for messagecontainer
// import React from 'react'
// import Messages from './Messages';
// import MessageInput from './MessageInput';

// const MessageContainer = () => {
//   return (
//     <div className='md:min-w-[550px] flex flex-col'>
//         <>
//         {/* Header */}
//             <div className='bg-blue-950 px-4 py-2 mb-2'>
//                 <span className='label-text text-gray-200'>To : </span>{" "}
//                 <span className='text-gray-200 font-bold'>ABCD XYZ</span>
//             </div>

//         <Messages/>
//         <MessageInput/>
//         </>
//     </div>
//   )
// }

// export default MessageContainer