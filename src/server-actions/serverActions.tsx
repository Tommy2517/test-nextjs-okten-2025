'use server'
import {LoginData} from "@/models/LoginDataType";
import {IUserWithTokens} from "@/models/IUserWithTokens";
import {setTokenInCookies} from "@/utils";


export const loginAction = async (formData: FormData) => {
    const loginData: LoginData = {
        username: formData.get('username') as string,
        password: formData.get('password') as string,
        expiresInMins: Number(process.env.TOKEN_EXPIRES_MIN) || 60
    }
    const res = await fetch("http://localhost:3000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(loginData),
    });

    const userWithTokens:IUserWithTokens = await res.json();

    await setTokenInCookies(userWithTokens.accessToken)
};

