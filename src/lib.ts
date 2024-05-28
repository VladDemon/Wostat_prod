import { SessionOptions } from "iron-session";

export interface SessionData {
    userId?: string,
    username? : string,
}

export const sessionOptions : SessionOptions = {
    password : process.env.AUTH_SECRET!,
    cookieName : "wostat-session",
    cookieOptions : {
        httpOnly: true,
        secure : process.env.NODE_ENV === "production",
    }
}