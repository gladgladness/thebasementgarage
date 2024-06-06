export default function Form(){
    async function registerCar(formData) {
        'use server'
     
        const rawFormData = {
          manufacturer: formData.get('manufacturer'),
          model: formData.get('model'),
          regNo: formData.get('regNo'),
          chassis: formData.get('chassis'),
          ownerName: formData.get('ownerName'),
          phone: formData.get('phone'),
          email: formData.get('email'),
        }
     
        // mutate data
        // revalidate cache
      }
     
      return (
      <form action={registerCar} className="flex flex-col">
          <label id="manufacturer">Manufacturer:</label>
          <input className="min-w-40 max-w-60 rounded outline outline-cyan-700" type="text" id="manufacturer" name="manufacturer" required />
          <label id="model">Vehicle Model:</label>
          <input className="min-w-40 max-w-60 rounded outline outline-cyan-700" type="text" id="model" name="model" required />
          <label id="regNo">Registration Number:</label>
          <input className="min-w-40 max-w-60 rounded outline outline-cyan-700" type="text" id="regNo" name="regNo" required />
          <label id="chassis">Chassis No:</label>
          <input className="min-w-40 max-w-60 rounded outline outline-cyan-700" type="text" id="chassis" name="chassis" required />
          <label id="ownerName">Vehicle Owner Name:</label>
          <input className="min-w-40 max-w-60 rounded outline outline-cyan-700" type="text" id="ownerName" name="ownerName" required />
          <label id="phone">Phone Number:</label>
          <input className="min-w-40 max-w-60 rounded outline outline-cyan-700" type="text" id="phone" name="phone" required />
          <label htmlFor="email">Email:</label>
          <input className="min-w-40 max-w-60 rounded outline outline-cyan-700" type="text" id="email" name="email" />
          
          <div>
        <button type="button" class="inline-block rounded-full bg-sky-500 text-neutral-50 shadow-[0_4px_9px_-4px_rgba(51,45,45,0.7)] hover:bg-sky-600 hover:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] focus:bg-sky-800 focus:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] active:bg-sky-700 active:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal transition duration-150 ease-in-out focus:outline-none focus:ring-0">Submit</button>
          </div>
      </form>
    
      )
}