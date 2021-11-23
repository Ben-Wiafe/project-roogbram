/* This example requires Tailwind CSS v2.0+ */
import {
    CloudUploadIcon,
    CogIcon,
    LockClosedIcon,
    RefreshIcon,
    ServerIcon,
    ShieldCheckIcon,
   } from '@heroicons/react/outline'
   const features = [
    { name: 'Push to Deploy', icon: CloudUploadIcon, message:'Let us do it' },
    { name: 'SSL Certificates', icon: LockClosedIcon, message:'Okay start rolling' },
    { name: 'Simple Queues', icon: RefreshIcon, message:'Let us do it' },
    { name: 'Advanced Security', icon: ShieldCheckIcon, message:'The content would break out of your element and it would be 142px wide, rather than 100px. Why is that?' },
    { name: 'Powerful API', icon: CogIcon, message:' The box model is a core foundation of CSS and understanding how it works, ho' },
    { name: 'Database Backups', icon: ServerIcon, message:'LSecurity upont' },
   ]
   export default function Benefit() {
    return (
    <div className="relative bg-white py-16 sm:py-24 lg:py-32">
    <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6
   lg:px-8 lg:max-w-7xl">
    <h2 className="text-base font-semibold tracking-wider text-indigo-600
   uppercase">Deploy faster</h2>
    <p className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight
   sm:text-4xl">
    Everything you need to deploy your app
    </p>
    <p className="mt-5 max-w-prose mx-auto text-xl text-gray-500">
    Phasellus lorem quam molestie id quisque diam aenean nulla in. Accumsan in
   quis quis nunc, ullamcorper
    malesuada. Eleifend condimentum id viverra nulla.
    </p>
    <div className="mt-10">
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
    {features.map((feature) => (
    <div key={feature.name} className="pt-6">
    <div className="flow-root bg-blue-400 rounded-lg px-6 pb-8">
    <div className="-mt-6">
    <div>
    <span className="inline-flex items-center justify-center p-3 bg-yellow-400 rounded-lg shadow-lg">
    <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
    </span>
    </div>
    <h1 className="mt-8 text-lg font-medium text-gray-900 trackingtight">{feature.name}</h1>
    <p className="mt-5 text-base text-gray-500"> {feature.message}
    </p>
    </div>
    </div>
    </div>
    ))}
    </div>
    </div>
    </div>
    </div>
    )
   }