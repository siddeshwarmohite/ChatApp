import React from 'react'

export default function SideBarProfile() {
  return (
    <div className="flex items-center p-4 bg-gray-100 rounded-md shadow-md border-b-2 mb-1 cursor-pointer">
      <div className="flex-shrink-0">
        <img className="h-16 w-16 rounded-full" src="https://images.unsplash.com/photo-1718708382517-3e89131709a8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzMnx8fGVufDB8fHx8fA%3D%3D" alt="User Image" />
      </div>

      <div className="ml-4">
        <div className="text-lg font-semibold text-gray-900">John Doe</div>
        <div className="text-sm text-gray-600">Some small text below the user name</div>
      </div>
    </div>  )
}
