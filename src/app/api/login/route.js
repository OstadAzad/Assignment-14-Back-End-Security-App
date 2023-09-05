import { NextResponse } from "next/server";
import { SignJWT} from "jose";

export async function POST(req,res){
    const jsonBody = await req.json()
    let username = jsonBody["user"];
    let password = jsonBody["password"];

    //login condiiton
    if(username==="ostad" && password==="123"){

//create token
        const key = new TextEncoder().encode(process.env.JWT_KEY);
        const payLoad={username:username}
        let token = await new SignJWT(payLoad)
        .setProtectedHeader({alg:"HS256"})
        .setIssuedAt()
        .setIssuer("https://localhost:3000")
        .setExpirationTime('10h')
        .sign(key)
        return NextResponse.json({status: "Success", message:"Login Success",token:token}, {status:200})
    }
    else{
        return NextResponse.json({status: "fail", message: "Invalid User"}, {status:401})
    }

}