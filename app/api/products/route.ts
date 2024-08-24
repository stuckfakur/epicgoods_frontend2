import axios from "axios";
import {NextResponse} from "next/server";

export async function GET(){
    try{
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_HOST}/products/all`)
        return NextResponse.json(response.data)
    }catch (e : any){
        return NextResponse.json({error: e.message})
    }
}