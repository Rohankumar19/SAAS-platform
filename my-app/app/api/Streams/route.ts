import { NextRequest } from "next/server";
import { z } from "zod";



export function POST(req: NextRequest){
    const data = await req.json();
    
}