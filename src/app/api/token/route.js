import { SignJWT,jwtVerify } from "jose";
import { NextResponse } from "next/server";
export async function GET(req,res){
//encode token process/create encode token
    const key = new TextEncoder().encode(process.env.JWT_KEY);
    const payLoad={email: "ostad@bd.com", user_id: "abc123"}
    let token = await new SignJWT(payLoad)
    .setProtectedHeader({alg:"HS256"})
    .setIssuedAt()
    .setIssuer("https://localhost:3000")
    .setExpirationTime('10h')
    .sign(key)

    return NextResponse.json({encodeToken:token})
}
//create decode token/decode token process
export async function POST(req,res){

    const jsonBody = await req.json();
    const token = jsonBody["encodetoken"];
    const key = new TextEncoder().encode(process.env.JWT_KEY);
   const decodeToken = await jwtVerify(token,key)

    return NextResponse.json(decodeToken)
}