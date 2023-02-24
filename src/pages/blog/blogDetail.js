import React from 'react'
import { useRouter } from 'next/router'

const BlogDetail = () => {
    const router = useRouter();

    return (
        <>
            <div
                className='h-[500px] w-full'
                style={{ backgroundImage: `url(${router.query.postImage})`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}
            ></div>
            <div className='flex flex-row justify-between mx-20 my-5'>
                <span className='text-[white] text-[20px]'>Category</span>
                <span>By Zain Ahmed</span>
            </div>
            <div className='mx-20 my-5'>
                <span className='text-[white] text-[24px] font-bold  '>{router.query.postTitle}</span>
            </div>

            <div className='flex my-2 justify-center'>
                <div className='bg-white flex flex-col md:w-[50%] w-[90%] px-14 gap-5'>
                    <div className='flex gap-2 justify-start items-end '>
                        <span className='text-[black] text-[54px] font-bold'>T</span>
                        <span className='text-[black] text-[16px]'>orem ipsum dolor, sit amet consectetur adipisicing elit. Unde, fuga. Corrupti consequatur ratione magni libero maxime. Porro magni quidem quaerat delectus sit, esse iste dolores iure! Porro minus praesentium labore?</span>
                    </div>
                    <div>
                        <span className='text-[black] text-[16px]'>orem ipsum dolor, sit amet consectetur adipisicing elit. Unde, fuga. Corrupti consequatur ratione magni libero maxime. Porro magni quidem quaerat delectus sit, esse iste dolores iure! Porro minus praesentium labore?</span>
                    </div>
                    <div>
                        <span className='text-[black] text-[16px]'>orem ipsum dolor, sit amet consectetur adipisicing elit. Unde, fuga. Corrupti consequatur ratione magni libero maxime. Porro magni quidem quaerat delectus sit, esse iste dolores iure! Porro minus praesentium labore?</span>
                    </div>
                    <div>
                        <span className='text-[black] text-[16px]'>orem ipsum dolor, sit amet consectetur adipisicing elit. Unde, fuga. Corrupti consequatur ratione magni libero maxime. Porro magni quidem quaerat delectus sit, esse iste dolores iure! Porro minus praesentium labore?</span>
                    </div>

                    <div className='my-3'>
                        <span className='text-[black] text-[20px] font-bold'>orem ipsum dolor, sit amet consectetur adipisicing elit. Unde, fuga. Corrupti consequatur ratione magni libero maxime. Porro magni quidem quaerat delectus sit, esse iste dolores iure! Porro minus praesentium labore?</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BlogDetail
