import React from 'react'
import Title from './ui/Title'
import Image from 'next/image'

const BestFood = () => {
    return (
        <div className='mt-20 mb-12 w-auto overflow-hidden'>
            <Title addClass="text-[40px] text-center">
                Best Food
            </Title>
            <div className='flex overflow-x-auto'>
                <div className="my-6 sm:px-10 px-5 flex gap-4">
                    <div className='relative sm:!w-[500px] !w-[350px] h-80 rounded-lg'>
                        <Image src="/images/best6.png"
                            className='rounded-2xl'
                            layout='fill'
                        />
                    </div>
                    <div className='relative  sm:!w-[500px] !w-[350px] h-80'>
                        <Image src="/images/best1.png"
                            className='rounded-2xl'
                            layout='fill'
                        />
                    </div>
                    <div className='relative sm:!w-[500px] !w-[350px] h-80'>
                        <Image src="/images/best4.png"
                            className='rounded-2xl'
                            layout='fill'
                        />
                    </div>
                    <div className='relative sm:!w-[500px] !w-[350px] h-80'>
                        <Image src="/images/best2.png"
                            className='rounded-2xl'
                            layout='fill'
                        />
                    </div>
                    <div className='relative  sm:!w-[500px] !w-[350px] h-80'>
                        <Image src="/images/best5.png"
                            className='rounded-2xl'
                            layout='fill'
                        />
                    </div>
                    <div className='relative sm:!w-[500px] !w-[350px] h-80'>
                        <Image src="/images/best3.png"
                            className='rounded-2xl'
                            layout='fill'
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BestFood