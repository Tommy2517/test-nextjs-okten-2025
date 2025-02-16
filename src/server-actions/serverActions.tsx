'use server'
import {LoginData} from "@/models/LoginDataType";
import {login} from "@/utils/utils";


const loginAction = async (formData: FormData) => {
    const authData: LoginData = {
        username: formData.get('username') as string,
        password: formData.get('password') as string,
        expiresInMinutes: 1
    }

    // const userWithTokens = await loginAuth(authData);
    const userWithTokens = await login(authData);
    console.log(userWithTokens)
    // redirect('/auth/api');
};

export default loginAction;