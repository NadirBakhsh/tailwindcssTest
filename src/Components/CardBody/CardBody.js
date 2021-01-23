import React from 'react'
import Affiliations from "../Affiliations/Affiliations";
import Industries from "../Industries/Industries";

export default function CardBody({ data }) {
  const { affiliations, industries } = data
  return (
    <div className='mt-4 mb-4 h-auto lg:pl-9 lg:pr-9'>
      <Industries
        data={affiliations}
      />
      <Affiliations
        data={industries}
      />
    </div>
  )
}
