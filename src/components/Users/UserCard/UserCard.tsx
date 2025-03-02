import {FC} from "react";
import {IUser} from "@/models/IUser";

type Props = {
    user:IUser
}

const UserCard:FC<Props> = ({user}) => {
    return (
            <div className={'h-full flex items-center backdrop-blur-md bg-black/50 border-black border-2 p-4 rounded-lg'}>
                <div>
                    <div>{user.firstName}</div>
                    <div>{user.age}</div>
                    <div>{user.company.name}</div>
                </div>
            </div>
    );
};

export default UserCard;