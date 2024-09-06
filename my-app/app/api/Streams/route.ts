import { NextRequest } from "next/server";
import { z } from "zod";

const CreateStreamSchema = z.object()

export function POST(req: NextRequest){
    const data = await req.json();
    
}