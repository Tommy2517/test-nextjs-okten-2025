'use client'
import {IUser} from "@/models/IUser";
import {FC} from "react";
import Link from "next/link";
import {useSearchParams} from "next/navigation";
import SearchForm from "@/components/SearchForm/SearchForm";
import {IRecipe} from "@/models/IRecipe";

type Props = {
    recipes: IRecipe[]
    totalPages: number
    page: number
}

const RecipesList: FC<Props> = ({recipes, totalPages, page}) => {
    const searchParams = useSearchParams()
    let paginationUrl = ''
    let recipeLinkUrl = ''
    if (searchParams.has('search')) {
        paginationUrl = '/recipes/search?search=' + searchParams.get('search') + '&page='
        recipeLinkUrl = '&search=' + searchParams.get('search')
    } else {
        paginationUrl = '/recipes?page='
    }
    return (
        <div>
            <SearchForm url={'/recipes/search'}/>

            <div>
                {page > 1 && <Link href={paginationUrl + (page - 1)}>Prev</Link>}
                -------
                {page < totalPages && <Link href={paginationUrl + (page + 1)}>Next</Link>}
                {page}---{totalPages}
            </div>
            <div>
            </div>
            {recipes.map(recipe => <div key={recipe.id}><Link
                href={`/recipes/${recipe.id}?page=${page}${recipeLinkUrl}`}>{recipe.name}</Link>
            </div>)}
        </div>
    );
};

export default RecipesList;