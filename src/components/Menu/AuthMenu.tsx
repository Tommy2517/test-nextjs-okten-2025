'use client'
import Link from "next/link";

const UnAuthMenu = () => {
    return (
        <div>
            <Link href={'/api/auth/logout'}>LogOut</Link>
            <Link href={'/'}>home</Link>
            <Link href={'http://localhost:3000/users'}>users</Link>
        </div>
    );
};

export default UnAuthMenu;