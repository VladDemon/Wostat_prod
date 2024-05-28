import React from 'react'
import Image from 'next/image'
import styles from './main_discover.module.scss'

export default function MainDiscover() {
  return (
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
                                    <Image src="/images/main/activity.svg" width={269.52} height={83.03} alt="graph" />
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
                                                        <div className="uiUx flex flex-col">
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
                                                            <div className="uiUx flex flex-row gap-1">
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

  )
}
