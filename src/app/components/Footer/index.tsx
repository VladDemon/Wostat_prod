import React from 'react';

import Link from 'next/link';

function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-content__top">
            <div className="footer-content__leftSide">
              <h1 className='footer-logo'><p>WOSTAT <span className='footer-point'>.</span></p></h1>
              <div className='footer__under-text'>Whoever owns the information owns the world.</div>
            </div>
            <div className="footer-content__middleSide">
              <h1><p>Stay up to date with the news</p></h1>
              <label className='middleSide-label'>
                <input type="text" placeholder='Email'/>
                <div className="middleSide-label__btn">
                  <button className='middleSide-btn'><p>Subscribe</p></button>    
                </div>
        
              </label>
            </div>
          </div>
          <div className="footer-content__rightSide">
            <div className="rightSide-contact">
              <div className="contact-text"><h1><p>Company</p></h1></div>
              <div className="contact-companys">
                <a href="" className='footer__content-text'><p>About</p></a>
                <a href=""className='footer__content-text' ><p>Price</p></a>
                <Link href={"/researches"} className='footer__content-text' ><p>Research</p></Link>
                <Link href="/vacancies" className='footer__content-text' ><p>Job</p></Link>
              </div>
            </div>
            <div className="rightSide-us">
              <h1 className='us-text'><p>Contact Us</p></h1>
              <h1 className='us-link'><p>info@wostat.com</p></h1>
            </div>
          </div>
        </div>
        </div>
      </div>
  )
};

export default Footer;