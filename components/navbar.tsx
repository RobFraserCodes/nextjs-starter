'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { navigation } from '@/lib/navigation'
import { Button } from './ui/button'
import { Bars3Icon, XMarkIcon, Squares2X2Icon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import { siteDetails } from '@/lib/site-details'

export default function Navbar() {
    const [state, setState] = useState(false)
    return (
        <nav className="border-b w-5xl md:static md:text-sm md:border-none">
            <div className="items-center px-4 max-w-screen-xl mx-auto md:flex md:px-8">
                <div className="flex items-center justify-between py-3 md:py-5 md:block">
                    <a href="/">
                        {/* <Image
                            src="/images/logo.svg"
                            width={120}
                            height={50}
                            alt="Starter logo"
                        /> */}
                        <div className='flex items-center space-x-2'>
                        <Squares2X2Icon className="w-8 h-8 text-gray-900" />
                        <h3>{siteDetails.title}</h3>
                        </div>
                    </a>
                    <div className="md:hidden">
                        <Button className="text-gray-300 hover:text-gray-500 bg-primary hover:bg-primary-forground"
                            onClick={() => setState(!state)}
                        >
                            {
                                state ? <XMarkIcon className="w-6 h-6" /> : <Bars3Icon className="w-6 h-6" />
                            }
                        </Button>
                    </div>
                </div>
                <div className={`flex-1 pb-3 mt-8 md:block md:pb-0 md:mt-0 ${state ? 'block' : 'hidden'}`}>
                    <ul className="justify-end items-center space-y-6 md:flex md:space-x-6 md:space-y-0">
                        {
                            navigation.map((item, idx) => {
                                return (
                                    <li key={idx} className="text-gray-700 hover:text-primary">
                                        <Link href={item.path} className="block uppercase">
                                            {item.title}
                                        </Link>
                                    </li>
                                )
                            })
                        }
                        <span className='hidden w-px h-6 bg-gray-300 md:block'></span>
                        <div className='items-center gap-x-6 md:flex md:space-y-0 md:gap-x-2'>
                            
                            <Link href="/login">
                                <Button className='w-full mb-4 md:mb-0 text-white'>
                                    Log in
                                </Button>
                            </Link>

                            <Link href="/register">
                                <Button className="w-full" variant={"secondary"}>
                                    Sign up
                                </Button>
                            </Link>

                        </div>
                    </ul>
                </div>
            </div>
        </nav>
    )
    }
