import {NextRequest, NextResponse} from "next/server";
import {LoginData} from "@/models/LoginDataType";
import {loginAuth} from "@/service/api.service";

export async function POST(req: NextRequest) {
    try {
        const loginData: LoginData = await req.json();

        const {data} = await loginAuth(loginData);

        return NextResponse.json(data);
    } catch (error) {
        console.error("Ошибка авторизации:", error);
        return NextResponse.json(
            { message: "Ошибка авторизации" },
            { status: 401 }
        );
    }
}
