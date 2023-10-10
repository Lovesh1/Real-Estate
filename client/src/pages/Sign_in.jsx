import { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'

export default function Sign_in() {

    const [formdata, setformdata] = useState({})
    const [error, seterror] = useState(null)
    const [loading, setloading] = useState(false)
    const navigate = useNavigate();
    const handlechange = (e) => {
      setformdata({
        ...formdata,
        [e.target.id]: e.target.value
      });
    };

    const handlesubmit = async (e) => {
      e.preventDefault();
      setloading(true)
      const res = await fetch("/api/auth/signin", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formdata),
      });
      const data = await res.json();
  
      if(data.success == false){
        seterror(data.message);
        setloading(false);
        return
      }
      setloading(false);
      navigate('/');
      
    };

  return (
    <div className="max-w-lg mx-auto p-3">
        <h1 className="text-3xl font-semibold text-center my-4">Sign In</h1>

          <form className="flex flex-col gap-3" onSubmit={handlesubmit}>
              <input type="text" placeholder="Username" className="p-3 rounded-xl border border-slate-600 outline-none" id="username" onChange={handlechange}></input>
              <input type="password" placeholder="Password" className="p-3 rounded-xl border border-slate-600 outline-none" id="password" onChange={handlechange}></input>
              <button disabled={loading} className='bg-slate-600 text-white p-3 rounded-xl hover:opacity-90 disabled:opacity-80'>{loading ? 'Loading..': 'Sign Up'} </button>
          </form>
            <div className='mt-3 flex gap-2'>
                <p className='text-slate-400 font-thin'>Dont have an Account?</p>
                <Link to='/sign-out'><p className='text-blue-500'>Sign out</p></Link>

            </div>
            {
              error && <p className='text-xl font-bold text-red-400'>{error}</p>
            }
    </div>
  )
}

