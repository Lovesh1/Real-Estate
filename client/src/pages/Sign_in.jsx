

export default function Sign_in() {
  return (
    <div className=" max-w-lg p-2 mx-auto">
        <h1 className="text-3xl my-4 text-center font-semibold">Sign In</h1>

          <form className="flex flex-col gap-3">
              <input type="text" placeholder="Username" id="username" className="border border-slate-500 outline-none p-3 rounded-lg "></input>
              <input type="password" placeholder="Password" id="password" className="border border-slate-500 outline-none p-3 rounded-lg "></input>
              <button className="bg-slate-500 p-3 rounded-md text-xl font-medium text-white hover:opacity-90 disabled:opacity-80">Sign In</button>
          </form>
    </div>
  )
}
