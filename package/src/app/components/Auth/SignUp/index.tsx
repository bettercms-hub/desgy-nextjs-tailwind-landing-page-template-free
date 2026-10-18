'use client'
import { useRouter } from 'next/navigation'
import toast from 'react-hot-toast'
import SocialSignUp from '../SocialSignUp'
import Logo from '@/app/components/Layout/Header/Logo'
import { useState } from 'react'
import Loader from '@/app/components/Common/Loader'
import bcmsSignup from "../../../../../bcms-content/signup.json";
import { bcms, bcmsStyle } from "../../../../bcms-content";
const SignUp = () => {
  const router = useRouter()
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e: any) => {
    e.preventDefault()

    setLoading(true)
    const data = new FormData(e.currentTarget)
    const value = Object.fromEntries(data.entries())
    const finalData = { ...value }

    fetch('/api/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(finalData),
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success('Successfully registered')
        setLoading(false)
        router.push('/signin')
      })
      .catch((err) => {
        toast.error(err.message)
        setLoading(false)
      })
  }

  return (
    <>
      <div className='mb-10 text-center mx-auto inline-block max-w-[160px]'>
        <Logo
          label={bcms(bcmsSignup, "desgy-a-desgy-solutions.label", "Desgy Solutions")}
          href={bcms(bcmsSignup, "desgy-a-desgy-solutions.href", "/")}
          field="desgy-a-desgy-solutions.label"
          hrefField="desgy-a-desgy-solutions.href"
        />
      </div>

      <SocialSignUp />

      <span className="z-1 relative my-8 block text-center before:content-[''] before:absolute before:h-px before:w-40% before:bg-dark_border/60 before:left-0 before:top-3 after:content-[''] after:absolute after:h-px after:w-40% after:bg-dark_border/60 after:top-3 after:right-0">
        <span className='text-body-secondary relative z-10 inline-block px-3 text-base text-darkmode' data-bcms-field="desgy-span-or" data-bcms-kind="text">
          {bcms(bcmsSignup, "desgy-span-or", "OR")}
        </span>
      </span>

      <form onSubmit={handleSubmit}>
        <div className='mb-[22px]'>
          <input
            type='text'
            placeholder='Name'
            name='name'
            required
            className='w-full rounded-md border border-dark_border/60 border-solid bg-transparent px-5 py-3 text-base text-dark outline-hidden transition border-darkmode placeholder:text-darkmode focus:border-darkmode focus-visible:shadow-none text-darkmode dark:focus:border-darkmode'
          />
        </div>
        <div className='mb-[22px]'>
          <input
            type='email'
            placeholder='Email'
            name='email'
            required
            className='w-full rounded-md border border-dark_border/60 border-solid bg-transparent px-5 py-3 text-base text-dark outline-hidden transition border-darkmode placeholder:text-darkmode focus:border-darkmode focus-visible:shadow-none text-darkmode dark:focus:border-darkmode'
          />
        </div>
        <div className='mb-[22px]'>
          <input
            type='password'
            placeholder='Password'
            name='password'
            required
            className='w-full rounded-md border border-dark_border/60 border-solid bg-transparent px-5 py-3 text-base text-dark outline-hidden transition border-darkmode placeholder:text-darkmode focus:border-darkmode focus-visible:shadow-none text-darkmode dark:focus:border-darkmode'
          />
        </div>
        <div className='mb-9'>
          <button
            type='submit'
            className='flex w-full items-center text-18 font-medium justify-center rounded-md bg-darkmode px-5 py-3 text-white transition duration-300 ease-in-out hover:bg-transparent hover:text-darkmode border-darkmode border '>
            Sign Up {loading && <Loader />}
          </button>
        </div>
      </form>

      <p className='text-body-secondary mb-4 text-black text-base' dangerouslySetInnerHTML={{ __html: bcms(bcmsSignup, "desgy-p-by-creating-an-account", 'By creating an account you are agree with our <a href="/#" class="text-primary hover:underline">Privacy</a> and <a href="/#" class="text-primary hover:underline">Policy</a>') }} data-bcms-field="desgy-p-by-creating-an-account" data-bcms-kind="richtext" data-bcms-style="2" style={bcmsStyle(bcmsSignup, "desgy-p-by-creating-an-account")}></p>

      <p className='text-body-secondary text-black text-base' dangerouslySetInnerHTML={{ __html: bcms(bcmsSignup, "desgy-p-already-have-an-accountsign", 'Already have an account?<a href="/" class="pl-2 text-primary hover:underline">Sign In</a>') }} data-bcms-field="desgy-p-already-have-an-accountsign" data-bcms-kind="richtext" data-bcms-style="2" style={bcmsStyle(bcmsSignup, "desgy-p-already-have-an-accountsign")}></p>
    </>
  )
}

export default SignUp
