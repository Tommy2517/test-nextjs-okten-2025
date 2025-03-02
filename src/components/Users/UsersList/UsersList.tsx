'use client'
import {IUser} from "@/models/IUser";
import {FC} from "react";
import Link from "next/link";
import {useSearchParams} from "next/navigation";
import SearchForm from "@/components/SearchForm/SearchForm";
import UserCard from "@/components/Users/UserCard/UserCard";

type Props = {
    users: IUser[]
    totalPages: number
    page: number
}

const UsersList: FC<Props> = ({users, totalPages, page}) => {
    const searchParams = useSearchParams()
    let paginationUrl = ''
    let userLinkUrl = ''
    if (searchParams.has('search')) {
        paginationUrl = '/users/search?search=' + searchParams.get('search') + '&page='
        userLinkUrl = '&search=' + searchParams.get('search')
    } else {
        paginationUrl = '/users?page='
    }
    console.log(paginationUrl, '--- users list')

    return (
        <div className={'border-2 backdrop-blur-sm border-black rounded-2xl px-10'}>
            <SearchForm url={'/users/search'}/>

            <div>
                {page > 1 && <Link href={paginationUrl + (page - 1)}>{'< Prev'}</Link>}
                <span>  {page}---{totalPages}  </span>
                {page < totalPages && <Link href={paginationUrl + (page + 1)}>{'Next >'}</Link>}
            </div>
            <div className={' flex flex-wrap -m-2'}>{users.map(user =>
                <div className={'p-2 lg:w-1/3 md:w-1/2 w-full'} key={user.id}><Link href={`/users/${user.id}?page=${page}${userLinkUrl}`}>
                    <UserCard user={user}/></Link>
                </div>)
            }</div>
        </div>
    );
};

export default UsersList;