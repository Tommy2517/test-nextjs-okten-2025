'use client'
import {IUser} from "@/models/IUser";
import {FC} from "react";
import Link from "next/link";
import {useSearchParams} from "next/navigation";
import SearchForm from "@/components/SearchForm/SearchForm";

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
        paginationUrl = '/users/search?search=' + searchParams.get('search')+'&page='
        userLinkUrl = '&search=' + searchParams.get('search')
    }
    else {
        paginationUrl = '/users?page='
    }
    console.log(paginationUrl ,'--- users list')

    return (
        <div>
            <SearchForm url={'/users/search'}/>

            <div>
                {page > 1 && <Link href={paginationUrl + (page-1)}>Prev</Link>}
                -------
                {page < totalPages && <Link href={paginationUrl + (page+1)}>Next</Link>}
                {page}---{totalPages}
            </div>
            <div>
            </div>
            {users.map(user => <div key={user.id}><Link href={`/users/${user.id}?page=${page}${userLinkUrl}`}>{user.username}</Link>
            </div>)}
        </div>
    );
};

export default UsersList;