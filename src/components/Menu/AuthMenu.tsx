'use client'
import Link from "next/link";

const UnAuthMenu = () => {

    return (
        <div className={'md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center'}>
            <Link className={'mr-5 hover:text-red-400'} href={'/api/auth/logout'}>LogOut</Link>--
            <Link href={'/'}>home</Link>--
            <Link href={'http://localhost:3000/users'}>users</Link>--
            <Link href={'http://localhost:3000/recipes'}>recipes</Link>--
        </div>
    );
};

export default UnAuthMenu;