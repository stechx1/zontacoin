import React, {useEffect, useState} from 'react'
import BlogBox from '../../components/Blog/BlogBox'
import FeatureBlogItem from '../../components/Blog/FeatureBlogItem'
import { useRouter } from 'next/router'
import { db } from '../../../FirebaseConfig'
import { getDocs, collection } from 'firebase/firestore'
import LoadingSpinner from '../../components/Spinner/LoadingSpinner'

const blogs = () => {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(false)
  const router = useRouter();
  useEffect(() => {
    fetchPosts();
  }, [])
  const fetchPosts = async () => {
    setLoading(true);
    try {
      const postItem = [];
      const querySnapshot = await getDocs(collection(db, "blogs"));
      querySnapshot.forEach((doc) => {
        const { content, postImage, title, date, year, month } = doc.data();
        postItem.push({
          postTitle: title,
          content: content,
          postImage: postImage,
          date: date,
          month: month,
          year: year,
        });
      });
      setPosts(postItem);
      setLoading(false);
    } catch (excep) {
      setLoading(false);
      console.log(excep);
    }
  }
  return (
    <div>
      <h2 className='text-4xl font-bold text-center sm:my-20 mx-5'>Blogs</h2>

      <div className="flex md:flex-row flex-col gap-28 mx-20 ">
        <div className=' flex flex-col md:w-[60%] sm:w-[70%] w-[80%]'>
          <div>
            <img src="/images/eco-friendly-hero.png" alt="blog" className=' lg:w-[550px] h-80 md:w-[400px] w-[400px] rounded-[4px]' />

          </div>
          <h3 style={{ fontWeight: '700' }} className='text-[#FFFFFF] my-5 lg:text-[22px]'>{'Any mechanical keyboard enthusiasts in design?'}</h3>
          <span className=' text-[#ffffff] lg:text-[15px] text-[12px]'>Physiological respiration involves the mechanisms that ensure that the composition of the functional residual capacity is kept constant</span>
          <div className='flex items-center gap-1'>
            <span className='my-4 underline text-[#ffffff] xl:text-[16px] cursor-pointer'>Read Post </span>
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-up-right cursor-pointer" width="18" height="18" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M17 7l-10 10"></path>
              <path d="M8 7l9 0l0 9"></path>
            </svg>
          </div>
        </div>
        <div className=' flex flex-col gap-4 lg:w-full xl:px-24 '>
          <FeatureBlogItem />
          <FeatureBlogItem />
          <FeatureBlogItem />
          <FeatureBlogItem />

        </div>
      </div>

      <div className='sm:mx-20 mx-5'>
        <h2 className='text-3xl font-bold my-10 '>Latest Blogs</h2>
        {loading ? <div className='flex items-center justify-center'><LoadingSpinner/> </div> : <div class="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 md:gap-6 sm:gap-4 gap-2">
          {posts.map((element, index)=>{
            return <BlogBox key={index} postTitle={element.postTitle} postImage={element.postImage} content={element.content} />
          })}
        </div>}
        {/* <div className='flex sm:flex-row flex-col justify-between lg:gap-24 md:gap-16 gap-10'>
          <BlogBox />
          <BlogBox />
          <BlogBox />
        </div>

        <div className='flex sm:flex-row flex-col justify-between lg:gap-24 md:gap-16 gap-10 my-10'>
          <BlogBox />
          <BlogBox />
          <BlogBox />
        </div> */}
      </div>
    </div>
  )
}

export default blogs