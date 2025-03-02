import UnAuthMenu from "@/components/Menu/UnAuthMenu";
import {headers} from "next/headers";
import AuthMenu from "@/components/Menu/AuthMenu";

export default async function Home() {
    const headersList = await headers();
    const authStatus = headersList.get('X-Auth-Status');

    if (authStatus === 'authenticated') {
        return <div><AuthMenu/></div>;
    } else {
        return <div>Please login. <UnAuthMenu/></div>;
    }

}
