import React from 'react'

export default function MainData() {
  return (
    <div className="mainData">
        <div className="container">
            <div className="mainData-content">
                <h1 className='mainData-text'>Directions of data collection</h1>
                <div className="content-data">
                    <div className="data">
                        <img src="/images/main/data1.svg" alt="" width={50} height={50}/>
                        <div className="data1-text">
                            <h1 className='data__top-text'>Realty</h1>
                            <h1 className='data__bottom-text'>Informative stats & research for informed decisions in buying, selling, or investing in property.</h1>
                        </div>
                    </div>
                    <div className="data">
                    <img src="/images/main/data2.svg" alt="" width={50} height={50}/>
                        <div className="data1-text self-start">
                            <h1 className='data__top-text '>Labor market</h1>
                            <span className='data__bottom-text'>Objective research on job trends & in-demand professions.</span>
                        </div>
                    </div>
                    <div className="data">
                        <img src="/images/main/data3.svg" alt="" width={50} height={50}/>
                        <div className="data1-text self-start">
                            <h1 className='data__top-text '>Retail consumption</h1>
                            <span className='data__bottom-text'>In-depth analysis of consumption trends & data for optimized retail business processes.</span>
                        </div>
                    </div>
                    <div className="data">
                    <img src="/images/main/data4.svg" alt="" width={50} height={50}/>
                        <div className="data1-text self-start">
                            <h1 className='data__top-text '>BlockChain</h1>
                            <span className='data__bottom-text'>Expert stats & insights for secure transactions & data management.</span>
                        </div>
                    </div>
                    <div className="data">
                    <img src="/images/main/data5.svg" alt="" width={50} height={50}/>
                        <div className="data1-text self-start">
                            <h1 className='data__top-text '>Social network</h1>
                            <span className='data__bottom-text'>Analytics & trends for effective online communication & networking.</span>
                        </div>
                    </div>
                    <div className="data">
                    <img src="/images/main/data6.svg" alt="" width={50} height={50}/>
                        <div className="data1-text self-start">
                            <h1 className='data__top-text '>Enterprises</h1>
                            <span className='data__bottom-text'>Data-driven insights on market position, competitiveness, and growth potential.</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
