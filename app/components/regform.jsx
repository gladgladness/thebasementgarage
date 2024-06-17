'use client' 
import registerCar from '@/backend/actions';
import { useFormState, useFormStatus } from 'react-dom';

export default function VehicleForm(){
  const [errorMessage, formAction] = useFormState(registerCar, null); 
     
      return (
        <div className="flex justify-center items-center py-10">
        <form  action={formAction} className="space-y-3 w-max h-auto">
        <div className="flex-1 rounded-lg bg-gray-100 px-24 pb-4 pt-8">
          <h1 className= "mb-3 text-2xl dark:text-black">
            Register a new Vehicle below:
          </h1>
         
          <div className="w-full grid grid-cols-3 mr-52 gap-x-5">
            <div>
              <label
                className="mb-3 mt-5 block text-base font-medium text-gray-900"
                htmlFor="manufacturer"
              >
                Manufacturer
              </label>
              <div className="relative">
                <input
                  className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                  id="manufacturer"
                  type="manufacturer"
                  name="manufacturer"
                  placeholder="Enter the vehicle manufacturer"
                  required
                />
               
              </div>
            </div>
            
            <div className="w-full">
             <label
                className="mb-3 mt-5 block text-base font-medium text-gray-900"
                htmlFor="model"
              >
                Model
              </label>
              <div className="relative">
                <input
                  className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                  id="model"
                  type="model"
                  name="model"
                  placeholder="Enter the vehicle model"
                  required
                />
               
              </div>
            </div>
           
            
            <div className="w-full">
            
              <label
                className="mb-3 mt-5 block text-base font-medium text-gray-900"
                htmlFor="regNo"
              >
                Registration Number
              </label>
              <div className="relative">
                <input
                  className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                  id="regNo"
                  type="regNo"
                  name="regNo"
                  placeholder="Enter the vehicle registration No."
                  required
                />
               
              </div>
            </div>
  
            <div className="w-full">
            
              <label
                className="mb-3 mt-5 block text-base font-medium text-gray-900"
                htmlFor="chassis"
              >
                Chassis
              </label>
              <div className="relative">
                <input
                  className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                  id="chassis"
                  type="chassis"
                  name="chassis"
                  placeholder="Enter the vehicle chassis"
                  required
                />
               
              </div>
            </div>
            
            
              <div>
              <label
                className="mb-3 mt-5 block text-base font-medium text-gray-900"
                htmlFor="yom"
              >
                Year of Manufacture
              </label>
              <div className="relative">
                <input
                  className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                  id="yom"
                  type="yom"
                  name="yom"
                  placeholder="Enter the Year of Manufacture"
                  required
                />
               
              </div>
            </div>

            <div className="w-full">
            
              <label
                className="mb-3 mt-5 block text-base font-medium text-gray-900"
                htmlFor="ownerName"
              >
                Owner's Name
              </label>
              <div className="relative">
                <input
                  className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                  id="ownerName"
                  type="ownerName"
                  name="ownerName"
                  placeholder="Enter the vehicle Owner's Name"
                  required
                />
               
              </div>
            </div>
            
  
            <div className="w-full">
            
              <label
                className="mb-3 mt-5 block text-base font-medium text-gray-900"
                htmlFor="phone"
              >
                Phone Number
              </label>
              <div className="w-full">
                <input
                  className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                  id="phone"
                  type="phone"
                  name="phone"
                  placeholder="Enter the vehicle Owner's Phone No."
                  required
                />
               
              </div>
            </div>
            
            
          <div>
              <label
                className="mb-3 mt-5 block text-base font-medium text-gray-900"
                htmlFor="email"
              >
                Email
              </label>
              <div className="relative">
                <input
                  className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Enter owner's email address"
                  required
                />
               
              </div>
            </div>
          
          </div>
            
            <div
          className="flex h-8 items-end space-x-1"
          aria-live="polite"
          aria-atomic="true"
        >
          {errorMessage && (
            <>
              
              <p className="text-sm text-red-500">{errorMessage}</p>
            </>
          )}
        </div>
                     
          <RegVehicleButton/>
               
          </div>
             
        
        
        
       
      </form>
      </div>
    )
}


function RegVehicleButton() {
  const { pending } = useFormStatus();
  
  return (
  <>
    <div className='flex flex-row space-x-6'>
    <button type="submit" className=" inline-flex  mt-3  rounded bg-blue-500 px-6 pb-2 pt-2.5 text-base font-medium leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-blue-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-blue-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-blue-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]" aria-disabled={pending}>
      Register Vehicle
    </button>
 
    <button type="Reset" className="inline-flex  mt-3  rounded bg-blue-500 px-6 pb-2 pt-2.5 text-base font-medium leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-blue-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-blue-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-blue-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]" aria-disabled={pending}>
      Reset
    </button>
    </div>
     
  </>
  );
}