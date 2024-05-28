'use server';
import { posts } from '@/db/posts';
import { NextRequest, NextResponse } from 'next/server';


export async function POST (req : Request) {
  const dat = await req.json();
  console.log(req);
  try {
    return NextResponse.json(posts[dat - 1]);
  } catch (e) {
    return NextResponse.json("Error occurred");
  }

}