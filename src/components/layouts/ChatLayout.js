import React from 'react';
import ChatSidebar from '../common/ChatSidebar';
const ChatLayout = ()=>(WrappedComponent) => {
  return (props) => {
    return (
      <div className='w-full min-h-screen flex'>
<div className='w-1/4'>
        <ChatSidebar />
        </div>
        <WrappedComponent {...props} />
        <div className='w-3/4 bg-slate-400 min-h-screen'>

        </div>
      </div>
    );
  };
};

export default ChatLayout;
