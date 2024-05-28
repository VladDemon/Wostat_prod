import React from 'react';

import style from './post.module.scss';


interface PostProps {
  id: number;
  title: string;
  summary: string;
  image: string;
  date: string;
  category: string;
}

const Post: React.FC<PostProps> = ({ title, summary, image, date, category }) => {
  return (
    <div className={`${style.post} bg-white shadow-md rounded-lg mb-6`}>
      <img src={image} alt={title} className="w-full h-48 object-cover rounded-t-lg" />
      <div className={`${style.bodyPost}`}>
        <h1 className={`${style.title} text-lg font-semibold`}>{title}</h1>
        <p className={`${style.summary} mt-2 text-gray-800`}>{summary}</p>
        <p className={`${style.date} text-sm text-gray-600`}>{date} | {category}</p>
      </div>
    </div>
  );
};

export default Post;