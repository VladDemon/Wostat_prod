'use client'

import React, {useContext, useState} from 'react'

import style from './editSeoHeader.module.scss';

// import { editSeoProvider } from '@/utils/Providers/editSeoProvider';

// import { EditSeoContext } from '..';

import { EditSeoContext } from '@/utils/Providers/editSeoProvider';

export default function EditSeoHeader() {
    const context = useContext(EditSeoContext);
    // const [pageContent, setPageContent] = useState<string>();
    const { setPageContent } = context!;
    // const [pageContent, setPageContent] = useContext(EditSeoContext);
    const [selectedOption, setSelectedOption] = useState("main");
    async function getPageContent () {
        const seoContent = await fetch("/api/getPageSeoContent", {
            method : "POST",
            headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(selectedOption),
        })
        const response = await seoContent.json();
        // console.log(response);
        setPageContent(response);
        // console.log(pageContent);
    }
    // const pageContent = useContext(EditSeoContext)
    
  return (
        <header className={`${style.header} text-black`}>
            <form action={getPageContent} className={`${style.header_from}`}>
                <select name="" id="" onChange={e => setSelectedOption(e.target.value)}>
                    <option value="main">main</option>
                    <option value="researches">researches</option>
                    <option value="post">post</option>
                    <option value="vacancies">vacancies</option>
                </select>
                <button className='text-black'>Get seo content</button>
            </form>
        </header>
  )
}
