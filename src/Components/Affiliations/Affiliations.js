import React from 'react'

export default function Affiliations({ data }) {
    return (
        <div className='mt-2 '>
            <p className='text-2xl tracking-wide'>Industries</p>
            <div className='flex flex-wrap'>
                {data.length > 0 && data.map((item, index) => {
                    return (
                        <span key={index} className='industries-text'>{item}</span>
                    )
                })
                }
            </div>
        </div>
    )
}
