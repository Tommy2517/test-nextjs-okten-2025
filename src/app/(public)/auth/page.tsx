import Form from "next/form";
import {loginAction} from "@/server-actions/serverActions";
// import {ResponseModelDummyType} from "@/models/ResponseModelDummyType";

const LoginPage = async () => {



    return (
        <>

            <Form action={loginAction} className={'flex flex-col w-32 gap-3 text-red-400'}>
                <input type="text" required={true} name={'username'}/>
                <input type="text" name={'password'}/>
                <button>send</button>
            </Form>
        </>
    );
};
export default LoginPage