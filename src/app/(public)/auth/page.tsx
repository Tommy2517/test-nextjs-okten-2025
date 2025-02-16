import Form from "next/form";
import loginAction from "@/server-actions/serverActions";
// import {ResponseModelDummyType} from "@/models/ResponseModelDummyType";

const LoginPage = async () => {


    // const {users}:ResponseModelDummyType = await fetch('/auth/api')
    //     .then(res => res.json())
    return (
        <>
            {/*<div>{users?.map(user => <div key={user.id}> {user.email}</div>)}</div>*/}

            <Form action={loginAction} className={'flex flex-col w-32 gap-3 text-red-400'}>
                <input type="text" required={true} name={'username'}/>
                <input type="text" name={'password'}/>
                <button>send</button>
            </Form>
            <button>cookie</button>
        </>
    );
};
export default LoginPage