import {NextRequest, NextResponse} from "next/server";
import {isDefaultCookiesExisted, setDefaultCookies} from "@/utils";

export async function middleware(request: NextRequest) {
    const response = NextResponse.next();


    const isAllDefaultCookiesAvailable = await isDefaultCookiesExisted()

    if (!isAllDefaultCookiesAvailable) {
        await setDefaultCookies({req: request, res: response})
    }
    // console.log(response.headers.get("Set-Cookie"));

    return response;
}

// Виконувати middleware тільки для певного шляху
export const config = {
    // matcher: "*", // або '/*' якщо для всіх сторінок
};