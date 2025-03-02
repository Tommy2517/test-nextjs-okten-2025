'use client'
import Link from "next/link";

const UnAuthMenu = () => {
    return (
        <div className={'header-block'}>
            <Link href={'/auth'}>Login</Link>
        </div>
    );
};

export default UnAuthMenu;