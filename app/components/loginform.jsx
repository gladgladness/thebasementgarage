
export default function LoginForm() {
  return (
    <div className="block max-w-sm rounded-lg bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
      <form>
        {/* <!--E-mail input--> */}
        <input
          type="email"
          label="Email address"
          placeholder="Email Address"
        >
          
        </input>

        {/* <!--Password input--> */}
        <input
          type="password"
          label="Password"
          placeholder="Password"
          className="mt-12 mb-6"
        ></input>

        
        {/* <!--Submit button--> */}
        <div>
        <button type="button" class="inline-block rounded-full bg-sky-500 text-neutral-50 shadow-[0_4px_9px_-4px_rgba(51,45,45,0.7)] hover:bg-sky-600 hover:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] focus:bg-sky-800 focus:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] active:bg-sky-700 active:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal transition duration-150 ease-in-out focus:outline-none focus:ring-0">Submit</button>
          </div>
      </form>
    </div>
  );
}