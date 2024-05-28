'use server';
import { NextResponse } from 'next/server';

import { posts } from '@/db/posts';



export async function GET(req: Request) {
    try {
        return NextResponse.json(posts);
    } catch (e) {
        return NextResponse.json({message: "error on the server post"});    
    }
}