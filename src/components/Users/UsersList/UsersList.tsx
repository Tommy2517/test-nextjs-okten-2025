import {IUser} from "@/models/IUser";
import {FC} from "react";

type Props = {
    users:IUser[]
}

const UsersList:FC<Props> = ({users}) => {

    return (
        <div>
            { users.map(user => <div key={user.id}> {user.username}</div>)}
        </div>
    );
};

export default UsersList;