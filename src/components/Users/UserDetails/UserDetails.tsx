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
        <div className={'flex justify-between border-2 backdrop-blur-sm border-black rounded-2xl p-10 '}>
            <div className={'backdrop-blur-md bg-black/50 border-black border-2 p-4 rounded-lg'}>
                info
                <hr/>
                <ul>
                    <li>firstName - {user.firstName}</li>
                    <li>lastName - {user.lastName}</li>
                    <li>age - {user.age}</li>
                    <li>email - {user.email}</li>
                    <li>phone - {user.phone}</li>
                    <li>role - {user.role}</li>
                    <li>company - {user.company.name}</li>
                </ul>
            </div>
            <div className={'backdrop-blur-md bg-black/50 border-black border-2 p-4 rounded-lg'}>
                reecipes
                <hr/>
                <ul>
                    {recipes.filter(recipe => recipe.userId === user.id).map(recipe =>
                        <li key={recipe.id}>
                            <Link href={`/recipes/${recipe.id}?page=1`}>{recipe.name}</Link>
                        </li>)}
                </ul>
            </div>
        </div>
    );
};

export default UserDetails;