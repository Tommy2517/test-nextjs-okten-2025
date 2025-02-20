import {deleteCookie} from 'cookies-next';
import {cookies} from "next/headers";
import {redirect} from "next/navigation";

export async function GET() {
    await deleteCookie('token', {cookies})
    redirect('/')
}
