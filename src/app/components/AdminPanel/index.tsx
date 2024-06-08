import React from 'react';

import { logout } from '@/actions';
import { getSession } from '@/actions';

import style from './adminPanel.module.scss';

import Link from 'next/link';

import { MdPostAdd } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";

export default async function AdminPanel() {
  const session = await getSession();
  return (
    <div  className={`${style.adminPanel}`}>
      <div className={`${style.adminPanelHeader}`}>
        <form action={logout} className={`${style.adminForm}`}>
          <h1 className={`text-red-500 uppercase ${style.adminFormTopText}`}>{session?.username} <span className='lowercase text-blue-700'>you have successfully logged in system</span></h1>
          <button className={`text-red-700 ${style.adminBtn} uppercase`}>logout</button>
        </form>
      </div>
      <div className={`${style.adminPanelMenu}`}>
        <div className={`${style.addPost} ${style.menuItem}`}>
            <form action="">
              <label>
              </label>
              <Link href={`/admin/AddPost`} className={`${style.addPostLink} `}><MdPostAdd size={100}/></Link>
            </form>
        </div>
        <div className={`${style.editConntent} ${style.menuItem}`}>
            <form action="">
              <label htmlFor="">
              </label>
              <Link href={'/admin/EditSeo'} className={`${style.editContentLink} `}><FaRegEdit size={90}/></Link>
            </form>
        </div>
      </div>

    </div>
)}
