import React, { useEffect, useRef, useState } from 'react'
import { db } from '../../../FirebaseConfig';
import { auth } from "../../../FirebaseConfig";
import styles from './blog.module.css'
import { storage } from "../../../FirebaseConfig";
import {
    ref,
    getDownloadURL,
    uploadBytesResumable,
} from "firebase/storage";
import { collection, addDoc } from "firebase/firestore";
import Router from 'next/router';

import LoadingSpinner from '../../components/Spinner/LoadingSpinner';

const createBlog = () => {

    const [data, setData] = useState({ title: '', content: '', redirect: '' })
    const onChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }
    const [loading, setLoading] = useState(false)

    const [name, setName] = useState('')
    const [url, setUrl] = useState('')
    const imageRef = useRef();
    const uploadImage = () => {
        imageRef.current.click();
    }
    const [imageLoaded, setImageLoaded] = useState(false)
    const [imageURL, setImageURL] = useState('')
    const captureImage = (e) => {
        const image = e.target.files[0]
        setName(e.target.files[0].name)
        setUrl(e.target.files)
        const showImage = URL.createObjectURL(image)
        setImageLoaded(true);
        setImageURL(showImage);
    }
    const addPost = async () => {
        const downloadURI = await ManageImage();
        var d = new Date();
        await addDoc(collection(db, 'blogs'), {
            title: data.title,
            content: data.content,
            postImage: downloadURI,
            date: d.getDate().toString(),
            month: (d.getMonth() + 1).toString(),
            year: d.getFullYear().toString(),
        })
            .then(() => {
                setLoading(false);
                Router.push('/blog/blogs')
               
            })
            .catch((e) => {
                console.log(e)
            })
    }
    const ManageImage = async () => {
        setLoading(true)
        const imgRef = ref(storage, `images/${name + Date.now()} `);
        await uploadBytesResumable(imgRef, url[0]).then(() => {
            console.log("Image Uploaded");
        });

        const downloadURI = await getDownloadURL(imgRef);
        return downloadURI;
    };

    return (

        <>
            <div>
                <h2 className='text-4xl font-bold text-center sm:my-10 mx-5'>Create Blog</h2>

            </div>
            <div className={` ${styles.right} d-flex gap-5 px-3 w-[50%] flex-col mx-auto`}>

                <div className='flex flex-col gap-5'>
                    <input onChange={onChange} type="text" name="title" id="title" placeholder='Enter title here' />
                    <textarea onChange={onChange} name="content" id="content" rows="10" placeholder='Enter post'></textarea>
                </div>

                <div className={`flex flex-col my-5 `}>

                    <div className='flex flex-col gap-3'>
                        {!imageLoaded ? <div onClick={uploadImage} className={styles.thumbnail}>
                            <span>Click to Choose image</span>
                        </div> : <div className='mx-auto'>
                            <img src={imageURL} alt="uploadedImage" className='img-fluid' />
                        </div>
                        }
                    </div>
                    <div className='d-flex flex-column gap-3'>
                        <button disabled={loading} onClick={addPost} className={`${styles.addButton} bg-blue-700 w-100`}>{loading ? <LoadingSpinner /> : 'Publish'}</button>
                    </div>

                </div>
            </div>
            <input onChange={captureImage} ref={imageRef} style={{ visibility: "hidden" }} type="file" name="picture" id="picture" />
        </>

    )
}

export default createBlog
