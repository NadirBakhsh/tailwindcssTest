import React from 'react'

export default function Button({title}) {
    return (
        <>
            <button class="btn-indigo lg:w-8/12 w-full mt-5 ">
                {title}
            </button>
        </>
    )
}
