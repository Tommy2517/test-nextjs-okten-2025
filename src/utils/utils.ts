import {LoginData} from "@/models/LoginDataType";

export const login = async (authData:LoginData) => {
    const res = await fetch("http://localhost:3000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(authData),
        credentials: "include",
    });

    const data = await res.json();
    // console.log(data);
    return data
};