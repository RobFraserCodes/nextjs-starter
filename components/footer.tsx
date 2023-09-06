import { footerNavs } from "@/lib/navigation"
import Image from "next/image"
import Link from "next/link"
import { ArrowRightIcon } from "@heroicons/react/24/outline"
import { siteDetails } from "@/lib/site-details"

const currentYear = new Date().getFullYear()

export default function Footer() {

    return (
        <footer className="pt-10 bg-foreground">
            <div className="max-w-screen-xl mx-auto px-4 text-background :px-8">
                <div className="space-y-6 sm:max-w-md sm:mx-auto sm:text-center">
                    <Image 
                        alt=""
                        src=""
                        className="w-32 sm:mx-auto" 
                    />

                    <p>
                        Nulla auctor metus vitae lectus iaculis, vel euismod massa efficitur.
                    </p>
                    <div className="items-center gap-x-3 space-y-3 sm:flex sm:justify-center sm:space-y-0">
                        <Link href="/" className="block py-2 px-4 text-center text-white font-medium bg-primary duration-150 hover:bg-primary-foreground active:bg-secondary-foreground rounded-lg shadow-lg hover:shadow-none">
                            Get started
                        </Link>
                        <a href="/" className="flex items-center justify-center gap-x-2 py-2 px-4 text-gray-700 hover:text-gray-500 font-medium duration-150 active:bg-gray-100 border rounded-lg md:inline-flex">
                            Get access
                            <ArrowRightIcon className="w-4 h-4" />
                        </a>
                    </div>
                </div>
                <div className="mt-10 py-10 border-t items-center justify-between sm:flex">
                    <p>© {currentYear} {siteDetails.title}. All rights reserved.</p>
                    <ul className="flex flex-wrap items-center gap-4 mt-6 sm:text-sm sm:mt-0">
                        { footerNavs.map((item, idx) => (
                            <li key={idx}
                                className="text-gray-800 hover:text-gray-500 duration-150">
                                <Link  href={item.path}>
                                    {item.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </footer>
    )
}