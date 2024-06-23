'use client'
import React, { useState, useEffect } from 'react';
import Post from './Post';

import style from './researches.module.scss';

import Link from 'next/link';


interface PostData {
  id: number;
  title: string;
  summary: string;
  image: string;
  date: string;
  category: string;
}

const blurredStyle = {
  filter: 'blur(5px)',
};

export default function Researches() {
  const [posts, setPosts] = useState<PostData[]>([]);
  const [page, setPage] = useState<number>(1);
  const [screenSize, setScreenSize] = useState<number>(700);
  useEffect(() => {
    fetchPosts();
  }, [page]);
  useEffect(() => {
    const handleResize = () => {
      setScreenSize(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await fetch(`/api/GetPosts`)
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const newPosts: PostData[] = await response.json();
      setScreenSize((prevSize) => {
        if (prevSize < 1300 && prevSize > 746) {
          return prevSize;
        } else {
          return window.innerWidth;
        }
      });
  
      let filteredPosts = newPosts;
      if (screenSize < 1300 && screenSize > 746) {
        filteredPosts = newPosts.slice(0, 8);
      }
      setPosts(filteredPosts);
    } catch (error) { 
      console.error('Failed to fetch posts:', error);
    }
  };

  const handleNextClick = () => {
    setPage(prevPage => prevPage + 1);  
  };
  return (
    <main>
      <div className="researches-container">
        <div className="container">
          <div className={`${style.researches_content}`}>
            <div className={`${style.researches_title} researches-title text-red-500`}>
              <h1>Researches</h1>
              <p>All the research is available here for public access</p>
            </div>
            <div className={`${style.researches_blocks}`}>
              {posts.map(post => (
                <div key={post.id}  style={post.summary ? {} : blurredStyle}>
                  <Link href={`/researches/post=${post.id}`}><Post key={post.id} {...post}/></Link> 
                </div>
              ))}
            </div>
            <div className={`${style.researches_btn}`}>
              <button>Next</button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}