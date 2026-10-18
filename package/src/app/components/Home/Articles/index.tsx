'use client'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import Slider from 'react-slick'
import Link from 'next/link'
import { articles } from '@/app/types/articles'
import ArticlesSkeleton from '../../Skeleton/Articles'
import bcmsHome from "../../../../../bcms-content/home.json";
import { bcms, bcmsRowsAs } from "../../../../bcms-content";

const settings = {
  dots: true,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 2,
  arrows: false,
  autoplay: false,
  speed: 500,
  cssEase: 'linear',
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
      },
    },
  ],
}

const Articles = () => {
  // fetch data

  const [articles, setArticles] = useState<articles[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/api/data')
        if (!res.ok) throw new Error('Failed to fetch')
        const data = await res.json()
        setArticles(data.ArticlesData)
      } catch (error) {
        console.error('Error fetching services:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])
  const posts: any[] = bcmsRowsAs(bcmsHome, 'articles', articles as any[], { time: 'article-time', heading: 'article-title', heading2: 'article-subtitle', name: 'article-source', date: 'article-date', src: 'article-image' })

  return (
    <section id='Blog' className='relative bg-grey overflow-hidden'>
      <div className='container mx-auto max-w-7xl px-4 relative'>
        <div className='text-center'>
          <p className='text-primary text-xl font-normal tracking-widest' data-bcms-field="blog-p-articles" data-bcms-kind="richtext" dangerouslySetInnerHTML={{ __html: bcms(bcmsHome, "blog-p-articles", 'ARTICLES') }} />
          <h2 data-bcms-field="blog-h2-our-latest-post" data-bcms-kind="text">{bcms(bcmsHome, "blog-h2-our-latest-post", 'Our latest post.')}</h2>
        </div>

        <Slider {...settings}>
          {loading
            ? Array.from({ length: 3 }).map((_, i) => (
                <ArticlesSkeleton key={i} />
              ))
            : posts.map((items, i) => (
                <div key={i}>
                  <div className='bg-white m-3 px-3 pt-3 pb-12 my-10 shadow-lg rounded-4xl relative'>
                    <Image
                      src={items.src ?? items.imgSrc}
                      data-bcms-field={`articles[${i}].article-image`}
                      data-bcms-kind="image"
                      alt='gaby'
                      width={389}
                      height={262}
                      className='inline-block m-auto rounded-3xl'
                    />
                    <Link
                      href='/'
                      className='absolute text-base bg-primary text-white hover:bg-black hover:shadow-xl py-3 px-6 rounded-full top-56 right-11'
                      data-bcms-field={`articles[${i}].article-time`}
                      data-bcms-kind="text">
                      {items.time} read
                    </Link>
                    <h5 className='font-bold pt-6' data-bcms-field={`articles[${i}].article-title`} data-bcms-kind="text">{items.heading}</h5>
                    <h5 className='font-bold pt-1' data-bcms-field={`articles[${i}].article-subtitle`} data-bcms-kind="text">{items.heading2}</h5>
                    <div>
                      <h3 className='text-sm font-normal pt-6 pb-2 text-black/75 dark:text-white/75' data-bcms-field={`articles[${i}].article-source`} data-bcms-kind="text">
                        {items.name}
                      </h3>
                      <h3 className='text-sm font-normal pb-1 text-black/75 dark:text-white/75' data-bcms-field={`articles[${i}].article-date`} data-bcms-kind="text">
                        {items.date}
                      </h3>
                    </div>
                  </div>
                </div>
              ))}
        </Slider>
      </div>
    </section>
  )
}
export default Articles
