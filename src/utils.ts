'use server'

import {setCookie} from "cookies-next";
import {cookies} from "next/headers";
import {redirect} from "next/navigation";


export const setTokenInCookies = async (token:string)=>{
    await setCookie('token',token,{cookies,maxAge:300});
    redirect('/')
}

