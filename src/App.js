import React from 'react'

const App = () => {
  return (
    <div className='flex justify-around'>
      <div className='flex flex-col pt-28'>
        <h1 className=' text-blue-900 font-bold text-2xl'>37.3 C</h1>
        <div className='flex flex-col justify-center pt-28 font-bold gap-4 text-2xl'>
        <div className='flex gap-2  items-center justify-center '>
        <p>Select</p>
        <div className ="box-border h-2 w-2 p-2  border-2 border-black"></div>
        </div>
        <p>White </p>
        <p>Start </p>
        <p>Stop</p>
        </div>
      </div>
      <div>
        <div className='flex flex-row py-4 gap-3  '>
          <div className='flex items-center justify-center gap-2'>
          <p className='font-bold text-xl'>Device ID Connect: MBSOOO291</p>
          <div className="flex items-center justify-center w-4 h-4 pt-4  bg-green-500 rounded-full "></div>
          </div>
        </div>
        <div className='flex gap-5 pt-5 '>
        <div className ="flex flex-col text-center box-border h-24 w-44  border-blue-900 border-2">
          <p className='text-gray-300 font-bold'>01</p>
          <p className='pb-2 text-gray-300 font-bold'>Sample Name</p>
          <div className='flex justify-between'>
          <button className=' bg-blue-900 hover:bg-blue-700 text-white font-bold h-9 w-24 '>Start</button>
          <button className=' border-box border-2  border-blue-900 text-blue-900 font-bold h-9 w-24 '>White</button>
          </div>
        </div>
        <div className="flex flex-col text-center box-border h-24 w-44  border-blue-900 border-2">
        <p className='text-gray-300 font-bold'>02</p>
          <div className='flex justify-center'>
          <p className='text-blue-900 underline decoration-wavy pb-1 '>Bulandsheher</p>
          <p className='text-blue-900'>3923</p>
          </div>
          <button className='bg-gradient-to-r from-gray-200 to-blue-300 text-white font-bold text-sm h-11  '>
            <p>03:34</p>
            <p>24%</p>
          </button>
        </div>
        <div className="flex flex-col text-center box-border h-24 w-44  border-blue-900 border-2">
        <p className='text-gray-300 font-bold'>03</p>
          <p className='font-bold text-xl pb-1'>Stop?</p>
          <div className='flex justify-between'>
          <button className=' bg-blue-900 hover:bg-blue-700 text-white font-bold h-9 w-24 '>Start</button>
          <button className=' border-box border-2  border-blue-900 text-blue-900 font-bold h-9 w-24 '>White</button>
          </div>
        </div>
        <div className="flex flex-col text-center box-border h-24 w-44  border-blue-900 border-2">
        <p className='text-gray-300 font-bold'>04</p>
        <div className='flex justify-center'>
          <p className='text-blue-900 underline decoration-wavy  pb-1 '>Bulandsheher</p>
          <p className='text-blue-900'>3923</p>
          </div>
          <button className=' bg-green-500 hover:bg-green-700 text-white font-bold h-11  '>03:43</button>
        </div>
        </div>
        <div className='flex  gap-5 pt-5'>
        <div className="flex items-center justify-center box-border h-24 w-44 p-4 font-bold text-gray-300 border-blue-900 border-2">Sample Name</div>
        <div className="flex items-center justify-center box-border h-24 w-44 p-4 font-bold text-gray-300 border-blue-900 border-2">Sample Name</div>
        <div className="flex items-center justify-center box-border h-24 w-44 p-4 font-bold text-gray-300 border-blue-900 border-2">Sample Name</div>
        <div className="flex items-center justify-center box-border h-24 w-44 p-4 font-bold text-gray-300 border-blue-900 border-2">Sample Name</div>
        </div>
        <div className='flex gap-5 pt-5'>
        <div className="flex items-center justify-center box-border h-24 w-44 p-4 font-bold text-gray-300 border-blue-900 border-2">Sample Name</div>
        <div className="flex items-center justify-center box-border h-24 w-44 p-4 font-bold text-gray-300 border-blue-900 border-2">Sample Name</div>
        <div className="flex items-center justify-center box-border h-24 w-44 p-4 font-bold text-gray-300 border-blue-900 border-2">Sample Name</div>
        <div className="flex items-center justify-center box-border h-24 w-44 p-4 font-bold text-gray-300 border-blue-900 border-2">Sample Name</div>
        </div>
        <div className='flex gap-5 pt-5'>
        <div className="flex items-center justify-center box-border h-24 w-44 p-4 font-bold text-gray-300 border-blue-900 border-2">Sample Name</div>
        <div className="flex items-center justify-center box-border h-24 w-44 p-4 font-bold text-gray-300 border-blue-900 border-2">Sample Name</div>
        <div className="flex items-center justify-center box-border h-24 w-44 p-4 font-bold text-gray-300 border-blue-900 border-2">Sample Name</div>
        <div className="flex items-center justify-center box-border h-24 w-44 p-4 font-bold text-gray-300 border-blue-900 border-2">Sample Name</div>
        </div>
      </div>
    </div>
  )
}

export default App
