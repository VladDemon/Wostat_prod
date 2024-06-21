'use client'
import { EditSeoContext } from '@/utils/Providers/editSeoProvider'
import React, { useContext, useEffect, useState } from 'react'

import styles from './editSeo.module.scss';

export default function EditSeoMain() {

  const value = useContext(EditSeoContext);
  
  const [newContent, setNewContent] = useState("");

  useEffect( () => {
    if(value?.pageContent === " ") {
     setNewContent("123");
      console.log(value); 
    }
    if(value?.pageContent != " ") {
      setNewContent(JSON.parse(value?.pageContent!));
    }
  }, [value])

  return (
    <main>
      <form action="" className={`${styles.seoContent}`}>
        <textarea className={`text-black ${styles.seoContent_text}`} name="" id="" rows={50} cols={50} value={newContent} onChange={(e) => setNewContent(e.target.value)}>
        </textarea>
        <button>Submit</button>       
      </form>
    </main>
  )
}
