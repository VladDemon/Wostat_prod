import React from 'react'

import Link from 'next/link'

export default function MainTeam() {
  return (
    <div className="mainTeam">
        <div className="container">
            <div className="mainTeam-content">
                <div className="mainTeam-img">
                    <img src="/images/main/mainTeam.svg" alt=""/>
                </div>
                <div className="mainTeam-offer text-black">
                    <h1 className='mainTeam-top'>Team, this is the most valuable</h1>
                    <h1 className='mainTeam-text'>The WOSTAT team is a cohesive and highly qualified group of experts united by common goals and the desire to provide customers with the highest level of service. Each member of the team makes a unique contribution and has a professional skill in their field.</h1>
                    <Link href="/vacancies" className=''>Job openings <img src="/images/main/arrow.svg" alt="" /></Link>
                </div>
            </div>
        </div>
    </div>
  )
}
