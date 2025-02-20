import UnAuthMenu from "@/components/Menu/UnAuthMenu";
import {headers} from "next/headers";
import AuthMenu from "@/components/Menu/AuthMenu";

export default async function Home() {
    const headersList = await headers();
    const authStatus = headersList.get('X-Auth-Status');
    console.log(authStatus)
  // return (
  //   <div>
  //       main page
  //     <UnAuthMenu/>
  //
  //   </div>
  // );
    if (authStatus === 'authenticated') {
        return <div>Добро пожаловать, вы вошли в систему! <AuthMenu/></div>;
    } else {
        return <div>Пожалуйста, войдите в систему. <UnAuthMenu/> </div>;
    }
}
