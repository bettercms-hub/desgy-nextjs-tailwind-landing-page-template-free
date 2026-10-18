'use client'
import React from 'react'
import Image from 'next/image'
import bcmsHome from "../../../../../bcms-content/home.json";
import { bcms } from "../../../../bcms-content";

const Dedicated = () => {
  return (
    <section className='relative bg-cover bg-center overflow-hidden'>
      <div className='container mx-auto max-w-7xl px-4'>
        <div className='grid grid-cols-1 lg:grid-cols-12 gap-5'>
          <Image
            src={bcms(bcmsHome, "dedicated3-img-spiral-design", '/images/dedicated/spiral.svg')}
              data-bcms-field="dedicated3-img-spiral-design"
              data-bcms-kind="image"
            height={272}
            width={686}
            alt='spiral-design'
            className='absolute left-0 top-0 hidden lg:block -z-10'
          />
          {/* Left Column */}
          <div className='col-span-12 lg:col-span-6 justify-self-center'>
            <Image
              src={bcms(bcmsHome, "dedicated3-img-man-icon", '/images/dedicated/man.svg')}
              data-bcms-field="dedicated3-img-man-icon"
              data-bcms-kind="image"
              alt='man-icon'
              width={416}
              height={530}
              className='mx-auto md:mx-0'
            />
          </div>

          {/* Right Column */}
          <div className='col-span-12 lg:col-span-6'>
            <div className='relative'>
              <Image
                src={bcms(bcmsHome, "dedicated3-img-comma-image", '/images/dedicated/comma.svg')}
              data-bcms-field="dedicated3-img-comma-image"
              data-bcms-kind="image"
                alt='comma-image'
                width={200}
                height={106}
                className='absolute -top-16 -left-32 hidden lg:block'
              />
            </div>
            <h2 className='text-center -mr-1 lg:text-start lg:leading-20 leading-14' data-bcms-field="dedicated3-h2-dedicated-to-help-peoples" data-bcms-kind="text">{bcms(bcmsHome, "dedicated3-h2-dedicated-to-help-peoples", '“Dedicated to help people’s design needs.”')}</h2>
            <p className='text-xl font-medium text-black/55 mt-5 text-center lg:text-start' data-bcms-field="dedicated3-p-quis-ipsum-suspendisse-ultrices" data-bcms-kind="richtext" dangerouslySetInnerHTML={{ __html: bcms(bcmsHome, "dedicated3-p-quis-ipsum-suspendisse-ultrices", 'Quis ipsum suspendisse ultrices gravida risus commodo viverra maecenas accumsan lacus vel facilisis') }} />
            <h5 className='mt-12 lg:pl-32 relative lg:before:block before:hidden before:absolute before:bg-black before:h-0.5 before:w-24 before:left-0 before:bottom-1/2 text-center lg:text-start' data-bcms-field="dedicated3-h5-cathy-hills-ceo" data-bcms-kind="text">{bcms(bcmsHome, "dedicated3-h5-cathy-hills-ceo", 'Cathy Hills, CEO')}</h5>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Dedicated
