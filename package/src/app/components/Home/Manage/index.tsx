'use client'
import { useEffect, useState } from 'react'
import { Switch } from '@headlessui/react'
import Image from 'next/image'
import PlansSkeleton from '../../Skeleton/Plans'
import Link from 'next/link'
import bcmsHome from "../../../../../bcms-content/home.json";
import { bcms, bcmsRowsAs } from "../../../../bcms-content";

const Manage = () => {
  const [plans, setPlans] = useState<any[]>([])
  const [loading, setLoding] = useState(true)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/api/data')
        if (!res.ok) throw new Error('Failed to fetch')
        const data = await res.json()
        setPlans(data.PlansData)
      } catch (error) {
        console.error('Error fetching services:', error)
      } finally {
        setLoding(false)
      }
    }
    fetchData()
  }, [])

  const [enabled, setEnabled] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState<
    'yearly' | 'monthly'
  >('yearly')

  const toggleEnabled = () => {
    // Toggle the enabled state
    setEnabled((prevEnabled) => !prevEnabled)

    // Update selected category based on the switch position
    setSelectedCategory((prevCategory) =>
      prevCategory === 'yearly' ? 'monthly' : 'yearly'
    )
  }

  // The CMS plans over the fetched ones, kept in the fetched shape the cards render.
  const planRows: any[] = bcmsRowsAs(bcmsHome, 'plans', plans, { heading: 'plan-name', user: 'plan-unit', cta: 'plan-cta', monthly: 'plan-price-monthly', yearly: 'plan-price-yearly', profiles: 'plan-profiles', posts: 'plan-posts', templates: 'plan-templates', view: 'plan-view', support: 'plan-support' })
  const filteredData = planRows.map((plan) => ({
    ...plan,
    price: { monthly: plan.monthly ?? plan.price?.monthly, yearly: plan.yearly ?? plan.price?.yearly }[selectedCategory],
    features: Object.fromEntries(Object.keys(plan.features ?? {}).map((key) => [key, plan[key] ?? plan.features[key]])),
  }))

  return (
    <section id='services-section'>
      <div className='container mx-auto max-w-7xl px-4'>
        <h2 className='text-center ' data-bcms-field="servicessection-h2-manage-all-your-social" data-bcms-kind="text">{bcms(bcmsHome, "servicessection-h2-manage-all-your-social", 'Manage All Your Social Media Profiles From One Place.')}</h2>
        {/*  */}
        <div className='flex sm:block'>
          <div className='flex flex-col sm:flex-row gap-5 md:justify-evenly mt-20 items-start mx-auto'>
            <div className='flex gap-5 items-center justify-center md:justify-start'>
              <Image
                src={bcms(bcmsHome, "manage-perks[0].manage-perk-icon", '/images/manage/right.svg')}
                data-bcms-field="manage-perks[0].manage-perk-icon"
                data-bcms-kind="image"
                alt='right-icon'
                width={21}
                height={14}
              />
              <p className='text-lg font-semibold' data-bcms-field="manage-perks[0].manage-perk" data-bcms-kind="text">{bcms(bcmsHome, "manage-perks[0].manage-perk", 'Free 15-day trial')}</p>
            </div>
            <div className='flex gap-5 items-center justify-center md:justify-start'>
              <Image
                src={bcms(bcmsHome, "manage-perks[1].manage-perk-icon", '/images/manage/right.svg')}
                data-bcms-field="manage-perks[1].manage-perk-icon"
                data-bcms-kind="image"
                alt='right-icon'
                width={21}
                height={14}
              />
              <p className='text-lg font-semibold' data-bcms-field="manage-perks[1].manage-perk" data-bcms-kind="text">{bcms(bcmsHome, "manage-perks[1].manage-perk", 'Unlimited Team Members')}</p>
            </div>
            <div className='flex gap-5 items-center justify-center md:justify-start'>
              <Image
                src={bcms(bcmsHome, "manage-perks[2].manage-perk-icon", '/images/manage/right.svg')}
                data-bcms-field="manage-perks[2].manage-perk-icon"
                data-bcms-kind="image"
                alt='right-icon'
                width={21}
                height={14}
              />
              <p className='text-lg font-semibold' data-bcms-field="manage-perks[2].manage-perk" data-bcms-kind="text">{bcms(bcmsHome, "manage-perks[2].manage-perk", 'Cancel Anytime')}</p>
            </div>
          </div>
        </div>
        {/*  */}
        <div className='mt-6 relative'>
          <div className='dance-text xl:-ml-80 lg:-ml-80 md:-ml-80 -ml-52  text-center -rotate-[10deg] mb-5' data-bcms-field="servicessection-div-get-3-months-free" data-bcms-kind="text">{bcms(bcmsHome, "servicessection-div-get-3-months-free", 'get 3 months free')}</div>
          <Image
            src={bcms(bcmsHome, "servicessection-img-toggle-image", '/images/manage/toggle.svg')}
              data-bcms-field="servicessection-img-toggle-image"
              data-bcms-kind="image"
            alt='toggle-image'
            width={24}
            height={24}
            className='absolute left-[37%] top-8'
          />
          <div className='flex items-center justify-center'>
            <p className='text-sm font-medium mr-5' data-bcms-field="servicessection-p-billed-yearly" data-bcms-kind="richtext" dangerouslySetInnerHTML={{ __html: bcms(bcmsHome, "servicessection-p-billed-yearly", 'Billed Yearly') }} />
            <Switch
              checked={enabled}
              onChange={toggleEnabled}
              className='relative inline-flex h-6 w-11 items-center rounded-full bg-black'>
              <span className='sr-only' data-bcms-field="servicessection-span-toggle-billing-period" data-bcms-kind="text">{bcms(bcmsHome, "servicessection-span-toggle-billing-period", 'Toggle billing period')}</span>
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition ${
                  enabled ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </Switch>
            <p className='text-sm font-medium ml-5' data-bcms-field="servicessection-p-billed-monthly" data-bcms-kind="richtext" dangerouslySetInnerHTML={{ __html: bcms(bcmsHome, "servicessection-p-billed-monthly", 'Billed Monthly') }} />
          </div>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-16 gap-14 manage'>
          {loading
            ? Array.from({ length: 3 }).map((_, i) => <PlansSkeleton key={i} />)
            : filteredData.map((items, i) => (
                <div
                  className='shadow-manage-shadow border border-border text-center p-10 rounded-3xl'
                  key={i}>
                  <h5 className='mb-3' data-bcms-field={`plans[${i}].plan-name`} data-bcms-kind="text">{items.heading}</h5>
                  <p className='text-6xl font-extrabold mb-3' data-bcms-field={`plans[${i}].plan-price-${selectedCategory}`} data-bcms-kind="text">${items.price}</p>
                  <p className='text-sm font-medium mb-6' data-bcms-field={`plans[${i}].plan-unit`} data-bcms-kind="text">{items.user}</p>
                  <Link href={'#'}>
                    <button className='text-sm font-bold text-primary bg-transparent hover:bg-primary hover:text-white border-2 border-primary rounded-full py-4 px-12 mb-6 hover:cursor-pointer' data-bcms-field={`plans[${i}].plan-cta`} data-bcms-kind="text">
                      {items.cta ?? 'Start My 15-day Trial'}
                    </button>
                  </Link>
                  {/* Map through the features object and render each key-value pair dynamically */}
                  {Object.entries(items.features).map((value: any, index) => (
                    <p
                      className='text-sm font-medium text-darkgrey mb-3'
                      key={index}
                      data-bcms-field={`plans[${i}].plan-${value[0]}`}
                      data-bcms-kind="text">
                      {value}
                    </p>
                  ))}
                </div>
              ))}
        </div>
      </div>
    </section>
  )
}

export default Manage
