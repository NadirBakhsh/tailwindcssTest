import React from 'react'
import Heard from "../../Components/CardHeard/CardHeard";
import Body from '../../Components/CardBody/CardBody'

export default function card({ data }) {
  const { heard, body } = data
  return (
    <div className='lg:w-5/12 h-auto md:w-full  bg-white shadow-md p-3'>
      <Heard
        data={heard}
      />
      <Body
        data={body}
      />
    </div>
  )
}

