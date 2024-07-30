import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar';
import MessageContainer from '../../components/messages/MessageContainer';

const Home = () => {
  return (
    <div className='flex sm:h-[550px] md:h-[550px] rounded-lg overflow-hidden bg-white bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0' style={{ backgroundColor: 'rgba(255, 255, 255, 0.25)' }}>
      <Sidebar/>
      <MessageContainer/>
    </div>
  )
}

export default Home;

//starter code of home
