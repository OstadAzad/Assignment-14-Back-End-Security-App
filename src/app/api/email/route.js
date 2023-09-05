import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function GET(req,res){

    const {searchParams} = new URL(req.url)
    const toEmail = searchParams.get("email")
    //transporter process using nodemailer
    let transporter = nodemailer.createTransport({
        host: "mail.teamrabbil.com",
        port: 25,
        secure: false,
        auth:{
            user: "info@teamrabbil.com",
            pass: '~sR4[bhaC[Qs'},
        tls: {rejectUnauthorized: false}
    });

    let myEmail={
        from: "Testing email from NextJS Back End Application <info@teamrabbil.com>",
        to: toEmail,
        subject: "Testing email from NextJS Back End Application",
        text: "Test email body"};

    try{
        await transporter.sendMail(myEmail)
        return NextResponse.json({message:"success-mail sent"})
    }
    catch (e) {
        return NextResponse.json({message:"fail-mail not sent"})
    }
}