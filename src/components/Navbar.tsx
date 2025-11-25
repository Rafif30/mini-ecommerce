'use client'
import Image from "next/image"
import { Menu } from 'lucide-react';
import { prefixBasePath } from "@/src/utils";

export default function Navbar() {
    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    }
    return (
        <header id="ecommerce_header" className='fixed top-0 z-50 w-full bg-neutral-100 backdrop-blur supports-[backdrop-filter]:bg-neutral-100/60'>
            <nav className="mx-auto max-w-7xl px-6 lg:px-8 py-4">
                <div className="flex items-center justify-between">
                    <Image width={84} height={84} alt="Logo Company" src={prefixBasePath('/Company_Logo.png')} />
                    <div className="hidden md:flex items-center gap-8">
                        <button
                            onClick={() => scrollToSection("home")}
                            className="text-sm hover-elevate px-3 py-2 rounded-md transition-colors hover:cursor-pointer hover:bg-neutral-100/60 transition-colors hover:shadow-xl"
                            data-testid="link-projects"
                        >
                            Home
                        </button>
                        <button
                            onClick={() => scrollToSection("Products")}
                            className="text-sm hover-elevate px-3 py-2 rounded-md transition-colors hover:cursor-pointer hover:bg-neutral-100/60 transition-colors hover:shadow-xl"
                            data-testid="link-projects"
                        >
                            Products
                        </button>
                        <button
                            onClick={() => scrollToSection("About")}
                            className="text-sm hover-elevate px-3 py-2 rounded-md transition-colors hover:cursor-pointer hover:bg-neutral-100/60 transition-colors hover:shadow-xl"
                            data-testid="link-projects"
                        >
                            About
                        </button>
                    </div>
                    <button className="hidden md:block py-2 px-4 text-neutral-50 bg-primary-500 rounded-md">
                        Shop
                    </button>
                    <button className="md:hidden p-2">
                        <Menu className="h-6 w-6 text-neutral-900" />
                    </button>
                </div>
            </nav>
        </header>
    )
}