'use client'

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { siteDetails } from '@/lib/site-details';
import { ArrowUturnLeftIcon } from '@heroicons/react/24/solid';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, FormProvider } from 'react-hook-form';
import * as z from 'zod';
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';

const registrationSchema = z.object({
    firstName: z.string().min(1, 'A first name is required'),
    lastName: z.string().min(1, 'A last name is required'),
    username: z.string().min(1, 'A username is required'),
    email: z.string().email('Invalid email address'),
    password: z.string().min(8, 'Password should be at least 8 characters'),
    marketing_accept: z.boolean(),
});

export default function UserRegisterPage() {
  const form = useForm<z.infer<typeof registrationSchema>>({
    resolver: zodResolver(registrationSchema),
    defaultValues: {
        firstName: '',
        lastName: '',
        username: '',
        email: '',
        password: '',
        marketing_accept: false,
    },
  });

  function onSubmit(values: z.infer<typeof registrationSchema>) {
    console.log("Submitted")
    console.log(values);
  }
    
  return (
    <section className="">
    <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
        <div className="relative flex h-32 items-end bg-primary lg:col-span-5 lg:h-full xl:col-span-6">
        
            <div className="absolute inset-0 h-full w-full">
            {/* <Image
                alt=""
                src=""
                className="absolute inset-0 h-full w-full object-cover"
                width={870}
                height={1110}
                priority
            /> */}
            
            <div
                className="absolute inset-0 bg-gradient-to-t from-primary to-primary-foreground"
                aria-hidden="true"
            />
            </div>

        {/* Return to Home */}
        <div className="absolute top-8 left-8 text-white">
            <Link className="block" href="/">
                    <span className="sr-only">Home</span>
                    <ArrowUturnLeftIcon className="h-8 w-8 text-gray-100" />
            </Link>
        </div>

        <div className="hidden lg:relative lg:block lg:p-12">

            {/* Tagline */}
            <div className=''>

            <h2 className="mt-6 text-2xl font-bold text-white sm:text-3xl md:text-4xl">
            Welcome to {siteDetails.title} 👍
            </h2>

            <p className="mt-4 leading-relaxed text-white/90">
            {siteDetails.description}
            </p>

            </div>
        </div>
        </div>

        {/* Mobile View */}
        <main
        className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6"
        >
        <div className="max-w-xl lg:max-w-3xl">
            <div className=''>
            {/* Registration Form */}
            <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
            <FormProvider {...form}>
                {/* First & Last Names */}
                <div className='flex space-x-4 my-4'>
                    <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field, formState }) => (
                        <FormItem>
                        <FormLabel htmlFor="firstName">First Name</FormLabel>
                        <Input
                            type="text"
                            id="firstName"
                            placeholder="John&apos;s"
                            {...field}
                        />
                        {formState.errors.username && (
                            <FormMessage />
                        )}
                        </FormItem>
                    )}
                    />
                    <FormField
                    control={form.control}
                    name="lastName"
                    render={({ field, formState }) => (
                        <FormItem>
                        <FormLabel htmlFor="lastName">Last Name</FormLabel>
                        <Input
                            type="text"
                            id="lastName"
                            placeholder="Movie DB"
                            {...field}
                        />
                        {formState.errors.username && (
                            <FormMessage />
                        )}
                        </FormItem>
                    )}
                    />
                </div>
                
                {/* Username */}
                <div className='mb-4'>
                    <FormField
                    control={form.control}
                    name="username"
                    render={({ field, formState }) => (
                        <FormItem>
                        <FormLabel htmlFor="username">Username</FormLabel>
                        <Input
                            type="text"
                            id="username"
                            placeholder="johndoe"
                            {...field}
                        />
                        {formState.errors.username && (
                            <FormMessage />
                        )}
                        </FormItem>
                    )}
                    />
                </div>
                    
                {/* Email */}
                <div className='mb-4'>
                    <FormField
                    control={form.control}
                    name="email"
                    render={({ field, formState }) => (
                        <FormItem>
                        <FormLabel htmlFor="email">Email</FormLabel>
                        <Input
                            type="text"
                            id="email"
                            placeholder="john@mdb.com"
                            {...field}
                        />
                        {formState.errors.username && (
                            <FormMessage />
                        )}
                        </FormItem>
                    )}
                    />
                </div>
                                
                {/* Password */}
                <div className='mb-4'>
                <FormField
                control={form.control}
                name="password"
                render={({ field, formState }) => (
                    <FormItem>
                    <FormLabel htmlFor="password">Password</FormLabel>
                    <Input
                        type="text"
                        id="password"
                        placeholder="Password"
                        {...field}
                    />
                    {formState.errors.username && (
                        <FormMessage />
                    )}
                    </FormItem>
                )}
                />
                </div>

                {/* Marketing Accept */}
                <div className='mb-4'>
                <FormField
                control={form.control}
                name="marketing_accept"
                render={({ field, formState }) => (
                    <FormItem>
                    <Checkbox
                        
                        id="marketing_accept"
                    />
                    <FormLabel htmlFor="marketing_accept" className='ml-4'>Signup to the {siteDetails.title} newsletter</FormLabel>
                    {formState.errors.username && (
                        <FormMessage />
                    )}
                    </FormItem>
                )}
                />
                </div>

                {/* Submit Button */}
                <div className='mb-4 flex'>
                    <Button className="mt-4 justify-center items-center mx-auto"
                        type="submit">Register
                    </Button>
                </div>

            </FormProvider>
            </form>
            </Form>

            {/* Login Link */}
            <div className="mt-4 text-sm text-center space-x-4">
                <span className="text-stone-500">
                    Already have an account?
                </span>
                <Link href="/login"
                    className="text-stone-600 hover:text-stone-700"> 
                    Sign In
                </Link>
            </div>
            </div>
        </div>
        </main>
    </div>
    </section>
  )
}