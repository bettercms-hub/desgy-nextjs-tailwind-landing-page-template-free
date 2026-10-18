'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { footerlinks } from '@/app/types/footerlinks'
import { useBcmsChrome } from '../useBcmsChrome'

// The field each footer column's heading and links were derived as, by column and row.
// ponytail: rows come from FooterLinksData, so a row an editor adds in the CMS does not render.
const button = (path: string) => ({ label: `${path}.label`, href: `${path}.href` })
const columns: { heading: string; link: (j: number) => { label: string; href?: string } }[] = [
  { heading: 'p-menu', link: (j) => ({ label: ['a-about-us', 'a-team', 'a-faq', 'a-blog'][j] }) },
  { heading: 'p-category', link: (j) => button(`group-design[${j}].a-design`) },
  { heading: 'p-pages', link: (j) => button(`group-404[${j}].a-404`) },
  { heading: 'p-others', link: (j) => button(['a-styleguide', 'a-changelog'][j]) },
]
const socials = ['/images/footer/vec.svg', '/images/footer/twitter.svg', '/images/footer/instagram.svg']

const footer = () => {
  // fetch data

  const [footerlinks, setFooterLinks] = useState<footerlinks[]>([])
  const chrome = useBcmsChrome()
  const P = chrome.prefix
  const social = (k: number, href: string) => ({
    link: chrome.href(`${P}group-facebook-link[${k}].a-facebook-href`, href),
    img: {
      src: chrome.text(`${P}group-facebook-link[${k}].img-facebook`, socials[k]),
      ...chrome.bind(`${P}group-facebook-link[${k}].img-facebook`, 'image'),
    },
  })

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/api/data')
        if (!res.ok) throw new Error('Failed to fetch')
        const data = await res.json()
        setFooterLinks(data.FooterLinksData)
      } catch (error) {
        console.error('Error fetching services:', error)
      }
    }
    fetchData()
  }, [])

  return (
    <div className='bg-black' id='first-section'>
      <div className='container mx-auto max-w-2xl pt-48 pb-16 px-4 sm:px-6 lg:max-w-7xl lg:px-8'>
        <div className='grid grid-cols-1 gap-y-10 gap-x-16 sm:grid-cols-2 lg:grid-cols-12 xl:gap-x-8'>
          {/* COLUMN-1 */}
          <div className='col-span-4'>
            <h4 className='text-white text-3xl leading-9 mb-4 lg:mb-20' {...chrome.bind(`${P}h4-desgy-solutions`)}>
              {chrome.text(`${P}h4-desgy-solutions`, 'Desgy Solutions')}
            </h4>
            <div className='flex items-center gap-4'>
              <div className='footer-icons'>
                <Link {...social(0, 'https://facebook.com').link}>
                  <Image
                    {...social(0, 'https://facebook.com').img}
                    alt='facebook'
                    width={15}
                    height={20}
                  />
                </Link>
              </div>
              <div className='footer-icons'>
                <Link {...social(1, 'https://twitter.com').link}>
                  <Image
                    {...social(1, 'https://twitter.com').img}
                    alt='twitter'
                    width={25}
                    height={20}
                  />
                </Link>
              </div>
              <div className='footer-icons'>
                <Link {...social(2, 'https://instagram.com').link}>
                  <Image
                    {...social(2, 'https://instagram.com').img}
                    alt='instagram'
                    width={25}
                    height={20}
                  />
                </Link>
              </div>
            </div>
          </div>
          {/* CLOUMN-2/3 */}
          {footerlinks.map((item, i) => (
            <div key={i} className='group relative col-span-2'>
              <p
                className='text-white text-xl font-extrabold mb-9'
                {...chrome.bind(P + columns[i].heading, 'richtext')}
                dangerouslySetInnerHTML={{ __html: chrome.text(P + columns[i].heading, item.section) }}
              />
              <ul>
                {item.links.map((link, j) => (
                  <li key={j} className='mb-5'>
                    <Link
                      {...(columns[i].link(j).href
                        ? chrome.href(P + columns[i].link(j).href, `${link.href}`)
                        : { href: `${link.href}` })}
                      className='text-white text-lg font-normal mb-6 space-links hover:text-white/60 hover:underline'
                      {...chrome.bind(P + columns[i].link(j).label)}>
                      {chrome.text(P + columns[i].link(j).label, link.label)}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      {/* All Rights Reserved */}
      <div className='mx-auto max-w-2xl lg:max-w-7xl'>
        <div className='pt-5 pb-5 px-4 sm:px-6 lg:px-4 border-t border-white/30'>
          <div className='mt-4 grid grid-cols-1 gap-y-10 gap-x-16 sm:grid-cols-2 xl:gap-x-8'>
            <div>
              <p
                className='text-center md:text-start text-white text-lg'
                {...chrome.bind(`${P}p-2025-all-rights-reserved`, 'richtext')}
                dangerouslySetInnerHTML={{
                  __html: chrome.text(
                    `${P}p-2025-all-rights-reserved`,
                    '@2025 - All Rights Reserved by <a href="https://getnextjstemplates.com/" target="_blank" class="hover:text-white/60 hover:underline"> GetNextJsTemplates.com</a>'
                  ),
                }}
              />
            </div>
            <div className='flex justify-center md:justify-end'>
              <Link href='/'>
                <p
                  className='text-base text-white pr-6 hover:text-white/60 hover:underline'
                  {...chrome.bind(`${P}p-privacy-policy`, 'richtext')}
                  dangerouslySetInnerHTML={{ __html: chrome.text(`${P}p-privacy-policy`, 'Privacy policy') }}
                />
              </Link>
              <Link href='/'>
                <p
                  className='text-base text-white pl-6 border-solid border-l border-footer hover:text-white/60 hover:underline'
                  {...chrome.bind(`${P}p-terms-conditions`, 'richtext')}
                  dangerouslySetInnerHTML={{ __html: chrome.text(`${P}p-terms-conditions`, 'Terms &amp; conditions') }}
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default footer
