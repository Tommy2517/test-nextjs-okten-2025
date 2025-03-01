import {NextRequest, NextResponse} from "next/server";
import {getCookie} from "cookies-next";
import {cookies} from "next/headers";

export async function middleware(req: NextRequest) {
    const res = NextResponse.next();
    const token = await getCookie('token',{cookies})
if (!token) NextResponse.redirect(new URL('/', req.url))
    // !req.nextUrl.pathname.startsWith('/login')
    res.headers.set('X-Auth-Status', token ? 'authenticated' : 'unauthenticated');
    return res;
}
