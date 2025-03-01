'use server'

import {getCookie, setCookie} from "cookies-next";
import {cookies} from "next/headers";
import {redirect} from "next/navigation";


export const setTokenInCookies = async (token: string) => {
    await setCookie('token', token, {cookies, maxAge: Number(process.env.TOKEN_EXPIRES_MIN) * 60 || 60});
    redirect('/')
}

export const getAuthToken = async () => {
    const token = await getCookie('token', {cookies});
    console.log('getAuthToken --- ', token)
    return token
}