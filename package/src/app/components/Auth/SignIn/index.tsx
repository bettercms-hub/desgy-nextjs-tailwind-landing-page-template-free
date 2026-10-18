'use client'
import { signIn } from 'next-auth/react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import toast from 'react-hot-toast'
import SocialSignIn from '../SocialSignIn'
import Logo from '@/app/components/Layout/Header/Logo'
import Loader from '@/app/components/Common/Loader'
import bcmsSignin from "../../../../../bcms-content/signin.json";
import { bcms, bcmsStyle } from "../../../../bcms-content";

const Signin = () => {
  const router = useRouter()

  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
    checkboxToggle: false,
  })
  const [loading, setLoading] = useState(false)

  const loginUser = (e: any) => {
    e.preventDefault()

    setLoading(true)
    signIn('credentials', { ...loginData, redirect: false })
      .then((callback) => {
        if (callback?.error) {
          toast.error(callback?.error)
          console.log(callback?.error)
          setLoading(false)
          return
        }

        if (callback?.ok && !callback?.error) {
          toast.success('Login successful')
          setLoading(false)
          router.push('/')
        }
      })
      .catch((err) => {
        setLoading(false)
        console.log(err.message)
        toast.error(err.message)
      })
  }

  return (
    <>
      <div className='mb-10 text-center mx-auto inline-block max-w-[160px]'>
        <Logo
          label={bcms(bcmsSignin, "desgy-a-desgy-solutions.label", "Desgy Solutions")}
          href={bcms(bcmsSignin, "desgy-a-desgy-solutions.href", "/")}
          field="desgy-a-desgy-solutions.label"
          hrefField="desgy-a-desgy-solutions.href"
        />
      </div>

      <SocialSignIn />

      <span className="z-1 relative my-8 block text-center before:content-[''] before:absolute before:h-px before:w-40% before:bg-dark_border/60 before:left-0 before:top-3 after:content-[''] after:absolute after:h-px after:w-40% after:bg-dark_border/60 after:top-3 after:right-0">
        <span className='text-body-secondary relative z-10 inline-block px-3 text-base text-darkmode' data-bcms-field="desgy-span-or" data-bcms-kind="text">
          {bcms(bcmsSignin, "desgy-span-or", "OR")}
        </span>
      </span>

      <form onSubmit={(e) => e.preventDefault()}>
        <div className='mb-[22px]'>
          <input
            type='email'
            placeholder='Email'
            onChange={(e) =>
              setLoginData({ ...loginData, email: e.target.value })
            }
            className='w-full rounded-md border border-dark_border/60 border-solid bg-transparent px-5 py-3 border-darkmode text-base text-dark outline-hidden transition placeholder:text-darkmode focus:border-darkmode focus-visible:shadow-none text-darkmode dark:focus:border-darkmode'
          />
        </div>
        <div className='mb-[22px]'>
          <input
            type='password'
            placeholder='Password'
            onChange={(e) =>
              setLoginData({ ...loginData, password: e.target.value })
            }
            className='w-full rounded-md border border-dark_border/60 border-solid bg-transparent px-5 py-3 border-darkmode text-base text-dark outline-hidden transition placeholder:text-darkmode focus:border-darkmode focus-visible:shadow-none text-darkmode dark:focus:border-darkmode'
          />
        </div>
        <div className='mb-9'>
          <button
            onClick={loginUser}
            type='submit'
            className='bg-darkmode w-full py-3 rounded-lg text-18 font-medium border text-white border-darkmode hover:text-darkmode hover:bg-transparent'>
            Sign In {loading && <Loader />}
          </button>
        </div>
      </form>

      <Link
        href={bcms(bcmsSignin, "desgy-a-forgot-password.href", "/forgot-password")}
        className='mb-2 inline-block text-base text-dark hover:text-primary text-black dark:hover:text-primary'
        data-bcms-field="desgy-a-forgot-password.label"
        data-bcms-kind="text"
        data-bcms-props="desgy-a-forgot-password.href|url|href">
        {bcms(bcmsSignin, "desgy-a-forgot-password.label", "Forgot Password?")}
      </Link>
      <p className='text-body-secondary text-black text-base' dangerouslySetInnerHTML={{ __html: bcms(bcmsSignin, "desgy-p-not-a-member-yet", 'Not a member yet? <a href="/" class="text-primary hover:underline">Sign Up</a>') }} data-bcms-field="desgy-p-not-a-member-yet" data-bcms-kind="richtext" data-bcms-style="2" style={bcmsStyle(bcmsSignin, "desgy-p-not-a-member-yet")}></p>
    </>
  )
}

export default Signin
