import AuthMenu from "@/components/Menu/AuthMenu";
import {IUser} from "@/models/IUser";
import UserDetails from "@/components/Users/UserDetails/UserDetails";
import {FC} from "react";
import {ResponseModelDummyType} from "@/models/ResponseModelDummyType";
import {fetchUsers} from "@/lib/api/fetchUsers";
import {SearchParams} from "next/dist/server/request/search-params";
import {fetchRecipes} from "@/lib/api/fetchRecipes";


type Props = {
    params: Promise<{ id: string }>,
    searchParams: Promise<SearchParams>
}

const Page: FC<Props> = async ({params, searchParams}) => {
    const {page, search} = await searchParams
    const limit = 30
    const {id} = await params

    const getUsers = async (page: string, search: string, limit: number, id: string) => {
        const {users}: ResponseModelDummyType = search
            ? await fetchUsers({params: {limit, skip: (limit * (Number(page) || 1) - limit), search: search as string}})
            : page
                ? await fetchUsers({params: {limit, skip: (limit * (Number(page) || 1) - limit)}})
                : await fetchUsers({params: {search: id}})
        return users
    }
    const {recipes}: ResponseModelDummyType = await fetchRecipes({
        params: {
            limit:50,
            skip: (0)
        }
    })
    const users = await getUsers(page as string, search as string, limit, id)
    // const recipes = await getRecipes(id)
    return (
        <div>
            <AuthMenu/>
            usersPage
            {users && recipes && <UserDetails
                user={users.find(user => user.id === +id) as IUser}
                recipes={recipes}
            />}
        </div>
    );
};

export default Page;