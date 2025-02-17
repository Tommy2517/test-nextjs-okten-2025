import {LoginData} from "@/models/LoginDataType";

export const login = async (authData:LoginData) => {
    const res = await fetch("http://localhost:3000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(authData),
    });
    return await res.json();
};