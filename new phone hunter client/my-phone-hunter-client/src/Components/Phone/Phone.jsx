import React from 'react'
import { useLoaderData } from 'react-router-dom'

const Phone = () => {
  const phone=useLoaderData();
  console.log(phone);
  return (
    <div>
      <h1>Phone details</h1>
      <h3>{phone.name}</h3>
      <img src={phone.image} alt="" />
    </div>
  )
}

export default Phone