import {FC} from "react";
import {IRecipe} from "@/models/IRecipe";
import Link from "next/link";
import {IUser} from "@/models/IUser";
import Image from "next/image";

type Props = {
    recipe: IRecipe
    user: IUser
}
const RecipeDetails: FC<Props> = ({recipe, user}) => {
    return (
        <div className={'flex justify-between border-2 backdrop-blur-sm border-black rounded-2xl p-10 '}>
            <div>
                name
                <div className={'backdrop-blur-md bg-black/50 border-black border-2 p-4 rounded-lg'}>{recipe.name}
                    {recipe.userId}</div>
                tags
                <ul className={'backdrop-blur-md bg-black/50 border-black border-2 p-4 rounded-lg'}>
                    {recipe.tags.map((tag, index) =>
                        <li key={index}><Link href={`/recipes/tag?tag=${tag}`}>{tag}</Link></li>
                    )}
                </ul>
                Author
                <div className={'backdrop-blur-md bg-black/50 border-black border-2 p-4 rounded-lg'}><Link href={'/users/' + user.id}>{user.username}</Link></div>
            </div>
            <div className={'flex items-center'}><Image src={recipe.image} alt={recipe.name} width={'250'} height={'250'}/></div>
        </div>
    );
};

export default RecipeDetails;