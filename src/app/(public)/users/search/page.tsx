'use server'
import UsersList from "@/components/Users/UsersList/UsersList";
import AuthMenu from "@/components/Menu/AuthMenu";
import {FC} from "react";
import {ResponseModelDummyType} from "@/models/ResponseModelDummyType";
import {SearchParams} from "next/dist/server/request/search-params";
import {fetchUsers} from "@/lib/api/fetchUsers";

type Props = {
    searchParams: Promise<SearchParams>
}

const Page: FC<Props> = async ({searchParams}) => {
    const limit = 30;
    const {page, search} = await searchParams
    console.log(search,'---search')
    const {users, total}: ResponseModelDummyType = await fetchUsers({
        params: {
            limit,
            skip: (limit * (Number(page) || 1) - limit),
            search:search as string
        }
    })
    return (
        <div>
            <AuthMenu/>
            usersPage
            {users &&
                <UsersList users={users} totalPages={Math.ceil(total / limit)} page={Number(page) || 1}/>}
        </div>
    );
};

export default Page;