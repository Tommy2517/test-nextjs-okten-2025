import {NextRequest, NextResponse} from "next/server";
import {getRecipes} from "@/service/api.service";
import {getCookie} from "cookies-next";

export async function GET(req: NextRequest) {
    try {
        const res = NextResponse.next()
        const params = req.headers.get('SearchParams')
        console.log(params, ' --- params in router')

        const token = await getCookie('token', {req, res});
        if (!token) return NextResponse.json(null)
        const data = await getRecipes(token as string, params as string)
            .then(({data}) => data)

        return NextResponse.json(data)
    } catch {
        return NextResponse.json(
            {message: "Ошибка при получении пользователей"},
            {status: 500}
        );
    }
}