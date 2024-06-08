'use client';
import React, { useState, useEffect } from 'react'

import { usePathname } from 'next/navigation';

import Image from 'next/image';

import style from './post.module.scss'

const post = {
  title : "",
  id: "",
  fullTitle : "",
  fullSummary : "",
  summary : "",
  image : "",
  category : "",
  date : "",
}

export default function PostsID() {
  const [data, setData] = useState(post);
  const postId = usePathname().toString().split('=')[1];
  console.log(postId)
  useEffect(() => {
    const fetchPost = async (postId : string | string[] | undefined) => {
      try {
        const response = await fetch('/api/GetPost', {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(postId),
        });
        const data = await response.json();
        setData(data);
      } catch (e) {
        console.error(e);
      }
    };
    fetchPost(postId);
  }, [postId]); 
  return (
    <div className={`${style.postContent}`}>
      <div className="container">
        <div className={`${style.postContainer}`}> 
          <h1 className={`${style.postFullTitle}`}>{data.fullTitle}</h1>
          <p className={`${style.postDateCat}`}>{data.category}  |  {data.date}</p>
          <div className={`${style.postContainer_content}`}>
            <div className={`${style.postSummary}`}>
              <div className={`${style.postPar1 } ${style.postParagraph1}`}>{data.fullSummary.split('\\n').map( (elem, key) => <p key={key} className={`${style.postPar} ${(key < 3 ? "" : style.otherPar)}`}>{elem}</p> )}</div>
            </div>
            <Image className={`${style.postImg}`} src={data.image} alt='img' width={612} height={100}/>
          </div>
        </div>
      </div>
    </div>
  )
}