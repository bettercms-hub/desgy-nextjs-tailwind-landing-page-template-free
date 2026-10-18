'use client'
import React from 'react'
import Link from 'next/link'
import bcmsHome from "../../../../../bcms-content/home.json";
import { bcms } from "../../../../bcms-content";

const Join = () => {
  return (
    <section className='overflow-hidden bg-joinus'>
      <div className='container mx-auto max-w-7xl px-4'>
        <div className='text-center'>
          <p className='text-primary text-lg font-normal tracking-widest uppercase' data-bcms-field="take-p-join-us" data-bcms-kind="richtext" dangerouslySetInnerHTML={{ __html: bcms(bcmsHome, "take-p-join-us", 'Join us') }} />
          <h2 className='my-6' data-bcms-field="take-h2-take-your-business-to" data-bcms-kind="text">{bcms(bcmsHome, "take-h2-take-your-business-to", 'Take your business to the new level.')}</h2>
          <p className='text-black/50 text-base font-normal max-w-3xl mx-auto' data-bcms-field="take-p-craven-omni-memoria-patriae" data-bcms-kind="richtext" dangerouslySetInnerHTML={{ __html: bcms(bcmsHome, "take-p-craven-omni-memoria-patriae", 'Craven omni memoria patriae zombieland clairvius narcisse religionis sunt diri undead historiarum. Golums, zombies unrelenting et Raimi fascinati beheading.') }} />
        </div>

        <div className='mx-auto max-w-4xl pt-5'>
          <div className='sm:flex items-center mx-5 p-5 sm:p-0 rounded-xl justify-between bg-grey sm:rounded-full'>
            <div>
              <input
                type='name'
                className='my-4 py-4 sm:pl-6 lg:text-xl text-black sm:rounded-full bg-transparent pl-1 focus:outline-hidden bg-emailbg focus:text-black'
                placeholder={bcms(bcmsHome, "take-input-your-name-placeholder", 'Your name')}
                data-bcms-props="take-input-your-name-placeholder|text|placeholder"
                autoComplete='off'
              />
            </div>
            <div>
              <input
                type='email'
                className='my-4 py-4 sm:pl-6 lg:text-xl text-black sm:border-l border-linegrey bg-transparent focus:outline-hidden bg-emailbg focus:text-black'
                placeholder={bcms(bcmsHome, "take-input-your-email-placeholder", 'Your email')}
                data-bcms-props="take-input-your-email-placeholder|text|placeholder"
                autoComplete='off'
              />
            </div>
            <div className='sm:mr-3'>
              <Link
                href='#'
                className='w-full sm:w-0 text-xl text-white font-semibold text-center rounded-xl sm:rounded-full bg-primary py-5 px-12 hover:bg-darkmode duration-300'
                data-bcms-field="take-a-join"
                data-bcms-kind="text">
                {bcms(bcmsHome, "take-a-join", 'Join!')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Join
