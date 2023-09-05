import Link from "next/link";
import { Button } from "./ui/button";

export default function CTA() {
    return (
        <section className="py-28 relative bg-secondary">
            <div className="relative z-10 max-w-screen-xl mx-auto px-4 md:text-center md:px-8">
                <div className="max-w-xl md:mx-auto">
                    <p className="text-white text-3xl font-semibold sm:text-4xl">
                        Build the future with us
                    </p>
                    <p className="text-blue-100 mt-3">
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat non proident.
                    </p>
                </div>
                <div className="mt-4 text-white">
                <Link href="/register">
                    <Button variant={"outline"}>Get started</Button>
                </Link>
                </div>
            </div>
            <div className="absolute top-0 w-full h-full" style={{ background: "linear-gradient(268.24deg, rgba(59, 130, 246, 0.76) 50%, rgba(59, 130, 246, 0.545528) 80.61%, rgba(55, 48, 163, 0) 117.35%)" }}></div>
        </section>
    )
}