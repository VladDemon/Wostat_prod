import React from 'react'

import Link from 'next/link';

export default function PubliclyResearch() {
  return (
    <div className="publicly-research">
        <div className="container">
            <div className="publicly-research-content">
                <h1 className='public-research-text text-black'>Publicly available research</h1>
                <div className="publications flex">
                    <div className="publications-left flex flex-row">
                        <div className="publications-1">
                            <img src="/images/main/publicResearch1.svg" alt="" width={377} height={270}/>
                            <div className="publication-1__DateCategory">
                                <span>08-11-2021</span>
                                <span>Category</span>
                            </div>
                            <div className="publication-1__topText">
                                <h1>Believing neglected so so allowance existence departure.</h1>
                            </div>
                            <div className="publication-1__bottomText">
                                <h1 className="publication-1__bottomText">Blessing welcomed ladyship she met humoured sir breeding her. Six curiosity day assurance bed necessary.</h1>
                            </div>
                        </div>
                        <div className="publications-1">
                            <img src="/images/main/publicResearch2.svg" alt="" width={377} height={270}/>
                            <div className="publication-1__DateCategory">
                                <span>08-11-2021</span>
                                <span>Category</span>
                            </div>
                            <div className="publication-1__topText">
                                <h1>In design active temper be uneasy. Thirty for remove plenty regard you.</h1>
                            </div>
                            <div className="publication-1__bottomText">
                                <h1>Yet preference connection unpleasant yet melancholy but end appearance. And excellence partiality estimating terminated day everything.</h1>
                            </div>
                        </div>
                    </div>
                    
                    <div className="Publicly-side">
                        <div className="publication-side line_under flex">
                            <img src="/images/main/publicResearch3.svg" alt="" width={110} height={80}/>
                            <div className="publication-side__content flex flex-col">
                                <div className="publication-side-Date w-52">
                                    <span>08-11-2021</span>
                                    <span>Category</span>
                                </div>
                                <div className="publication-1__topText">
                                    <h1>Partiality on or continuing in particular principles</h1>
                                </div>
                            </div>
                        </div>
                        <div className="publication-side line_under flex">
                            <img src="/images/main/publicResearch4.svg" alt="" width={110} height={80}/>
                            <div className="publication-side__content flex flex-col">
                                <div className="publication-side-Date w-52">
                                    <span>08-11-2021</span>
                                    <span>Category</span>
                                </div>
                                <div className="publication-1__topText">
                                    <h1>Do believing oh disposing to supported allowance we.</h1>
                                </div>
                            </div>
                        </div>
                        <div className="publication-side line_under flex">
                            <img src="/images/main/publicResearch5.svg" alt="" width={110} height={80}/>
                            <div className="publication-side__content flex flex-col">
                                <div className="publication-side-Date w-52">
                                    <span>08-11-2021</span>
                                    <span>Category</span>
                                </div>
                                <div className="publication-1__topText">
                                    <h1>Village did removed enjoyed explain nor ham saw.</h1>
                                </div>
                            </div>
                        </div>
                        <div className="publication-side flex flex-row">
                            <img src="/images/main/publicResearch6.svg" alt="" width={110} height={80}/>
                            <div className="publication-side__content flex flex-col">
                                <div className="publication-side-Date w-44">
                                    <span>08-11-2021</span>
                                    <span>Category</span>
                                </div>
                                <div className="publication-1__topText">
                                    <h1>Securing as informed declared or margaret</h1>
                                </div>
                            </div>

                        </div>    
                        <Link href={"/researches"} className='more-research'><p>More research</p> <img src="/images/main/arrow.svg" alt="" /></Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
