import { NextRequest } from "next/server";

export function POST(req: NextRequest){
    const data = await req.json();
    
}