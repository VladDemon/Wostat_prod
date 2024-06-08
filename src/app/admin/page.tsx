// 'use client'
import React from 'react';
import { getSession } from '@/actions';

import dynamic from 'next/dynamic';

const LoginForm = dynamic(() => import('@/app/components/LoginForm/index'));
const AdminPanel = dynamic( () => import('@/app/components/AdminPanel/index') ); 


const Login = async () => {
  const session = await getSession();
  console.log(session.isLoggedIn)
  return (
    <div>
      {!session.isLoggedIn ? <LoginForm/> : <AdminPanel/>}
    </div>
  )
}

export default Login;

