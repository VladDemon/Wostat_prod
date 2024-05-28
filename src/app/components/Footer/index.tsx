import React from 'react';

import Link from 'next/link';

function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-content__top">
            <div className="footer-content__leftSide">
              <h1 className='footer-logo'>WOSTAT <span className='footer-point'>.</span></h1>
              <div className='footer__under-text'>Whoever owns the information owns the world.</div>
            </div>
            <div className="footer-content__middleSide">
              <h1>Stay up to date with the news</h1>
              <label className='middleSide-label'>
                <input type="text" placeholder='Email'/>
                <div className="middleSide-label__btn">
                  <button className='middleSide-btn'>Subscribe</button>    
                </div>
        
              </label>
            </div>
          </div>
          <div className="footer-content__rightSide">
            <div className="rightSide-contact">
              <div className="contact-text"><h1>Company</h1></div>
              <div className="contact-companys">
                <a href="" className='footer__content-text'>About</a>
                <a href=""className='footer__content-text' >Price</a>
                <Link href={"/researches"} className='footer__content-text' >Research</Link>
                <Link href="/vacancies" className='footer__content-text' >Job</Link>
              </div>
            </div>
            <div className="rightSide-us">
              <h1 className='us-text'>Contact Us</h1>
              <p className='us-link'>info@wostat.com</p>
            </div>
          </div>
        </div>
        </div>
      </div>
  )
};

export default Footer;