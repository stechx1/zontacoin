import React from 'react'
import { useRouter } from 'next/router'

const BlogBox = ({ postTitle, postImage, content }) => {
  const router = useRouter();
  const handleReadMore = () => {
    router.push({
      pathname: '/blog/blogDetail',
      query: {
        postImage: postImage,
        postTitle: postTitle,
        content: content,

      }
    })
  }
  return (
    <div className='flex flex-col sm:items-start items-center '>
      <img src={postImage} alt="blog" className=' md:w-[400px] w-[200px] h-60 rounded-[4px] align-middle' />
      <h3 style={{ fontWeight: '700' }} className='text-[#FFFFFF] my-5 xl:text-[22px] text-center sm:text-left'>{postTitle}</h3>
      <span className=' text-[#ffffff] xl:text-[15px] text-[12px] text-center sm:text-left'>{content}</span>
      <div className='flex items-center gap-1'>
        <span className='my-4 underline text-[#ffffff] xl:text-[16px] cursor-pointer' onClick={handleReadMore}>Read Post </span>
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-up-right cursor-pointer" width="18" height="18" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <path d="M17 7l-10 10"></path>
          <path d="M8 7l9 0l0 9"></path>
        </svg>
      </div>
    </div>
  )
}

export default BlogBox
