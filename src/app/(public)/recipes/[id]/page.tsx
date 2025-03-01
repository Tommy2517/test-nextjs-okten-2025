import AuthMenu from "@/components/Menu/AuthMenu";
import {FC} from "react";
import {ResponseModelDummyType} from "@/models/ResponseModelDummyType";
import {fetchRecipes} from "@/lib/api/fetchRecipes";
import {SearchParams} from "next/dist/server/request/search-params";
import RecipeDetails from "@/components/Recipes/RecipeDetails/RecipeDetails";
import {IRecipe} from "@/models/IRecipe";
import {fetchUsers} from "@/lib/api/fetchUsers";
import {IUser} from "@/models/IUser";

type Props = {
    params: Promise<{ id: string }>,
    searchParams: Promise<SearchParams>
}

const Page: FC<Props> = async ({params, searchParams}) => {
    const {page, search} = await searchParams
    const limit = 0
    const {id} = await params

    const getRecipes = async (page: string, search: string, limit: number, id: string) => {
        const {recipes}: ResponseModelDummyType = search
            ? await fetchRecipes({params: {limit, skip: (limit * (Number(page) || 1) - limit), search: search as string}})
            : page
                ? await fetchRecipes({params: {limit, skip: (limit * (Number(1) || 1) - limit)}})
                : await fetchRecipes({params: {search: id}})
        return recipes
    }

    const recipes = await getRecipes(page as string, search as string, limit, id)
    const recipe = recipes?.find(recipe => recipe.id === +id)

    const getUsers = async (search: string) => {
        const {users}: ResponseModelDummyType = search && await fetchUsers({params: {search: search}})
        return users
    }
    const users = await getUsers(recipe?.userId+'')
    return (
        <div>
            <AuthMenu/>
            recipeDetailsPage
            {recipes && users && <RecipeDetails
                recipe={recipe as IRecipe}
                user={users[0] as IUser}
            />}
        </div>
    );
};

export default Page;