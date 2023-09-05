import { NextResponse } from "next/server";
import {headers} from "next/headers";

//database check..//database query..//business logic...
export async function GET(req,res){
    const head = headers();
    let username = head.get("username")

  return  NextResponse.json({message:username})
}