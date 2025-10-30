import React, { useEffect, useState } from 'react'

function Example() {

  const [count, setCount] = useState(0)
  const [userOne, setUserOne] = useState('')
  const [userTwo, setUserTwo] = useState('')
  const [totalEnter, setTotalEnterValue] = useState('')
  const [dropdown, setDropDown] = useState('')

      
   useEffect(() => {
   const result = Number(userOne)  + Number(userTwo);
   setTotalEnterValue(result.toString())

   }, [userOne, userTwo])

  const handleClick = () => {
    setCount(count + 1)
  }

  return (
    <div className='text-3xl font-bold p-4'>
      CostCalculation

      <button
      onClick={handleClick}
      >Click</button>
      <h1>Count: {count}</h1>
      <div className='border-white p-4 gap-2'>
        <input type='text' onChange={(e) => setUserOne(e.target.value) } className='border-gray-300 bg-slate-500 border text-white p-2'/>
      <input type='text' onChange={(e) => setUserTwo(e.target.value)} className='border-black bg-slate-500 border text-white p-2'/>

      </div>
      
      <h1>userone: {userOne} and usertwo: {userTwo}</h1>
      <h1>Total: {totalEnter}</h1>

      <div className='w-full bg-gray-500 p-4'>
    <h1>Dropdown Menu</h1>
    <select className='p-2' onChange={(e) => setDropDown(e.target.value)}>
      <option value="Bike">Bike</option>
      <option value="Car">Car</option>
      <option value="Defender">Defender</option>
      <option value="Off Road Bike">Off Road Bike</option>
      <option value="Off Road Car">Off Road Car</option>
    </select>
    <h1>User select this vehical: {dropdown}</h1>
      </div>
    </div>
  )
}

export default Example
