import React from 'react'
import Hero from '@/app/components/Home/Hero'
import Aboutus from '@/app/components/Home/AboutUs'
import Dedicated from '@/app/components/Home/Dedicated'
import Digital from '@/app/components/Home/Digital'
import Beliefs from '@/app/components/Home/Beliefs'
import Work from '@/app/components/Home/Work'
import Team from '@/app/components/Home/Team'
import Featured from '@/app/components/Home/Featured'
import Manage from '@/app/components/Home/Manage'
import FAQ from '@/app/components/Home/FAQ'
import Testimonial from '@/app/components/Home/Testimonials'
import Articles from '@/app/components/Home/Articles'
import Join from '@/app/components/Home/Joinus'
import Insta from '@/app/components/Home/Insta'
import { Metadata } from 'next'
import { BcmsSection, BcmsSections } from "@bettercms-ai/next/sections";
import { sectionsFor } from "@bettercms-ai/next";

export const metadata: Metadata = {
  title: 'Desgy Solutions',
}

export default function Home() {
  return (
    <main>
      <BcmsSections {...sectionsFor("home")}>
      <BcmsSection bind="sec0"><Hero /></BcmsSection>
      <BcmsSection bind="sec1"><Aboutus /></BcmsSection>
      <BcmsSection bind="sec2"><Dedicated /></BcmsSection>
      <BcmsSection bind="sec3"><Digital /></BcmsSection>
      <BcmsSection bind="sec4"><Beliefs /></BcmsSection>
      <BcmsSection bind="sec5"><Work /></BcmsSection>
      <BcmsSection bind="sec6"><Team /></BcmsSection>
      <BcmsSection bind="sec7"><Featured /></BcmsSection>
      <BcmsSection bind="sec8"><Manage /></BcmsSection>
      <BcmsSection bind="sec9"><FAQ /></BcmsSection>
      <BcmsSection bind="sec10"><Testimonial /></BcmsSection>
      <BcmsSection bind="sec11"><Articles /></BcmsSection>
      <BcmsSection bind="sec12"><Join /></BcmsSection>
      <BcmsSection bind="sec13"><Insta /></BcmsSection>
      </BcmsSections>
    </main>
  )
}
