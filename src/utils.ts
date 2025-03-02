'use server'

import {getCookie, setCookie} from "cookies-next";
import {cookies} from "next/headers";
import {redirect} from "next/navigation";
import {IUserWithTokens} from "@/models/IUserWithTokens";


export const setAuthUser = async (user: IUserWithTokens) => {
    const  {accessToken, refreshToken, ...userWithoutTokens} = user
    await setCookie('authUser' ,JSON.stringify(userWithoutTokens), {cookies, maxAge: Number(process.env.TOKEN_EXPIRES_MIN) * 60 || 60})
}
export const setTokenInCookies = async (token: string | undefined) => {
    await setCookie('token', token, {cookies, maxAge: Number(process.env.TOKEN_EXPIRES_MIN) * 60 || 60});
    redirect('/')
}

export const getAuthToken = async () => {
    const token = await getCookie('token', {cookies});
    console.log('getAuthToken --- ', token)
    return token
}
export const getAuthUser = async () => {
    const authUser = await getCookie('authUser', {cookies});
    const parseAuthUser = authUser && JSON.parse(authUser);
    console.log('getAuthToken --- ', parseAuthUser)
    return parseAuthUser
}
