import {Link} from 'react-router-dom'

export default function Sign_out() {
  return (
    <div className="max-w-lg mx-auto p-3">
        <h1 className="text-3xl font-semibold text-center my-4">Sign Up</h1>

          <form className="flex flex-col gap-3">
              <input type="text" placeholder="Username" className="p-3 rounded-xl border border-slate-600 outline-none" id="username"></input>
              <input type="email" placeholder="Email" className="p-3 rounded-xl border border-slate-600 outline-none" id="email"></input>
              <input type="password" placeholder="Password" className="p-3 rounded-xl border border-slate-600 outline-none" id="password"></input>
              <button className='bg-slate-600 text-white p-3 rounded-xl hover:opacity-90 disabled:opacity-80'>Sign Up </button>
          </form>
            <div className='mt-3 flex gap-2'>
                <p className='text-slate-400 font-thin'>Already have an Account?</p>
                <Link to='/sign-in'><p className='text-blue-500'>Sign in</p></Link>
            </div>
    </div>
  )
}
