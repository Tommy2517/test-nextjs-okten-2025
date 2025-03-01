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
    const limit = 50;
    const {page, tag} = await searchParams
    const {recipes, total}: ResponseModelDummyType = await fetchRecipes({
        params: {
            limit,
            skip: (limit * (Number(page) || 1) - limit)
        }
    })
const filteredRecipes = recipes?.filter((recipe) => recipe.tags.some((recipeTag) => recipeTag === tag))
    return (
        <div>
            <AuthMenu/>
            recipesPage
            {filteredRecipes && <RecipesList
                recipes={filteredRecipes.filter((recipe) => recipe.tags.some(recipeTag => recipeTag === tag))}
                totalPages={Math.ceil(total / limit)}
                page={Number(page) || 1}/>}
        </div>
    );
};

export default Page;