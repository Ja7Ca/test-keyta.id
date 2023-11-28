import { useState } from "react"

const Login = () => {
    const [form, setForm] = useState({email:"", password:""})

    const handleChange = (e:{target:{name:string, value:string}}) => {
        setForm({...form, [e.target.name]: e.target.value})
    }

  return (
    <form>
        <label>Email</label>
        <input name="email" value={form.email} onChange={handleChange} className="block w-full rounded-md border-0 px-4 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
        <label>Passowrd</label>
        <input name="password" value={form.password} onChange={handleChange} className="block w-full rounded-md border-0 px-4 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
    </form>
  )
}

export default Login