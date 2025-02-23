import UsersList from "@/components/Users/UsersList/UsersList";
import AuthMenu from "@/components/Menu/AuthMenu";
import {getCookie} from "cookies-next";
import {cookies} from "next/headers";
import {IUser} from "@/models/IUser";
import {redirect} from "next/navigation";

const Page = async () => {
    const token = await getCookie('token', {cookies})
    if (!token) redirect('/');

    const response = await fetch('http://localhost:3000/api/users',{
        headers: {
            'Cookie': `token=${token}`,
            'Authorization' : 'tonek'
        },
        next:{revalidate:300}
    })
    const users:IUser[] = await response.json()
    return (
        <div>
            <AuthMenu/>
            usersPage
            <UsersList users={users}/>
        </div>
    );
};

export default Page;