'use server';
import { NextResponse } from 'next/server';

// import { posts } from '@/db/posts';

import path from 'path';
import fs from 'fs';

export async function GET(req: Request) {
    try {
        const filePath = path.join(process.cwd(), '/src/db/db.json');
        const posts = await fs.promises.readFile(filePath, 'utf8'); 

        return NextResponse.json(JSON.parse(posts));
    } catch (e) {
        return NextResponse.json({message: "error on the server post"});    
    }
}