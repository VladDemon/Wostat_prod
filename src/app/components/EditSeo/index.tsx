'use client'

import React, { useContext, useState } from 'react'

import EditSeoHeader from './EditSeoHeader'

import EditSeoMain from './EditSeoMain'

import { EditSeoContext } from '@/utils/Providers/editSeoProvider'

// export const EditSeoContext = React.createContext([]);

interface PageContent {
  readPage : string;
  filePath : string;
}

export default function EditSeo() {  
  
  const [pageContent, setPageContent] = useState<PageContent>({readPage : " ", filePath : " "});

  return (
    <div className={`${EditSeo}`}>
        <EditSeoContext.Provider value={{pageContent, setPageContent}}>
            <EditSeoHeader/>
            <EditSeoMain/>
        </EditSeoContext.Provider>
    </div>
  )
}
