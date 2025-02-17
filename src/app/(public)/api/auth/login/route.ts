import { NextRequest, NextResponse } from "next/server";
import axios from "axios";
import { LoginData } from "@/models/LoginDataType";
import { IUserWithTokens } from "@/models/IUserWithTokens";

export async function POST(req: NextRequest) {
    try {
        const { username, password, expiresInMinutes }: LoginData = await req.json();

        // Отправляем запрос на dummyjson
        const { data }: { data: IUserWithTokens } = await axios.post(
            "https://dummyjson.com/auth/login",
            { username, password, expiresInMinutes }
        );

        // Создаем ответ
        const response = NextResponse.json({ user: data });

        // Устанавливаем куки через NextResponse (работает в app-router)
        response.cookies.set({
            name: "token",
            value: data.accessToken, // У dummyjson `data.token`, но у тебя `data.accessToken`
            // httpOnly: true,
            // secure: process.env.NODE_ENV === "production",
            path: "/",
            maxAge: 60 * 60 * 24, // 1 день
        });
        return response;
    } catch (error) {
        console.error("Ошибка авторизации:", error);
        return NextResponse.json(
            { message: "Ошибка авторизации" },
            { status: 401 }
        );
    }
}
