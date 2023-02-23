import React from 'react'

const FeatureBlogItem = () => {
    const heading = 'Any mechanical keyboard enthusiasts in design?'
    return (
        <div className='flex flex-row  gap-3 lg:gap-10 '>
            <div className=''>
                <img src="/images/eco-friendly-hero.png" alt="blog" className='md:w-[150px] h-30 lg:h-full w-[200px] rounded-[4px]' />
            </div>
            <div className='flex flex-col '>
            <h3 style={{ fontWeight: '700' }} className='text-[#FFFFFF] lg:text-[21px]'>{'Any mechanical keyboard enthusiasts in design?'}</h3>
                <span className=' text-[#969696] text-[13px]'>By Zarish Ali</span>
                <span className='my-2  text-[#969696] text-[13px]'>12-Feb-2023</span>
            </div>
        </div>
    )
}

export default FeatureBlogItem
