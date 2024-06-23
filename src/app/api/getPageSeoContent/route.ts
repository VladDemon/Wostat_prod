import { NextResponse } from "next/server";

import fs from 'fs';
import path from 'path';

export async function POST (req : Request) {
    const page = await req.json();
    const filePath = await path.join(process.cwd(), 'src', 'app' , `${page === 'main' ? 'components' : `${page === 'researches' ? 'components/Researches/Posts' : ''}`}` ,
            `${page === 'main' ? 'Home_Main' : page ===  'vacancies' ? 'vacancies' : ''}`, `${page === 'main' || page === 'researches' ? 'index.tsx' : 'page.tsx'}`)
    const readPage = await fs.promises.readFile(filePath, 'utf-8');
    
    return NextResponse.json({ readPage : JSON.stringify(readPage), filePath : JSON.stringify(filePath) }, {status : 200});
}


