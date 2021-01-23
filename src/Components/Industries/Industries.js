import React from 'react'

export default function Industries({ data }) {
    return (
        <div>
            <p className='text-2xl tracking-wide'>Affiliations</p>
            <div className='mt-2 flex flex-wrap'>
                {data.length && data.map((item, index) => {
                    return (
                        <span className={`affiliations-titles ${index === 0 && 'pl-0'}`}>{item}</span>
                    )
                })}
            </div>
        </div>
    )
}
