'use client';
import React from 'react'

import Image from 'next/image';
import Link from 'next/link';
// import Footer from '../Footer'

import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export default function HomeMain() {

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true,
            }
        }
    ]
};

  return (
    <main className='main'>
        {/* <MainDiscover/> */}
        <div className="mainDiscover">
        <div className="mainDiscover__container">
            <div className='container'>
                <div className="mainDiscover-offer text-black">
                    <span className='offer-main'>Discover new horizons</span>
                    <span className='offer-team'><b>WOSTAT</b> is a leading organization specializing in computing statistics across the Internet and conducting research.</span>
                    <span className='offer-team'>We have a variety of data collection methods, including monitoring network traffic, analyzing search queries, studying social media, as well as using specialized algorithms and tools.</span>
                    <div className="offer-link">
                        <a href="#!" className='offer-link__body text-black'><span>Learn more</span>  <img src="/images/main/arrow.svg" alt="" className='offer-link__img'/></a>
                    </div>
                </div>
            </div>
            <div className="mockup">
                <div className="mockup-task">
                    <div className="mockup-task__content">
                        <div className="mockup-task__header">
                            <h1 className='task-header__text'>Task Today</h1>
                            <Image src={"/images/main/task_today.svg"} width={120.66} height={59.58} alt='task'/>
                            <div className="task-name">
                                <h1 className='task-header__text'>Creating Awesome Mobile Apps</h1>
                                <span className='task-name__work'>UI /UX Designer</span>
                            </div>
                        </div>
                        <div className="progress">
                            <h1 className='task-header__text'>Progress</h1>
                            <Image src={"/images/main/line.svg"} width={100.55} height={2.98} alt='line'/>
                            <h1 className='progress-text flex flex-row'><Image src={"/images/main/stroke.svg"} width={8.94} height={8.94} alt='storke'/>1 Hour</h1>
                        </div>
                        <div className="task-detail">
                            
                            <div className="detail-elem">
                                <h1 className='task-detail__top-text'>Detail Task</h1>
                                <div className="detail-elem1">
                                    <h1 className='detail-num'>1</h1>
                                    <span>Understanding the tools in Figma</span>
                                </div>
                                <div className="detail-elem1">
                                    <h1 className='detail-num'>2</h1>
                                    <span>Understand the basics of making designs</span>
                                </div>
                                <div className="detail-elem1">
                                    <h1 className='detail-num'>3</h1>
                                    <span>Design a mobile application with figma</span>
                                </div>
                            </div>
                            <button className='detail-btn'><h1 className='w-12'>Go To Detail</h1></button>
                        </div>
                    </div> 
                </div>
                <div className="mockup-dashboard">
                    <div className="dashboard__side-menu text-black">
                        <h1 className='side-menu__logo'>WOSTAT<span className='text-indigo-500'>.</span></h1>
                        <div className="side-menu">
                            <div className="side-menu__container">
                                <div className="side-menu__elem elem-selected flex"><img src="/images/main/overview.svg" alt="er" /><span>Overview</span></div>
                                <div className="side-menu__elem flex"><img src="/images/main/task.svg" alt="er" /><span>Task</span></div>
                                <div className="side-menu__elem flex"><img src="/images/main/mentors.svg" alt="er" /><span>Mentors</span></div>
                                <div className="side-menu__elem flex"><img src="/images/main/message.svg" alt="er" /><span>Message</span></div>
                                <div className="side-menu__elem flex"><img src="/images/main/settings.svg" alt="er" /><span>Settings</span></div>
                            </div>
                            <div className="send-btn bg-black">
                                <div className="send-btn__img">
                                    <img src="/images/main/send.svg" alt="" className='img'/>
                                </div>
                            </div>
                            <div className="help-center">
                                <div className="help-centerl">
                                    <div className="question">
                                        <span>?</span>
                                        <span className='question-shadow'></span>
                                    </div>
                                </div>

                                <div className="help-center__text">
                                    <h1>Help Center</h1>
                                    <span>Having Trouble in Learning.Please contact us for more questions.</span>
                                </div>
                                <button className="help-center__btn">
                                    <h1>Go To Help Center</h1>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="mockup-task_today">
                        <div className="task_today-container">
                            <div className="task-header flex">
                                <div className="patient">
                                    <h1 className='patient-text'>Running Task</h1>
                                    <h1 className='patient-num'>65</h1>
                                    <div className="shape flex gap-5">
                                        <span className='shape-per'>45%</span>
                                        <div className="task-count flex flex-col">
                                            <span className='task-num'>100</span>
                                            <span className='task-text'>Task</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="activity">
                                    <h1>Activity</h1>
                                    <Image src="/images/main/activitys.png" width={269.52} height={83.03} alt="graph" style={
                                        {
                                            objectFit: 'cover',
                                        }
                                    }/>
                                </div>
                            </div>
                            <div className="monthly_mentors">
                                <h1 className='monthly_mentors__top'>Monthly Mentors</h1>
                                <div className="monthly-mentors__elems">
                                    <div className="mentor-1">
                                        <div className="mentor-1__info">
                                            <div className="mentor-1__profile">
                                                <div className="mentor-1__profile-leftInfo">
                                                    <Image src={'/images/main/mentors1.svg'} width={30.66} height={30.66} alt='mentor'/>
                                                    <div className="mentor-1__text">
                                                        <h1 className='mentor-name'>Curious George</h1>
                                                        <div className="uiUx mt-1">
                                                            <span>UI UX</span>
                                                            <span>Design</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <button>+ Follow</button>
                                            </div>
                                            <div className="mentor-1__reviews">
                                                <div className="mentor-1__reviews-tasks">
                                                    <Image src="/images/main/note.svg" width={15.33} height={15.33} alt='note'/>
                                                    <h1 className='tasks-count'>40 Task</h1>
                                                </div>
                                                <div className="mentor-1__reviews-tasks">
                                                    <Image src="/images/main/mentors-star.svg" width={15.33} height={15.33} alt='start'/>
                                                    <h1 className='tasks-count'>4,7  (750 Reviews)</h1>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mentor-1">
                                        <div className="mentor-1__info">
                                                <div className="mentor-1__profile">
                                                    <div className="mentor-1__profile-leftInfo">
                                                        <Image src={'/images/main/mentor2.svg'} width={30.66} height={30.66} alt='mentor'/>
                                                        <div className="mentor-1__text">
                                                            <h1 className='mentor-name'>Abraham Lincoln</h1>
                                                            <div className="uiUx flex flex-row gap-1 mt-4">
                                                                <span>3D</span>
                                                                <span>Design</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <button>+ Follow</button>
                                                </div>
                                                <div className="mentor-1__reviews">
                                                    <div className="mentor-1__reviews-tasks">
                                                        <Image src="/images/main/note.svg" width={15.33} height={15.33} alt='note'/>
                                                        <h1 className='tasks-count'>32 Task</h1>
                                                    </div>
                                                    <div className="mentor-1__reviews-tasks">
                                                        <Image src="/images/main/mentors-star.svg" width={15.33} height={15.33} alt='start'/>
                                                        <h1 className='tasks-count'>4,9  (510 Reviews)</h1>
                                                    </div>
                                                </div>
                                            </div>
                                    </div>
                                </div>
                            </div>
                            <div className="upcoming_task">
                                <h1 className='upcoming_task-top'>Upcoming Task</h1>
                                <div className="task-lists">
                                    <div className="task-1">
                                        <div className="task-1__content">
                                            <Image src={"/images/main/task1.svg"} width={178.83} height={70.25} alt='tsk1'/>
                                            <div className="task-name">
                                                <h1>Creating Mobile App Design</h1>
                                                <div className='flex flex-col'><span>UI UX</span><span>Design</span></div>
                                            </div>
                                            <div className="task-progress">
                                                <div className="progress-top">
                                                    <h1>Progress</h1>
                                                    <span>75%</span>
                                                </div>
                                                <Image src={"/images/main/mark-line.svg"} width={178.83} height={5.11} alt='mark'/>
                                            </div>
                                            <div className="task-deadline">
                                                <div className="deadline-text">
                                                    <Image src={"/images/main/stroke.svg"} width={11.82} height={11.82} alt='sroke'/>
                                                    <h1>3 Days Left</h1>
                                                </div>
                                                <div className="deadline-students">
                                                    <Image src={"/images/main/students.svg"} width={56.2} height={15.33} alt='students'/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="task-1">
                                        <div className="task-1__content">
                                            <Image src={"/images/main/task2.svg"} width={178.83} height={70.25} alt='tsk1'/>
                                            <div className="task-name">
                                                <h1>Creating Perfect Website</h1>
                                                <span>Web Developer</span>
                                            </div>
                                            <div className="task-progress">
                                                <div className="progress-top">
                                                    <h1>Progress</h1>
                                                    <span>75%</span>
                                                </div>
                                                <Image src={"/images/main/mark-line.svg"} width={178.83} height={5.11} alt='mark'/>
                                            </div>
                                            <div className="task-deadline">
                                                <div className="deadline-text flex gap-2">
                                                    <Image src={"/images/main/stroke.svg"} width={11.82} height={11.82} alt='sroke'/>
                                                    <h1>3 Days Left</h1>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>
                </div>
            </div>
        </div>
    </div>
        {/* <MainTeam/> */}
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
        {/* <MainPartners/> */}
        <div className='mainPartners'>
          <div className="container">
              <div className="mainPartners-content">
                  <h1>Over 200+ partners</h1>
                  <div className="partners">
                      <img src="/images/main/partner1.svg" alt="" />
                      <img src="/images/main/partner2.svg" alt="" />
                      <img src="/images/main/partner3.svg" alt="" />
                      <img src="/images/main/partner4.svg" alt="" />
                      <img src="/images/main/partner5.svg" alt="" />
                      <img src="/images/main/partner6.svg" alt="" />
                      <img src="/images/main/partner7.svg" alt="" />
                  </div>
              </div>
          </div>
      </div>
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
        {/* <MainCost/> */}
        <div className="maincost">
          <div className="container">
              <div className="maincost-content">
                  <h1 className='maincost-content__text'>Cost per month of access</h1>
                  <div className="cost-blocks">
                      <div className="block cost-start">
                          <div className="cost-panel bg-white">
                              <h1>start</h1>
                              <div className="cost flex">
                                  <div className="cost-dol__container">
                                      <span className='cost-dol'>$</span>
                                  </div>
                                  <span className='cost-count'>0</span>
                              </div>
                          </div>
                          <div className="receive-panel">
                              <h1><img src="/images/main/ok.svg" alt="" /></h1>
                              <button>Receive</button>
                          </div>
                      </div>
                      <div className="block cost-start">
                          <div className="cost-panel bg-slate-800">
                              <h1 className='text-white'>Average</h1>
                              <div className="cost flex">
                                  <div className="cost-dol__container">
                                      <span className='cost-dol text-white'>$</span>
                                  </div>
                                  <span className='cost-count text-white'>69</span>
                              </div>
                          </div>
                          <div className="receive-panel">
                              <h1><img src="/images/main/ok.svg" alt="" /></h1>
                              <button>Receive</button>
                          </div>
                      </div>
                      <div className="block cost-start">
                          <div className="cost-panel bg-white">
                              <h1>Advanced</h1>
                              <div className="cost flex">
                                  <div className="cost-dol__container">
                                      <span className='cost-dol'>$</span>
                                  </div>
                                  <span className='cost-count'>609</span>
                              </div>
                          </div>
                          <div className="receive-panel">
                              <h1><img src="/images/main/ok.svg" alt="" /></h1>
                              <button>Receive</button>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="maincost-slider">
                  <div className="cost-blocks">
                      <Slider {...settings}>
                          <div className="block cost-start">
                              <div className="cost-panel bg-white">
                                  <h1>start</h1>
                                  <div className="cost flex">
                                      <div className="cost-dol__container">
                                          <span className='cost-dol'>$</span>
                                      </div>
                                      <span className='cost-count'>0</span>
                                  </div>
                              </div>
                              <div className="receive-panel">
                                  <h1><img src="/images/main/ok.svg" alt="" /></h1>
                                  <button>Receive</button>
                              </div>
                          </div>
                          <div className="block cost-start">
                              <div className="cost-panel bg-slate-800">
                                  <h1 className='text-white'>Average</h1>
                                  <div className="cost flex">
                                      <div className="cost-dol__container">
                                          <span className='cost-dol text-white'>$</span>
                                      </div>
                                      <span className='cost-count text-white'>69</span>
                                  </div>
                              </div>
                              <div className="receive-panel">
                                  <h1><img src="/images/main/ok.svg" alt="" /></h1>
                                  <button>Receive</button>
                              </div>
                          </div>
                          <div className="block cost-start">
                              <div className="cost-panel bg-white">
                                  <h1>Advanced</h1>
                                  <div className="cost flex">
                                      <div className="cost-dol__container">
                                          <span className='cost-dol'>$</span>
                                      </div>
                                      <span className='cost-count'>609</span>
                                  </div>
                              </div>
                              <div className="receive-panel">
                                  <h1><img src="/images/main/ok.svg" alt="" /></h1>
                                  <button>Receive</button>
                              </div>
                          </div>
                      </Slider>
                  </div>
              </div>
          </div>
    </div>
        {/* <PubliclyResearch/> */}
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
        {/* <Questions/> */}
        <div className="questions">
          <div className="container">
              <div className="questions-content">
                  <div className="questions-content__elems">
                      <h1 className='elem-text'>Do you have any more questions?</h1>
                      <button className='question-btn'>Ask a question</button>
                  </div>

              </div>
          </div>
    </div>
    </main>
  )
}
