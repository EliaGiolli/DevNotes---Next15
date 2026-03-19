'use client';
import Link from "next/link";


function MainNavigation() {
    const navLinks = [
        { "id":1 ,"name": "favorites","href": "/favorites" },
        { "id":2,"name": "create notes","href": "/create" },
        { "id":3, "name": "profile","href": "/profile" },
    ];
  return (
    <nav className="px-4 hidden md:flex">
        <ul className="flex gap-x-8 px-4">
            {navLinks.map((navLink) => (
                <li key={navLink.id}>
                    <Link href={navLink.href} className="cursor-pointer capitalize hover:bg-violet-50 hover:text-violet-800 hover:rounded-md p-3 ">
                        {navLink.name}
                    </Link>
                </li>
            ))}
        </ul>
    </nav>
  )
}

export default MainNavigation