import axios, {AxiosResponse} from "axios";
import {LoginData} from "@/models/LoginDataType";
import {IUserWithTokens} from "@/models/IUserWithTokens";
import {ResponseModelDummyType} from "@/models/ResponseModelDummyType";
import axiosInstance from "@/service/axios.config";

// const axiosInstance = axios.create({
//     baseURL: 'https://dummyjson.com/auth/',
//     headers: {'Content-Type': 'application/json'},
// });

export const loginAuth = async (loginData: LoginData): Promise<AxiosResponse<IUserWithTokens>> => {
return await axiosInstance.post('login', loginData);
}
export const getUsers = async (token: string, params: string): Promise<AxiosResponse<ResponseModelDummyType>> => {
    return await axiosInstance.get(`users` + params, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
}
export const getRecipes = async (token: string, params: string): Promise<AxiosResponse<ResponseModelDummyType>> => {
    return await axiosInstance.get(`recipes` + params, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
}
export const getUser = async (token:string, id:string): Promise<AxiosResponse<ResponseModelDummyType>> => {
return await axiosInstance.get(`users/${id}`,{
        headers:{
            Authorization: `Bearer ${token}`
        }
    });
}