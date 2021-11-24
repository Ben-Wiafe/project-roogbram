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
    { name: 'Online Billing, Invoicing, & Contracts', icon: CloudUploadIcon, message:'Simple and secure control of your organization’s financial and legal transactions. Send customized invoices and contracts' },
    { name: 'Easy Scheduling & Attendance Tracking', icon: LockClosedIcon, message:'Schedule and reserve classrooms at one campus or multiple campuses. Keep detailed records of student attendance' },
    { name: 'Customer Tracking', icon: RefreshIcon, message:'Automate and track emails to individuals or groups. Skilline’s built-in system helps organize your organization ' },
    { name: 'Advanced Security', icon: ShieldCheckIcon, message:'The content would break out of your element and it would be 142px wide, rather than 100px. Why is that?' },
    { name: 'Powerful API', icon: CogIcon, message:' The box model is a core foundation of CSS and understanding how it works, ho' },
    { name: 'Database Backups', icon: ServerIcon, message:'LSecurity upont' },
   ]
   export default function Benefit() {
    return (
    <div className="relative bg-white py-16 sm:py-24 lg:py-14">
    <div className="mx-auto max-w-sm px-4 text-center sm:max-w-3xl sm:px-6
   lg:px-3 lg:max-w-6xl">
    
  
    <div className="mt-10">
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
    {features.map((feature) => (
    <div key={feature.name} className="pt-6">
    <div className="flow-root shadow-2xl rounded-xl px-6 pb-8 max-w-auto">
    <div className="-mt-6">
    <div>
    <span className="inline-flex items-center justify-center p-3 bg-yellow-400 rounded-lg shadow-lg">
    <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
    </span>
    </div>
    <h1 className="mt-8 text-lg inline-flex font-medium text-blue-900 trackingtight">{feature.name}</h1>
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