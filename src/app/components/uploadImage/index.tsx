'use client'
import { useState } from "react";

import style from './addPost.module.scss'

import Image from "next/image";

export const UploadImage = () => {
    const [selectedFile, setSelectedFile] = useState(null);
    const [title, setTitle] = useState<string>("");
    const [category, setCategory] = useState("");
    const [contentText, setContentText] = useState("");
    const [summary, setSummary] = useState("");
    const [uploaded, setUploaded] = useState();
    
    const handleChange = ( e ) => {
        console.log(e.target.files)
        setSelectedFile(e.target.files[0])
    }
    const handleUpload = async () => {
        if(!selectedFile && !title && !category && !contentText) {
            console.error('write post content')
            return;
        }
        const formData = new FormData();
        formData.append('file', selectedFile!);
        formData.append('title', title)
        formData.append('category', category)
        formData.append('contentText', contentText);
        formData.append("summary", summary)
        const response = await fetch("/api/adminAddPost", {
            method: 'POST',
            body: formData,
          })
        console.log(response);
    }
    return (
        <div className={`${style.addPostContent}`}>
        <div className={`${style.addPostForm}`}>
          <form action={handleUpload} className={`text-black ${style.postForm}`} >
            <input type="" placeholder='title' required name='title' value={title} onChange={(e) => { return setTitle(e.target.value) }}/>
            <input type="text" name="summary" required value={summary} onChange={(e) => {return setSummary(e.target.value)}} placeholder="write annotation to your post small"/>
            <div><input type="file" placeholder='imageURL' required name='image' onChange={handleChange} accept="image/*,.png,.jpg,.svg"/>Take a picture</div>
            <input type="text" placeholder='category' name='category' required value={category} onChange={(e) => { return setCategory(e.target.value) }}/>
            <textarea placeholder='contentText   IF you want to move text to a new line write "\\n"' required className={`${style.postFromContent}`} name='contentText' value={contentText} onChange={(e) => {return setContentText(e.target.value)}}/>

            <button className={`${style.postFormBtn}`}>AddPost</button>

          </form>
        </div>
      </div>
    )
}