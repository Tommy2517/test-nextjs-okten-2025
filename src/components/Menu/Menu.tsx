import Link from "next/link";

const Menu = () => {
    return (
        <div>
            <Link href={'/auth'}>Login</Link>
        </div>
    );
};

export default Menu;