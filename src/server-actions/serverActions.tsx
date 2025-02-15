'use server'
import {loginAuth} from "@/service/api.service";
import {LoginData} from "@/models/LoginDataType";
import {getCookies, setCookie} from "cookies-next";
import {NextRequest, NextResponse} from "next/server";
import {cookies} from "next/headers";

const loginAction = async (formData: FormData) => {
    const authData: LoginData = {
        username: formData.get('username') as string,
        password: formData.get('password') as string,
        expiresInMinutes: 1
    }
    const userWithTokens = await loginAuth(authData);
    console.log(userWithTokens)

    await setCookie('key', userWithTokens.accessToken, {cookies})

};

export const setCookies = async (req: NextRequest, res: NextResponse) => {
    await setCookie('AccessToken', true, {cookies, req, res})
}

export const getCokies = async ()=>{
    const q = await getCookies({cookies})
    console.log(q)
}

export default loginAction;