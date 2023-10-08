import {FaSearch} from 'react-icons/fa'
import { Link } from 'react-router-dom'

export default function Nav() {
  return (
    <header className="bg-slate-200 shadow-md ">
    <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
      <Link to='/'>
        <h1 className="text-sm sm:text-xl font-bold flex flex-wrap">
        <span className="text-slate-400 ">Lovesh</span>
        <span className="text-slate-500 ">Tricky</span>
        </h1>
      </Link>
        <form className='bg-slate-100 p-2 rounded-md flex items-center justify-between '>
            <input
            type="text"
            placeholder="Search..."
            className=" bg-transparent focus:outline-none w-24 sm:w-64">

            </input>
            <FaSearch className='text-slate-600'></FaSearch>
        </form>

        <ul className='flex gap-3'>
            <Link to='/'><li className='hidden sm:inline hover:underline'>Home</li></Link>
           <Link to='/about'><li className='hidden sm:inline hover:underline'>About</li></Link> 
           <Link to='/sign-in'> <li className='hover:underline'>SignIn</li></Link>
        </ul>
    </div>
    </header>
  )
}
