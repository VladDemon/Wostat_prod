import React from 'react';

import style from './logForm.module.scss';

import { login } from '@/actions';

export default function LoginForm() {



  return (
    <div className={`${style.loginForm}`}>
        <form action={login}>
            <label htmlFor="" className={`${style.loginLabel}`}>
                <input type="text" name='login' placeholder='login' required className={`${style.loginInput} ${style.formInput}`}/>
                <input type="password" name='password' placeholder='pass' required className={`${style.passInput} ${style.formInput}`}/>
            </label>
            <button className={`${style.loginBtn} text-red-600`}>Login</button>
        </form>
    </div>
  )
}
