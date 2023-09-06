'use client'

import { ArrowSmallRightIcon, XMarkIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { useState } from 'react';
import { Button } from './ui/button';

export default function Banner() {
    const [isVisible, setIsVisible] = useState(true);

    if (!isVisible) {
        return null;
    }

    return (
        <div className="bg-accent">
            <div className="max-w-screen-xl mx-auto px-4 py-3 flex justify-between text-white sm:items-center md:px-8">
                <div className="flex-1 justify-center flex items-start gap-x-4 sm:items-center">
                    <div className="flex px-4 rounded-full bg-accent-foreground items-center justify-center font-medium text-sm py-2">
                        News
                    </div>
                    <div className="font- text-sm ">
                        We just launched a new version of our library!&nbsp;
                        <Link href="/" className=" underline duration-150 hover:text-accent-foreground inline-flex items-center gap-x-1">
                            Learn more <ArrowSmallRightIcon className="w-4 h-4" />
                        </Link>
                    </div>
                </div>
                <Button 
                    variant={"ghost"}
                    onClick={() => setIsVisible(false)}
                >
                    <XMarkIcon className="w-5 h-5" />
                </Button>
            </div>
        </div>
    )
}