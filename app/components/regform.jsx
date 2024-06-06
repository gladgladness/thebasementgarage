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
          
          <button className="min-w-10 max-w-20 rounded outline outline-cyan-400 hover: bg-violet-300" type="submit">Submit</button>
     </form>
      )
}