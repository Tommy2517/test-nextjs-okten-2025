'use server'
import AuthMenu from "@/components/Menu/AuthMenu";
import {FC} from "react";
import {ResponseModelDummyType} from "@/models/ResponseModelDummyType";
import {SearchParams} from "next/dist/server/request/search-params";
import {fetchRecipes} from "@/lib/api/fetchRecipes";
import RecipesList from "@/components/Recipes/RecipesList/RecipesList";

type Props = {
    searchParams: Promise<SearchParams>
}

const Page: FC<Props> = async ({searchParams}) => {
    const limit = 10;
    const {page, search} = await searchParams
    const {recipes, total}: ResponseModelDummyType = await fetchRecipes({
        params: {
            limit,
            skip: (limit * (Number(page) || 1) - limit),
            search:search as string
        }
    })
    return (
        <div>
            <AuthMenu/>
            recipes search page
            {recipes &&
                <RecipesList recipes={recipes} totalPages={Math.ceil(total / limit)} page={Number(page) || 1}/>}
        </div>
    );
};

export default Page;