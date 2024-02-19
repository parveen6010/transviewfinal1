import React from 'react'
import { Link } from 'react-router-dom'
function MisMain() {
  return (
    <div className="text-white h-1/3  p-5  flex flex-col items-center justify-evenly ">
      <h2 className="font font-extrabold p-2 text-2xl text-center">
         Warp to MIS Reports Universe
      </h2>
      {/* <p className="text-center mb-4">
        Monitor your vehicle's location in
        real-time, get instant alerts, and access historical data. Start
        tracking now for peace of mind on  go!
      </p> */}
      <Link to={'/Existinguser'}>
      <button
        className="border-2 border-green-500 bg-green-500 text-white rounded-full px-12 py-2 inline-block font-semibold  hover:bg-white hover:text-green-500 ml-2"
        
      >
        Begin Your Data Journey
      </button>
      </Link>
    </div>
  </div>
  )
}

export default MisMain

// 