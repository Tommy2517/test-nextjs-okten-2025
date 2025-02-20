import {NextResponse} from "next/server";
import {getUsers} from "@/service/api.service";
import {getCookie} from "cookies-next";
import {cookies} from "next/headers";

export async function GET() {
    const token = await getCookie('token', {cookies})
    const users = await getUsers(token as string).then(({data}) => data.users)

    return NextResponse.json(users)
}