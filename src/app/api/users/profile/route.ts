import { getDataFromToken } from "@/helpers/getDataFromToken";
import { NextRequest, NextResponse } from "next/server";
import User from "@/models/userModels";
import { connect } from "@/dbConfig/dbConfig";

connect();

export async function GET(request:NextRequest){

    try {
        const userId = await getDataFromToken(request);
        const user = await User.findOne({_id: userId}).select("-password");
        if(!user){
            return NextResponse.json({error: "User not found"}, {status: 404});  // Not Found status code 404 means resource not found. 400 means Bad Request. 401 means Unauthorized. 403 means Forbidden. 404 means Not Found. 500 means Internal Server Error. 503 means Service Unavailable. 200 means OK. 201 means Created. 202 means Accepted. 204 means No Content. 206 means Partial Content. 304 means Not Modified. 307 means Temporary Redirect. 410 means Gone. 411 means Length Required. 412 means Precondition Failed. 413 means Payload Too Large. 414 means URI Too Long. 415 means Unsupported Media Type. 416 means Range Not Satisf
        }
        return NextResponse.json({
            message: "User found",
            data: user
        })
    } catch (error:any) {
        return NextResponse.json({error: error.message}, {status: 400});
    }

}