'use client';
import React, { useState, useEffect } from 'react'

import { usePathname } from 'next/navigation';

import Image from 'next/image';

import style from './post.module.scss'

const post = {
  title : "",
  id: "",
  fullTitle : "",
  fullSummary1 : "",
  fullSummary2 : "",
  fullSummary3 : "",
  fullSummary4 : "",
  fullSummary5 : "",
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
              <p className={`${style.postPar1} ${style.postParagraph1}`}>{data.fullSummary1}</p>
              <p className={`${style.postPar1} ${style.postPar2}`}>{data.fullSummary2}</p>
              <p className={`${style.otherPar}`}>{data.fullSummary3}</p>
              <p className={`${style.otherPar}`}>{data.fullSummary4}</p>
              <p className={`${style.otherPar}`}>{data.fullSummary5}</p>
            </div>
            <Image className={`${style.postImg}`} src={data.image} alt='img' width={612} height={100}/>
          </div>
        </div>
      </div>
    </div>
  )
}