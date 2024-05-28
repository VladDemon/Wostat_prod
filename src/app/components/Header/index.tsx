'use client';
import React, {useState} from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { IoCloseOutline } from "react-icons/io5";
import styles from './header.module.scss';

import { useSearchParams, usePathname } from 'next/navigation';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
    const search = usePathname();
  const isMain = search === '/';
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <header className={`header ${!isMain ? 'header-other' : ''}`}>
      <div className="container">
        <div className="header-nav">
          <Link href={"/"} className="logo">WOSTAT<span className='text-indigo-500'>.</span></Link>
          <nav className="nav">
            <div className="navigation">
              <ul className='nav-list'>
                <div className="list-links">
                  <li><a href="#!" className='nav-link'>About</a></li>
                  <li><a href="#!" className='nav-link'>Product</a></li>
                  <li><Link href={'/researches'} className='nav-link'>Researches</Link></li>
                </div>
                <button className='price-btn'>Price</button>
              </ul>
            </div>
          </nav>
          <button id='nav-btn' onClick={toggleMenu}>
            {isMain ?  <Image className='nav-img' src={"/images/main/navMenu.svg"} width={37} height={24.67} alt='nav'/> : 
            <Image src={'/images/header/black_menu.svg'}  width={37} height={24.67} alt='nav'/>}
          </button>
        </div>
        {menuOpen && (
          <div className={styles.menuOverlay}>
            <button className={styles.closeButton} onClick={toggleMenu}>
              <IoCloseOutline size={64} className={`${styles.close_btn}`}/>
            </button>
            <nav className={styles.navMenu}>
              <Link href="#about" className={styles.navLink}>About</Link>
              <Link href="#product" className={styles.navLink}>Product</Link>
              <Link href="/researches" className={styles.navLink}>Researches</Link>
              <Link href="#price" className={styles.navLink}>Price</Link>
            </nav>
          </div>
        )}
        <div className="header-content">
          <span className='content__collab'>Whoever owns the information owns the world</span>
          <div className='content__remote flex flex-row'> <span className='remote-text'>statistics and research that will give you an advantage</span> <button className='price-btn'>Price</button></div>
        </div>
      </div>
    </header>
  )
};



