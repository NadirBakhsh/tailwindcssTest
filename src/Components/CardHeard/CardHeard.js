import React from 'react'
import Button from '../Button/Button'

export default function CardHeard({data}) {
    const {
    name,
    designation,
    downloadLink,
    Verified,
    meetingRate,
    profileImage
    }= data

    return (
        <div class="max-w-md mx-auto bg-white p-2 border overflow-hidden md:max-w-full sm:max-w-full ">
            <div class="md:flex">
                <div class="md:flex-shrink-0">
                    <img class="lg:h-48 md:h-48 w-full object-cover md:w-48" src={profileImage} />
                </div>
                <div class="p-2 pt-0  w-full">
                    <div class="uppercase tracking-wide text-base md:text-xs  text-indigo-500 font-semibold mt-2 flex lg:justify-end sm:justify-start">
                        <span className='border-r pr-1'>{Verified}</span>    
                        <span className='pl-1'>{downloadLink}</span>    
                    </div>
                    <h href="#" class="block mt-4 text-4xl  font-md text-black">{name}</h>
                    <p class="text-gray-00 text-2xl mt-2 text-bold">{designation}</p>
                    <Button 
                    title={meetingRate}
                    />
                </div>
            </div>
        </div>
    )
}

// md:justify-start
