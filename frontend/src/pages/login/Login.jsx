import React from 'react'

const Login = () => {
  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
        <div className='w-full p-10 rounded-lg shadow-md bg-white bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0' style={{ backgroundColor: 'rgba(255, 255, 255, 0.4)' }}>
            <h1 className='text-3xl font-bold text-center text-white'>
                Login
                <span className='text-blue-950'>ConnectLive</span>
            </h1>
            <form>
                <div>
                    <label className='label p-2'>
                        <span className='text-base labe-text'>Username</span>
                    </label>
                    <input type="text" placeholder='Enter username'className='w-full input input-bordered h-10' />
                </div>
                <div>
                    <label className='label'>
                        <span className='text-base label-text'>Password</span>
                    </label>
                    <input type="text" placeholder='Enter password' className='w-full input input-bordered h-10'/>
                </div>
                <a href="#" className='text-sm hover:underline hover:text-blue-950 mt-2 inline-block'>
                    {"Don't"} have an account?
                </a>
                <div>
                    <button className='btn btn-block btn-sm mt-2'>Login</button>
                </div>
            </form>

        </div>

    </div>
  )
}

export default Login;

//Starter code here

// const Login = () => {
//     return (
//       <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
//           <div className='w-full p-6 rounded-lg shadow-md bg-gray-600 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-5 border border-gray-400'>
//               <h1 className='text-3xl font-bold text-center text-gray-200'>
//                   Login
//                   <span className='text-blue-900'>ConnectLive</span>
//               </h1>
//               <form>
//                   <div>
//                       <label className='label p-2'>
//                           <span className='text-base labe-text'>Username</span>
//                       </label>
//                       <input type="text" placeholder='Enter username'className='w-full input input-bordered h-10' />
//                   </div>
//                   <div>
//                       <label className='label'>
//                           <span className='text-base label-text'>Password</span>
//                       </label>
//                       <input type="text" placeholder='Enter password' className='w-full input input-bordered h-10'/>
//                   </div>
//                   <a href="#" className='text-sm hover:underline hover:text-blue-900 mt-2 inline-block'>
//                       {"Don't"} have an account?
//                   </a>
//                   <div>
//                       <button className='btn btn-block btn-sm mt-2'>Login</button>
//                   </div>
//               </form>
  
//           </div>
  
//       </div>
//     )
//   }