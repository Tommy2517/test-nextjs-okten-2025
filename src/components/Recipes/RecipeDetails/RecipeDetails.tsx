import {FC} from "react";
import {IRecipe} from "@/models/IRecipe";
import Link from "next/link";
import {IUser} from "@/models/IUser";

type Props = {
    recipe: IRecipe
    user:IUser
}
const RecipeDetails: FC<Props> = ({recipe, user}) => {
    return (
        <div>
            {recipe.name}
            {recipe.userId}
            <ul>
                {recipe.tags.map((tag, index) =>
                    <li key={index}><Link href={`/recipes/tag?tag=${tag}`}>{tag}</Link></li>
                )}
            </ul>
            <div> Author -- <Link href={'/users/'+user.id}>{user.username}</Link></div>
        </div>
    );
};

export default RecipeDetails;