'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import bcmsHome from "../../../../../bcms-content/home.json";
import { bcms } from "../../../../bcms-content";

const Digital = () => {
  return (
    <section className='relative bg-cover bg-center overflow-hidden'>
      <div className='container mx-auto max-w-7xl px-4'>
        <div className="rounded-3xl bg-primary bg-[url('/images/digital/bg.svg')] bg-no-repeat bg-right-top lg:pb-60 pb-32 relative">
          <div className='grid grid-cols-1 lg:grid-cols-1 xl:grid-cols-2'>
            {/* COLUMN-1 */}
            <div className='pt-24 lg:pl-24'>
              <p className='text-lg font-normal text-white mb-5 tracking-widest text-center lg:text-start uppercase mt-5' data-bcms-field="sec4-p-who-we-are" data-bcms-kind="richtext" dangerouslySetInnerHTML={{ __html: bcms(bcmsHome, "sec4-p-who-we-are", 'Who we are') }} />
              <h2 className='text-white mb-8 leading-tight text-center lg:text-start lg:w-full' data-bcms-field="sec4-h2-we-are-a-digital" data-bcms-kind="text">{bcms(bcmsHome, "sec4-h2-we-are-a-digital", 'We are a digital agency that builds amazing products.')}</h2>
              <div className='text-center lg:text-start'>
                <Link
                  href='#'
                  className='text-xl font-semibold text-white bg-deep-slate/80 hover:bg-deep-slate py-4 px-12 rounded-full'
                  data-bcms-field="sec4-a-get-started"
                  data-bcms-kind="text">
                  {bcms(bcmsHome, "sec4-a-get-started", 'Get started')}
                </Link>
              </div>
            </div>
          </div>
          {/* COLUMN-2 */}
          <div className='absolute -bottom-16 -right-20 xl:block hidden'>
            <Image
              src={bcms(bcmsHome, "sec4-img-doodle", '/images/digital/girldoodle.svg')}
              data-bcms-field="sec4-img-doodle"
              data-bcms-kind="image"
              alt='doodle'
              width={815}
              height={691}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
export default Digital
