import React from 'react'
import { Link, useLoaderData } from 'react-router-dom'

const Phones = () => {
  const phones=useLoaderData();
  console.log(phones);
  return (
    <div>
        <h1>This is all phones section:{phones.length}</h1>
        {
          phones.map(phone=><li key={phone.id} phone={phone}><Link to={`/phone/${phone.id}`}>{phone.name}</Link></li>)
        }
    </div>
  )
}

export default Phones