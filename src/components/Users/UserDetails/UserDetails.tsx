import {IUser} from "@/models/IUser";
import {FC} from "react";
import {IRecipe} from "@/models/IRecipe";
import Link from "next/link";

type Props = {
    user: IUser
    recipes: IRecipe[]
}
const UserDetails: FC<Props> = ({user, recipes}) => {
    return (
        <div>
            {user.username}
            {user.email}
            <ul>
                    {recipes.filter(recipe => recipe.userId === user.id).map(recipe => <li key={recipe.id}>
                        <Link href={`/recipes/${recipe.id}?page=1`}>{recipe.name}</Link>
                    </li>)}
            </ul>
        </div>
    );
};

export default UserDetails;