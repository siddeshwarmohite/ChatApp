import React, { useState } from 'react'
// import ChatLayout from '../components/layouts/ChatLayout'
import ChatSidebar from '../components/common/ChatSidebar'

import { useParams } from 'react-router-dom'
const Chat =() =>{
  const {username} = useParams() ;
  const [openModal ,setOpenMoadl] = useState(true)

  return (
    <>
    <div className='w-full min-h-screen flex '>
<div className='w-1/4'>
        <ChatSidebar />
        </div>
        <div className='w-3/4 bg-slate-400 min-h-screen'>
       <h1 className='text-xl font-medium'> {username}</h1>

        </div>
      </div>   
      
      {/* For Modals */}
      {openModal && (
        <>
      <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50">
        <div className='w-[450px] bg-white p-3 rounded-md '>
<p className='font-medium text-xl text-end mb-4 cursor-pointer' onClick={()=>setOpenMoadl(!openModal)}>X</p>
<p className='font-medium text-xl text-start mb-2 cursor-pointer' >Start New Chat :</p>

          <div>
          <input
          type="text"
          placeholder="Search..."
          className="w-full p-2 border border-gray-300 rounded mb-4"
        />
          </div>
      <div className="px-3 py-1 rounded-lg shadow-lg w-96 flex  items-center justify-between border-b-2">
      <img className="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1718708382517-3e89131709a8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzMnx8fGVufDB8fHx8fA%3D%3D" alt="User Image" />
      <div className="text-sm text-gray-600">Siddeshwar Mohite</div>
      <p className='text-lg font-medium'>+</p>



      </div>

      <div className="bg-white px-3 py-1 rounded-lg shadow-lg w-96 flex  items-center justify-between border-b-2">
      <img className="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1718708382517-3e89131709a8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzMnx8fGVufDB8fHx8fA%3D%3D" alt="User Image" />
      <div className="text-sm text-gray-600">Siddeshwar Mohite</div>
      <p className='text-lg font-medium'>+</p>



      </div>

      <div className="bg-white px-3 py-1 rounded-lg shadow-lg w-96 flex  items-center justify-between border-b-2">
      <img className="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1718708382517-3e89131709a8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzMnx8fGVufDB8fHx8fA%3D%3D" alt="User Image" />
      <div className="text-sm text-gray-600">Siddeshwar Mohite</div>
      <p className='text-lg font-medium'>+</p>



      </div>
      </div>
      </div>
      </>
)
}


       </>
  )
}
export default Chat
