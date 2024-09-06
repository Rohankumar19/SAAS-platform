import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const CreateStreamSchema = z.object({
    creatorId: z.string(),
    url: z.string()
})

export function POST(req: NextRequest){
    try {
        const data = await req.json();
    }catch(e){
        return NextResponse.json({
            
        })
    }
}