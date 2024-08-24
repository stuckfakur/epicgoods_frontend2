import axios from "axios";
import {NextResponse} from "next/server";

export async function POST(request: Request){
    try {
        const data = await request.json();
        const dataUrl = process.env.NEXT_PUBLIC_API_HOST || "localhost:5000"
        const response = await axios.post(dataUrl, data);
        return NextResponse.json(response.data);
    }catch (e: any){
        return NextResponse.json({error: e.message}, {status: 500});
    }
}