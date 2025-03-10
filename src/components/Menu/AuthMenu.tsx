'use client'
import Link from "next/link";
import './menuStyles.css'
import Image from "next/image";
import {getCookie} from "cookies-next";

const AuthMenu= () => {
    const authUser = getCookie('authUser')
    // const user = authUser && JSON.parse( authUser)
    const user = authUser && typeof authUser === 'string' ? JSON.parse(authUser) : null;
    return (
        <div className={'header-block'}>
            <Image src={user.image} width={'50'} height={'50'} alt={user.username}/>
            <div className={'nav-block'}>
                <Link className={'link'} href={'/'}>home</Link>
                <Link className={'link'} href={'/users'}>users</Link>
                <Link className={'link'} href={'/recipes'}>recipes</Link>
            </div>
            <Link className={''} href={'/api/auth/logout'}>LogOut</Link>
        </div>
    );
};

export default AuthMenu;