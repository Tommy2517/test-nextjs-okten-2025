import axios, {AxiosResponse} from "axios";
import {LoginData} from "@/models/LoginDataType";
import {IUserWithTokens} from "@/models/IUserWithTokens";
import {ResponseModelDummyType} from "@/models/ResponseModelDummyType";

const axiosInstance = axios.create({
    baseURL: 'https://dummyjson.com/auth/',
    headers: {'Content-Type': 'application/json'},
});

export const loginAuth = async ({username, password, expiresInMinutes}: LoginData): Promise<AxiosResponse<IUserWithTokens>> => {
return await axiosInstance.post('login', {username, password, expiresInMinutes});
}
export const getUsers = async (token:string): Promise<AxiosResponse<ResponseModelDummyType>> => {
return await axiosInstance.get('users',{
        headers:{
            Authorization: `Bearer ${token}`
        }
    });
}
