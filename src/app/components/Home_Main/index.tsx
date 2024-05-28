'use client';
import React from 'react'

import MainDiscover from './Main_Discover'
import MainTeam from './Main_Team'
import MainPartners from './Main_Partners'
import MainData from './Main_Data'
import MainCost from './Main_MonthCost'
import PubliclyResearch from './Main_PubliclyResearch'
import Questions from './Questions'
import Footer from '../Footer'

export default function HomeMain() {
  return (
    <main className='main'>
        <MainDiscover/>
        <MainTeam/>
        <MainPartners/>
        <MainData/>
        <MainCost/>
        <PubliclyResearch/>
        <Questions/>
    </main>
  )
}
