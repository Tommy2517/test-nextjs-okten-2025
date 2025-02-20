'use server'
import {LoginData} from "@/models/LoginDataType";
import {IUserWithTokens} from "@/models/IUserWithTokens";
import {setTokenInCookies} from "@/utils";


export const loginAction = async (formData: FormData) => {
    const authData: LoginData = {
        username: formData.get('username') as string,
        password: formData.get('password') as string,
        expiresInMinutes: 1
    }
    const res = await fetch("http://localhost:3000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(authData),
    });

    const userWithTokens:IUserWithTokens = await res.json();

    await setTokenInCookies(userWithTokens.accessToken)
};

