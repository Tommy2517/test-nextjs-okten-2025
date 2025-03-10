'use client'
import {FC} from "react";
import Link from "next/link";
import {useSearchParams} from "next/navigation";
import SearchForm from "@/components/SearchForm/SearchForm";
import {IRecipe} from "@/models/IRecipe";
import RecipeCard from "@/components/Recipes/RecipeCard/RecipeCard";

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
        <div className={'border-2 backdrop-blur-sm border-black rounded-2xl px-10'}>
            <SearchForm url={'/recipes/search'}/>

            <div>
                {page > 1 && <Link href={paginationUrl + (page - 1)}>{'< Prev'}</Link>}
                -------
                {page < totalPages && <Link href={paginationUrl + (page + 1)}>{'Next >'}</Link>}
                {page}---{totalPages}
            </div>
            <div>
            </div>

            <div className={' flex flex-wrap -m-2'}>{recipes.map(recipe =>
                <div className={'p-2 lg:w-1/3 md:w-1/2 w-full'} key={recipe.id}><Link
                    href={`/recipes/${recipe.id}?page=${page}${recipeLinkUrl}`}> <RecipeCard recipe={recipe}/> </Link>
                </div>)}
            </div>
        </div>
    );
};

export default RecipesList;