import UnAuthMenu from "@/components/Menu/UnAuthMenu";
import {headers} from "next/headers";
import AuthMenu from "@/components/Menu/AuthMenu";
import './page.css'

export default async function Home() {
    const headersList = await headers();
    const authStatus = headersList.get('X-Auth-Status');
    console.log(authStatus)

    // if (authStatus === 'authenticated') {
    //     return <div className={'bg'}>Welcome! You are login <AuthMenu/></div>;
    // } else {
    //     return <div>Please login. <UnAuthMenu/> </div>;
    // }
    return <div className={'bg h-max w-max'}>
hi
    </div>
}
