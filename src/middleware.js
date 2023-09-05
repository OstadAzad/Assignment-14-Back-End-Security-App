import { jwtVerify } from "jose";
import { NextResponse } from "next/server";

export async function middleware(req,res,next){

    if(req.nextUrl.pathname.startsWith('/api/profile')){

        
        try{
            //token pick from Header
           const reqHeaders = new Headers(req.headers);
           const token = reqHeaders.get("token")
           //token verify 
           const key = new TextEncoder().encode(process.env.JWT_KEY);
           const decodeString = await jwtVerify(token,key);

           //added request in Header
          const username = decodeString["payload"]["username"];
          reqHeaders.set('username',username);
          //next step with manupulated Header
          return NextResponse.next({
            request: {headers:reqHeaders}
          });
        }
        catch (e) {
   return NextResponse.json({status: "fail", message: "Unauthorized User"}, {status:401})
        }
    }
    }