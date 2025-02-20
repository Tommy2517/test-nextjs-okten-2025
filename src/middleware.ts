import {NextRequest, NextResponse} from "next/server";

export async function middleware(request: NextRequest) {
    const response = NextResponse.next();
    const token = request.cookies.get('token')?.value;
    let isValid = false
    if (token) {
        isValid = true
    }
    response.headers.set('X-Auth-Status', isValid ? 'authenticated' : 'unauthenticated');

    request.headers.set('Authorization', `Bearer ${token}`);
    return response;
}