import { footerNavs } from "@/lib/navigation"
import Image from "next/image"
import Link from "next/link"
import { ArrowRightIcon, Squares2X2Icon } from "@heroicons/react/24/outline"
import { siteDetails } from "@/lib/site-details"
import { Button } from "./ui/button"

const currentYear = new Date().getFullYear()

export default function Footer() {

    return (
        <footer className="pt-8 bg-foreground">
            <div className="max-w-screen-xl mx-auto px-4 text-background :px-8">
                <div className="space-y-6 sm:max-w-md sm:mx-auto sm:text-center">
                    <Image 
                        alt=""
                        src=""
                        className="w-32 sm:mx-auto" 
                    />
                    <Squares2X2Icon className="mx-auto h-12 w-12 text-primary" aria-hidden="true" />
                    <h1>{siteDetails.title}</h1>
                    <p>
                        A web development library for building accessible, fast, and beautiful user interfaces.
                    </p>
                    <div className="items-center gap-x-3 space-y-3 sm:flex sm:justify-center sm:space-y-0 space-x-4">
                        <Link href="/">
                            <Button className="text-white">Get started</Button>
                        </Link>
                        <Link href="/">
                            <Button variant={"outline"}>Documentation <ArrowRightIcon className="w-4 h-4 ml-2" />
                            </Button>
                        </Link>
                    </div>
                </div>
                <div className="flex py-8 mt-8 border-t border-white/10 items-center justify-between sm:flex text-sm font-thin">
                    <p>© {currentYear} {siteDetails.title}. Built by <Link href="http://www.robfraser.dev">RobFraser.dev</Link> and open-sourced on <Link href="">GitHub</Link>.</p>
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