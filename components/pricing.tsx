import { Button } from "@/components/ui/button";
import { CheckCircleIcon, Square3Stack3DIcon, SparklesIcon, SwatchIcon, WrenchIcon, UserGroupIcon } from "@heroicons/react/24/outline";

export default function Pricing() {

    const plan = {
        name: "Basic plan",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        price: 32,
        isMostPop: true,
        features: [
            "Curabitur faucibus",
            "Curabitur faucibus",
            "Curabitur faucibus",
            "Curabitur faucibus",
            "Curabitur faucibus",
            "Curabitur faucibus",
            "Curabitur faucibus",
            "Curabitur faucibus",
        ],
    }

    const features = [
        {
            name: "Scalable",
            desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text",
            icon: <Square3Stack3DIcon className="w-6 h-6" />
        },
        {
            name: "Flexible",
            desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text",
            icon: <WrenchIcon className="w-6 h-6" />
        },
        {
            name: "Smooth",
            desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text",
            icon: <SwatchIcon className="w-6 h-6" />
        },
        {
            name: "Secure",
            desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text",
            icon: <SparklesIcon className="w-6 h-6" />
        },
    ]

    return (
        <section className='relative py-14'>
            <div className="max-w-screen-xl mx-auto text-gray-600 md:px-8">
                <div className='relative max-w-xl space-y-3 px-4 md:px-0'>
                    <h3 className="text-primary font-semibold uppercase">
                        Pricing
                    </h3>
                    <p className='text-gray-800 text-3xl font-semibold sm:text-4xl'>
                        Pay as you grow
                    </p>
                    <div className='max-w-xl'>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam efficitur consequat nunc.
                        </p>
                    </div>
                </div>
                <div className='mt-16 justify-between gap-8 md:flex'>
                    <ul className="flex-1 max-w-md space-y-10 px-4 md:px-0">
                        {
                            features.map((item, idx) => (
                                <li key={idx} className="flex gap-x-3">
                                    <div className="flex-none w-12 h-12 rounded-full bg-indigo-50 text-accent flex items-center justify-center">
                                        {item.icon}
                                    </div>
                                    <div>
                                        <h4 className="text-lg text-gray-800 font-medium">
                                            {item.name}
                                        </h4>
                                        <p className="text-gray-600 mt-2 md:text-sm">
                                            {item.desc}
                                        </p>
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
                    <div className="flex-1 flex flex-col border-y mt-6 md:max-w-xl md:rounded-xl md:border md:border-x-none md:shadow-lg md:mt-0">
                        <div className="p-4 py-8 border-b md:p-8">
                            <div className="justify-between flex">
                                <div className="max-w-xs">
                                    <span className='text-2xl text-gray-800 font-semibold sm:text-3xl'>
                                        {plan.name}
                                    </span>
                                    <p className="mt-3 sm:text-sm">
                                        {plan.desc}
                                    </p>
                                </div>
                                <div className='flex-none text-gray-800 text-2xl font-semibold sm:text-3xl'>
                                    ${plan.price} <span className="text-xl text-gray-600 font-normal">/mo</span>
                                </div>
                            </div>
                            <Button className="mt-4 text-white w-full">
                                Get Started
                            </Button>
                        </div>
                        <ul className='p-4 space-y-3 sm:grid sm:grid-cols-2 md:block md:p-8 lg:grid'>
                            <div className="pb-2 col-span-2 text-gray-800 font-medium">
                                <p>Features</p>
                            </div>
                            {
                                plan.features.map((featureItem, idx) => (
                                    <li key={idx} className='flex items-center gap-5'>
                                        <CheckCircleIcon className="w-5 h-5 text-primary" />
                                        {featureItem}
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};
