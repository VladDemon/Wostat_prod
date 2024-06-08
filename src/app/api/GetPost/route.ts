'use server';
// import { posts } from '@/db/posts';
import { NextRequest, NextResponse } from 'next/server';

import fs from 'fs';
import path from 'path';

export async function POST (req : Request) {
  try {
    const dat = await req.json();
    const filePath = path.join(process.cwd(), '/src/db/db.json');
    const fileContent = await fs.promises.readFile(filePath, 'utf8');
    const posts = JSON.parse(fileContent);

    const post = posts[dat-1];

    if(post) {
      return NextResponse.json(post);
    }
    else {
      return NextResponse.json({error : "Post not founded"}, {status : 404});
    }
  } catch(e) {
    console.error(e);
    return NextResponse.json({error : "Error occures"}, {status  : 500});
  }

}