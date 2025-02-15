'use server'
import {loginAuth} from "@/service/api.service";
import {LoginData} from "@/models/LoginDataType";

const loginAction = async (formData: FormData) => {
    const authData: LoginData = {
        username: formData.get('username') as string,
        password: formData.get('password') as string,
        expiresInMinutes: 1
    }
    const userWithTokens = await loginAuth(authData);
    console.log(userWithTokens)
};

export default loginAction;