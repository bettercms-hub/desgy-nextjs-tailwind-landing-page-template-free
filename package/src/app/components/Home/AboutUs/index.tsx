'use client'
import { useEffect, useState } from 'react'
import { aboutdata } from '@/app/types/aboutdata'
import Link from 'next/link'
import Image from 'next/image'
import { Icon } from '@iconify/react'
import AboutSkeleton from '../../Skeleton/AboutUs'
import bcmsHome from "../../../../../bcms-content/home.json";
import { bcms, bcmsRowsAs } from "../../../../bcms-content";

const Aboutus = () => {
  // fetch about data
  const [about, setAbout] = useState<aboutdata[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/api/data')
        if (!res.ok) throw new Error('Failed to fetch')
        const data = await res.json()
        setAbout(data.Aboutdata)
      } catch (error) {
        console.error('Error fetching services:', error)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])
  // The CMS rows over the fetched cards; `src` is the CMS picture, the alt stays the template's.
  const cards: any[] = bcmsRowsAs(bcmsHome, 'about-cards', about as any[], { heading: 'about-card-heading', src: 'about-card-image', paragraph: 'about-card-text', link: 'about-card-link' })

  return (
    <section id='About' className=' bg-cover bg-center overflow-hidden'>
      <div className='container mx-auto max-w-7xl px-4 relative z-1'>
        <div className='p-12 bg-grey rounded-3xl'>
          <Image
            src={bcms(bcmsHome, "about-img-dots-image", '/images/aboutus/dots.svg')}
              data-bcms-field="about-img-dots-image"
              data-bcms-kind="image"
            width={100}
            height={100}
            alt='dots-image'
            className='absolute bottom-1 -left-20'
          />
          <p className='text-center text-primary text-lg tracking-widest uppercase mt-10' data-bcms-field="about-p-about-us" data-bcms-kind="richtext" dangerouslySetInnerHTML={{ __html: bcms(bcmsHome, "about-p-about-us", 'about us') }} />
          <h2 className='text-center pb-12' data-bcms-field="about-h2-know-more-about-us" data-bcms-kind="text">{bcms(bcmsHome, "about-h2-know-more-about-us", 'Know more about us.')}</h2>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16 mt-10'>
            {loading
              ? Array.from({ length: 3 }).map((_, index) => (
                  <AboutSkeleton key={index} />
                ))
              : cards.map((item, i) => (
                  <div
                    key={i}
                    className='hover:bg-darkmode bg-white rounded-3xl p-8 shadow-xl group'>
                    <h5 className='group-hover:text-white mb-5' data-bcms-field={`about-cards[${i}].about-card-heading`} data-bcms-kind="text">
                      {item.heading}
                    </h5>
                    <Image
                      src={item.src ?? item.imgSrc}
                      data-bcms-field={`about-cards[${i}].about-card-image`}
                      data-bcms-kind="image"
                      alt={item.imgSrc}
                      width={100}
                      height={100}
                      className='mb-5'
                    />
                    <p className='text-lg font-normal text-black group-hover:text-white mb-5' data-bcms-field={`about-cards[${i}].about-card-text`} data-bcms-kind="text">
                      {item.paragraph}
                    </p>
                    <Link
                      href='#'
                      className='text-18 font-semibold text-primary hover-underline flex items-center'
                      data-bcms-field={`about-cards[${i}].about-card-link`}
                      data-bcms-kind="text">
                      {item.link}
                      <Icon
                        icon='tabler:chevron-right'
                        width='20'
                        height='20'
                      />
                    </Link>
                  </div>
                ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Aboutus
