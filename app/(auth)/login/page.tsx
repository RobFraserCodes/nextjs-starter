'use client'

import React, { useEffect, useState, useRef, use } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { siteDetails } from '@/lib/site-details';
import { PlayCircleIcon } from '@heroicons/react/24/solid';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { useForm, FormProvider } from 'react-hook-form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const loginSchema = z.object({
  username: z.string().email('Invalid username'),
  password: z.string().min(8, 'Password should be at least 8 characters'),
});

export default function UserLoginPage() {
  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      username: '',
      password: '',
    },
  });
  
  function onSubmit(values: z.infer<typeof loginSchema>) {
    console.log(values);
  }
    
  return (
    <section className="bg-white">
    <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
        <div className="relative flex h-32 items-end bg-gray-400 lg:col-span-5 lg:h-full xl:col-span-6">

            <div className="absolute inset-0 h-full w-full">
            <Image
                alt=""
                src="https://unsplash.com/photos/RmoWqDCqN2E"
                className="absolute inset-0 h-full w-full object-cover"
                width={870}
                height={1110}
                priority
            />
            <div
                className="absolute inset-0 bg-gradient-to-t from-gray-900 to-gray-900/20"
                aria-hidden="true"/>
            </div>

        {/* Logo */}
        <div className="absolute top-8 left-8 text-white">
            <Link className="block" href="/">
                <div className='flex items-center'>
                    <span className="sr-only">Home</span>
                    <PlayCircleIcon className="h-8 w-8 text-gray-100" />
                    <h1 className='ml-2 text-xl font-bold text-gray-100 sm:text-3xl uppercase'>{siteDetails.title}</h1>
                </div>
            </Link>
            <div className='font-thin'>{siteDetails.description}</div>
        </div>

        <div className="hidden lg:relative lg:block lg:p-12">

            <h2 className="mt-6 text-2xl font-bold text-white sm:text-3xl md:text-4xl">
            Login to {siteDetails.title} 🚀 
            </h2>

            <p className="mt-4 leading-relaxed text-white/90">
            This form is completely typesafe and validated with Zod.
            </p>

        </div>
        </div>

        <main className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
          <div className="max-w-xl lg:max-w-3xl">

            <div className=''>
              <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)}>
              <FormProvider {...form}>
                <FormField
                  control={form.control}
                  name="username"
                  render={({ field, formState }) => (
                    <FormItem>
                      <FormLabel htmlFor="username">Username</FormLabel>
                      <Input
                        type="text"
                        id="username"
                        placeholder="Username"
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
                <Button className="mt-4"
                  type="submit">Login</Button>
              </FormProvider>
                </form>
              </Form>
            </div>

            <div className='space-y-0 text-sm pt-8 text-stone-400'>
              <p>Forgotten password?</p>
              <p>Don&apos;t have an account? <Link href="/register"
                className='text-stone-600'>Register</Link></p>
            </div>
          </div>
        </main>

    </div>
    </section>
  )
}