import { NextResponse } from "next/server";

import fs from 'fs';

import path from 'path';

export async function POST (req : Request) {
    try {
        const newPageContent = await req.json();

        const filePath = JSON.parse(newPageContent.filePath);
        const newFilePath = path.join("src", "app",filePath.slice(filePath.indexOf("app\\")+5).replace(/\//g, '\\')).replace(/["']/g, '')
        console.log(newFilePath);

        const newContent = JSON.parse(newPageContent.newContent);
        // console.log(newContent);
        fs.promises.writeFile(newFilePath, newContent, 'utf8');

        return NextResponse.json({"response" : "Hello"}, {status : 200});
    } catch (e) {
        return NextResponse.json({"error" : e}, {status : 500})
    }

}