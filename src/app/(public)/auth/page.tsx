import Form from "next/form";
import {loginAction} from "@/server-actions/serverActions";

import './authStyles.css'
const LoginPage = async () => {



    return (
        <div className={'flex justify-center'}>
            <Form action={loginAction} className={'form-block'}>
                <input type="text" required={true} name={'username'}/>
                <input type="text" name={'password'}/>
                <button>Login</button>
            </Form>
        </div>
    );
};
export default LoginPage