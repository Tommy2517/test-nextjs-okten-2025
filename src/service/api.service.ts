import axios from "axios";
import {LoginData} from "@/models/LoginDataType";
import {IUserWithTokens} from "@/models/IUserWithTokens";

const axiosInstance = axios.create({
    baseURL: 'https://dummyjson.com/auth/',
    headers: {'Content-Type': 'application/json'},
});

export const loginAuth = async ({username, password, expiresInMinutes}: LoginData): Promise<IUserWithTokens> => {
return await axiosInstance.post('login', {username, password, expiresInMinutes});
}