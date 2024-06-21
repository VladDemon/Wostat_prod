'use client'

import React, { useContext, useState } from 'react'

import EditSeoHeader from './EditSeoHeader'

import EditSeoMain from './EditSeoMain'

import { EditSeoContext } from '@/utils/Providers/editSeoProvider'

// export const EditSeoContext = React.createContext([]);



export default function EditSeo() {  const [pageContent, setPageContent] = useState<string>(" ");
  return (
    <div className={`${EditSeo}`}>
        <EditSeoContext.Provider value={{pageContent, setPageContent}}>
            <EditSeoHeader/>
            <EditSeoMain/>
        </EditSeoContext.Provider>
    </div>
  )
}
