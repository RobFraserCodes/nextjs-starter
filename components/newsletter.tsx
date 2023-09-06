'use client'

import { zodResolver } from '@hookform/resolvers/zod';
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
import { useForm, FormProvider } from 'react-hook-form';
import { EnvelopeOpenIcon } from '@heroicons/react/24/outline';


const newsletterSchema = z.object({
    email: z.string().email('Invalid email address'),
});

export default function NewsletterCTA() {
    
      function onSubmit(values: z.infer<typeof newsletterSchema>) {
        console.log("Submitted")
        console.log(values);
      }

    const form = useForm<z.infer<typeof newsletterSchema>>({
        resolver: zodResolver(newsletterSchema),
        defaultValues: {
            email: '',
        },
    });

    return (
        <section className="max-w-xl mt-12 mx-auto px-4 md:px-8 my-8">
            <div className="space-y-3 text-center">
                <EnvelopeOpenIcon className="mx-auto h-12 w-12 text-primary" aria-hidden="true" />
                <h3 className="text-3xl text-gray-800 font-bold">
                    Subscribe to our newsletter
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  Stay up to date with the roadmap progress, announcements and exclusive discounts feel free to sign up with your email.  
                </p>
            </div>

            <div className="mt-6">
                <form 
                    onSubmit={(e) => e.preventDefault()}
                    className="items-center justify-center sm:flex space-y-4">
                    <Input 
                        type="email"
                        placeholder="Enter your email"
                        className="text-gray-500 w-full p-3 rounded-md border outline-none focus:border-indigo-600"
                    />
                    <Button
                        className='w-full text-white'>
                        Subscribe
                    </Button>
                </form>
                <p className="mt-3 mx-auto text-center max-w-lg text-[15px] text-gray-400">
                    No spam ever, we are care about the protection of your data. 
                    Read our <a className="text-secondary underline" href="javascript:void(0)"> Privacy Policy </a>
                </p>
            </div>

        </section>
    )
}