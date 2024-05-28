import React from 'react';

import style from './vacancies.module.scss';

export default function Vacancies() {
  return (
    <div className={`${style.vacancies_content}`}>
        <div className={`${style.container}`}>
            <h1 className={`${style.vac_topText}`}>Open vacancies</h1>
            <p className={`${style.vac_topUnder}`}>Please respond to the vacancy you like and we will contact you</p>
            <div className={`${style.vacancies}`}>
                <div className={`${style.vacancies_1} ${style.vac}`}>
                    <div className={`${style.vac_info}`}>
                        <div className={`${style.vac_info_text}`}>
                            <h1 className={`${style.vac_name}`}>BI Programmer</h1>
                            <div className={`${style.vac_info_txt}`}>
                                <p>Please respond to the vacancy you like and we will contact you Please respond to the vacancy you like and we will contact you
                                </p>
                                <p>Please respond to the vacancy you like and we will contact you Please respond to the vacancy you like and we will contact you</p>
                            </div>
                            </div>
                        <button>Respond</button>
                    </div>
                    <div className={`${style.under_line}`}></div>

                </div>
                <br></br>
                <div  className={`${style.vacancies_2} ${style.vac}`}>
                    <div className={`${style.vacancies_1} ${style.vac}`}>
                        <div className={`${style.vac_info}`}>
                            <div className={`${style.vac_info_text}`}>
                                <h1 className={`${style.vac_name}`}>Backend Developer</h1>
                                <div className={`${style.vac_info_txt}`}>
                                    <p>Please respond to the vacancy you like and we will contact you Please respond to the vacancy you like and we will contact you
                                    </p>
                                    <p>Please respond to the vacancy you like and we will contact you Please respond to the vacancy you like and we will contact you</p>
                            </div>
                            </div>
                            <button>Respond</button>
                        </div>
                    </div>
                    <div className={`${style.under_line}`}></div>
                </div>
                <br></br>
                <div  className={`${style.vacancies_3} ${style.vac}`}>
                    <div className={`${style.vacancies_1} ${style.vac}`}>
                        <div className={`${style.vac_info}`}>
                            <div className={`${style.vac_info_text}`}>
                                <h1 className={`${style.vac_name}`}>Full Stack Developer</h1>
                                <div className={`${style.vac_info_txt}`}>
                                    <p>Please respond to the vacancy you like and we will contact you Please respond to the vacancy you like and we will contact you
                                    </p>
                                    <p>Please respond to the vacancy you like and we will contact you Please respond to the vacancy you like and we will contact you</p>
                                </div>
                            </div>
                            <button>Respond</button>
                        </div>
                    </div>
                    <div className={`${style.under_line}`}></div>
                </div>
                <br></br>
                <div  className={`${style.vacancies_4} ${style.vac}`}>
                    <div className={`${style.vacancies_1} ${style.vac}`}>
                        <div className={`${style.vac_info}`}>
                            <div className={`${style.vac_info_text}`}>
                                <h1 className={`${style.vac_name}`}>QA Engineer</h1>
                                <div className={`${style.vac_info_txt}`}>
                                    <p>Please respond to the vacancy you like and we will contact you Please respond to the vacancy you like and we will contact you
                                    </p>
                                    <p>Please respond to the vacancy you like and we will contact you Please respond to the vacancy you like and we will contact you</p>
                                </div>
                            </div>
                            <button>Respond</button>
                        </div>
                    </div>
                    <div className={`${style.under_line}`}></div>
                </div>
                <br></br>
                <div  className={`${style.vacancies_5} ${style.vac}`}>
                    <div className={`${style.vacancies_1} ${style.vac}`}>
                        <div className={`${style.vac_info}`}>
                            <div className={`${style.vac_info_text}`}>
                                <h1 className={`${style.vac_name}`}>Data Scientist</h1>
                                <div className={`${style.vac_info_txt}`}>
                                    <p>Please respond to the vacancy you like and we will contact you Please respond to the vacancy you like and we will contact you
                                    </p>
                                    <p>Please respond to the vacancy you like and we will contact you Please respond to the vacancy you like and we will contact you</p>
                                </div>
                            </div>
                            <button>Respond</button>
                        </div>
                    </div>
                    <div className={`${style.under_line}`}></div>
                </div>
            </div>
        </div>
    </div>
  )
}
