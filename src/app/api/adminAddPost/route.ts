'use server';
import { NextRequest, NextResponse } from "next/server";
import path from "path";


import fs from 'fs';

import {post} from '@/utils/types'

export async function POST (req) {
    try  {
        const formData = await req.formData();
        const title = await formData.get('title');
        const category = await formData.get('category');
        const fullSummary = await formData.get('contentText');
        const imageFile = await formData.get('file');
        const summary = await formData.get("summary");

        if (!imageFile || !title || !category || !fullSummary) {
            return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
        }
        const arrayBuffer = await imageFile.arrayBuffer();
        const buffer = Buffer.from(arrayBuffer);
        const filePath = path.join(process.cwd(), 'public/images/posts_img', imageFile.name);
        await fs.promises.writeFile(filePath, buffer);

        const dateCommon = new Date();
        const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
        const date = (dateCommon.toLocaleDateString('en-US', options)).toString();

        const postsFilePath  = path.join(process.cwd(), '/src/db/db.json');
        const postsFileContent = await fs.promises.readFile(postsFilePath, 'utf8');
        const posts = JSON.parse(postsFileContent);

        const post : post= {
            title : title,
            id : posts.length + 1,
            fullTitle: title,
            fullSummary : fullSummary,
            summary : summary,
            image : `/images/posts_img/${imageFile.name}`,
            category : category,
            date : date,
        } 

        posts.push(post);

        const updatePostsFileContent = JSON.stringify(posts, null, 2);
        await fs.promises.writeFile(postsFilePath, updatePostsFileContent);

        return NextResponse.json("yes");
    } catch(e) {
        return NextResponse.json({e: "Internal Server Error"}, {status : 500});
    }
}