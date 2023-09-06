import { ArrowRightIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'

export default function Hero() {
    return (
        <section className="py-0 sm:py-24">
            <div className="max-w-screen-xl mx-auto md:px-8">
                <div className="items-center gap-x-16 sm:px-8 md:px-0 lg:flex">
                    <div className="flex-1 sm:hidden lg:block">
                        <Image 
                            src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" 
                            className="md:max-w-lg sm:rounded-lg" 
                            alt=""
                            width={774}
                            height={774}
                        />
                    </div>
                    <div className="max-w-xl px-4 space-y-3 mt-6 sm:px-0 md:mt-0 lg:max-w-2xl py-8 md:py-0">
                        <h3 className="text-primary font-semibold uppercase">
                            Build your SaaS solution
                        </h3>
                        <p className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                            A Starter Template that works for any SAAS business
                        </p>
                        <p className="mt-3 text-gray-600">
                            This is a short description of the product. Use this to describe the product in a few sentences. This is a short description of the product. Use this to describe the product in a few sentences.
                        </p>
                        <a href="#" className="inline-flex gap-x-1 items-center text-primary hover:text-primary-foreground duration-150 font-medium">
                            Learn more
                            <ArrowRightIcon className="w-4 h-4" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}