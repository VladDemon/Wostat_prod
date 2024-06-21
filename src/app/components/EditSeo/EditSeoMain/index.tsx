'use client'
import { EditSeoContext } from '@/utils/Providers/editSeoProvider'
import React, { useContext } from 'react'



export default function EditSeoMain() {

  const value = useContext(EditSeoContext)
  const pageContent = JSON.parse(value?.pageContent!)
  return (
    <main>
      <form action="">
        <textarea className={`text-black`} name="" id="" value={pageContent} rows={100} cols={100} >
        </textarea>
        <button>Submit</button>       
      </form>
    </main>
  )
}
