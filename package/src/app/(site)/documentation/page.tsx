import { Documentation } from '@/app/components/Documentation/Documentation'
import { Metadata } from 'next'
import { BcmsSection, BcmsSections } from "@bettercms-ai/next/sections";
import { sectionsFor } from "@bettercms-ai/next";
export const metadata: Metadata = {
  title: 'Featurs | Desgy',
}

export default function Page() {
  return (
    <>
      <BcmsSections {...sectionsFor("documentation")}>
      <BcmsSection bind="desgy"><Documentation /></BcmsSection>
      </BcmsSections>
    </>
  )
}
