import Form from "next/form";
import loginAction, {getCokies} from "@/server-actions/serverActions";

const LoginPage = async () => {
    return (
        <>
            <Form action={loginAction} className={'flex flex-col w-32 gap-3 text-red-400'}>
                <input type="text" required={true} name={'username'}/>
                <input type="text" name={'password'}/>
                <button>send</button>
            </Form>
            <button onClick={getCokies}>cookie</button>
        </>
    );
};
export default LoginPage