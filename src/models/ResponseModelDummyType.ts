import {IUser} from "@/models/IUser";

export interface ResponseModelDummyType {
  users?: IUser[];
  total: number;
  skip: number;
  limit: number;
}