import {getCookie} from "cookies-next";
import {cookies} from "next/headers";
import {redirect} from "next/navigation";
import {CustomSearchParamsType} from "@/models/CustomSearchParamsType";
import {paramsMaker} from "@/helpers/paramsMaker";

type ParamsType = {
    params: CustomSearchParamsType
}
export const fetchRecipes = async ({params}: ParamsType) => {
    const token = await getCookie('token', {cookies})

    const response = await fetch('http://localhost:3000/api/recipes',
        {
            headers: {
                'Cookie': `token=${token}`,
                'SearchParams': `${paramsMaker({params})}`,
            },
            next: {revalidate: 300}
        }
    )
    if (!response.ok) redirect('/')

    return response.json()
}