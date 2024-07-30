import React from 'react'
import GenderCheckbox from './GenderCheckbox';

const Signup = () => {
  return (
    <div className='flex flex-col items-center justify-center min-w-96 ma-auto'>
      <div className='w-full p-10 rounded-lg shadow-md bg-white bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0' style={{ backgroundColor: 'rgba(255, 255, 255, 0.4)' }}>
        <h1 className='text-3xl font-bold text-center text-gray-200'>
          Sign Up
          <span className='text-blue-950'>ConnectLive</span>
        </h1>
        <form>
                <div>
                    <label className='label p-2'>
                        <span className='text-base labe-text'>First Name</span>
                    </label>
                    <input type="text" placeholder='Enter Name'className='w-full input input-bordered h-10' />
                </div>
                <div>
                    <label className='label'>
                        <span className='text-base label-text'>Username</span>
                    </label>
                    <input type="text" placeholder='Enter username' className='w-full input input-bordered h-10'/>
                </div>
                <div>
                    <label className='label'>
                        <span className='text-base label-text'>Mobile No.</span>
                    </label>
                    <input type="text" placeholder='Enter mob no' className='w-full input input-bordered h-10'/>
                </div>
                <div>
                    <label className='label'>
                        <span className='text-base label-text'>Password</span>
                    </label>
                    <input type="text" placeholder='Enter password' className='w-full input input-bordered h-10'/>
                </div>
                <div>
                    <label className='label'>
                        <span className='text-base label-text'>Confirm Password</span>
                    </label>
                    <input type="text" placeholder='Please confirm your password' className='w-full input input-bordered h-10'/>
                </div>

                <GenderCheckbox/>
                
                <a href="#" className='text-sm hover:underline hover:text-blue-950 mt-2 inline-block'>
                    Already have an account?
                </a>
                <div>
                    <button className='btn btn-block btn-sm mt-2 border border-slate-700'>Login</button>
                </div>

            </form>
      </div>

    </div>
  )
}

export default Signup;

//Starter code for sign up
// import React from 'react'
// import GenderCheckbox from './GenderCheckbox';

// const Signup = () => {
//   return (
//     <div className='flex flex-col items-center justify-center min-w-96 ma-auto'>
//       <div className='w-full p-10 rounded-lg shadow-md bg-white bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0' style={{ backgroundColor: 'rgba(255, 255, 255, 0.4)' }}>
//         <h1 className='text-3xl font-bold text-center text-gray-200'>
//           Sign Up
//           <span className='text-blue-900'>ConnectLive</span>
//         </h1>
//         <form>
//                 <div>
//                     <label className='label p-2'>
//                         <span className='text-base labe-text'>First Name</span>
//                     </label>
//                     <input type="text" placeholder='Enter Name'className='w-full input input-bordered h-10' />
//                 </div>
//                 <div>
//                     <label className='label'>
//                         <span className='text-base label-text'>Username</span>
//                     </label>
//                     <input type="text" placeholder='Enter username' className='w-full input input-bordered h-10'/>
//                 </div>
//                 <div>
//                     <label className='label'>
//                         <span className='text-base label-text'>Mobile No.</span>
//                     </label>
//                     <input type="text" placeholder='Enter mob no' className='w-full input input-bordered h-10'/>
//                 </div>
//                 <div>
//                     <label className='label'>
//                         <span className='text-base label-text'>Password</span>
//                     </label>
//                     <input type="text" placeholder='Enter password' className='w-full input input-bordered h-10'/>
//                 </div>
//                 <div>
//                     <label className='label'>
//                         <span className='text-base label-text'>Confirm Password</span>
//                     </label>
//                     <input type="text" placeholder='Please confirm your password' className='w-full input input-bordered h-10'/>
//                 </div>

//                 <GenderCheckbox/>
                
//                 <a href="#" className='text-sm hover:underline hover:text-blue-900 mt-2 inline-block'>
//                     Already have an account?
//                 </a>
//                 <div>
//                     <button className='btn btn-block btn-sm mt-2 border border-slate-700'>Login</button>
//                 </div>

//             </form>
//       </div>

//     </div>
//   )
// }

// export default Signup;