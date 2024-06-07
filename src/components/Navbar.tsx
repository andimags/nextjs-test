"use client";

import classNames from "classnames";
import Link from "next/link";
import { usePathname } from "next/navigation";

function Navbar() {
    const pathname = usePathname();
    console.log(pathname);
    return (
        <nav className="shadow-sm p-4">
            <div className="flex text-zinc-400 gap-4 justify-end">
                <Link
                    href="/"
                    className={classNames({
                        "text-zinc-800 font-bold": pathname == "/",
                    })}>
                    Home
                </Link>
                <Link
                    href="/posts"
                    className={classNames({
                        "text-zinc-800 font-bold":
                            pathname?.startsWith("/posts"),
                    })}>
                    Posts
                </Link>
            </div>
        </nav>
    );
}

export default Navbar;
