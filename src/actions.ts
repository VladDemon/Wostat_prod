'use server';

import { getIronSession } from "iron-session";
import { SessionData, defaultSession, sessionOptions } from "./lib";
import { cookies } from "next/headers";
import {redirect} from 'next/navigation';

export const getSession = async () => {
    const session = await getIronSession<SessionData>(cookies(), sessionOptions);

    if(!session.isLoggedIn) {
        session.isLoggedIn = defaultSession.isLoggedIn;
    }
    return session;
}

export const login = async (formData : FormData) => {
    const session = await getSession();
    const formLogin = formData.get('login') as string
    const formPassword = formData.get('password') as string
    if(formLogin !== process.env.Login || formPassword !== process.env.Password) {
        return {error: "Wrond Credentionals"}
    }
    session.username = process.env.Login;
    session.isLoggedIn = true;

    await session.save();
}

export const logout = async () => {
    const session = await getSession();
    session.destroy()
    redirect('/');
}