'use client'
import { EditSeoContext } from '@/utils/Providers/editSeoProvider'
import React, { useContext, useEffect, useState } from 'react'

import styles from './editSeo.module.scss';

interface newPageConent {
  filePath : string;
  newContent : string;
}


export default function EditSeoMain() {

  const value = useContext(EditSeoContext);
  
  const [newContent, setNewContent] = useState("");

  const newPageContent : newPageConent = {
    filePath : JSON.stringify(value?.pageContent?.filePath),
    newContent : JSON.stringify(newContent)
  }

  async function postNewContent () {
    const response = await fetch("/api/postPageSeoContent", {
      method : 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPageContent)
    })
    const res = await response.json()
  }

  useEffect( () => {
    if(value?.pageContent?.readPage === " ") {
     setNewContent("Select the page you want to edit. Click the `Get SEO Content` button. Using ctrl + f, select the text you need and replace it. To submit changes to the server, click the `submit` button at the bottom of the page");
    }
    if(value?.pageContent?.readPage != " ") {
      setNewContent(JSON.parse(value?.pageContent?.readPage!));
    }
  }, [value])



  return (
    <main>
      <form action={postNewContent} className={`${styles.seoContent}`}>
        <textarea className={`text-black ${styles.seoContent_text}`} name="" id="" rows={20} cols={50} value={newContent} onChange={(e) => setNewContent(e.target.value)}>
        </textarea>
         <button>Submit</button>       
      </form>
    </main>
  )
}
