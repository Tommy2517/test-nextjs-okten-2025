import {FC} from "react";
import {IRecipe} from "@/models/IRecipe";

type Props = {
    recipe:IRecipe
}

const RecipeCard:FC<Props> = ({recipe}) => {
    return (
        <div className={'h-full flex items-center backdrop-blur-md bg-black/50 border-black border-2 p-4 rounded-lg'}>
            {recipe.name}
        </div>
    );
};

export default RecipeCard;