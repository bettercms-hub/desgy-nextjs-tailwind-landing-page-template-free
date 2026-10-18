import HeroSub from '@/app/components/SharedComponent/HeroSub'
import NotFound from '@/app/components/NotFound'
import { Metadata } from 'next'
import bcmsForgotPassword from '../../bcms-content/forgot-password.json'
import { bcms } from '../bcms-content'
import { BcmsSection, BcmsSections } from '@bettercms-ai/next/sections'
import { sectionsFor } from '@bettercms-ai/next'

export const metadata: Metadata = {
  title: '404 Page | Venus ',
}

const ErrorPage = () => {
  return (
    // As on home, the sections sit in main so the footer is never read as one of them.
    <main>
      {/* BetterCMS derived this 404 page as /forgot-password. */}
      <BcmsSections {...sectionsFor('forgot-password')}>
      <BcmsSection bind='404'><HeroSub title={bcms(bcmsForgotPassword, '404-h2-404', '404')} titleField='404-h2-404' /></BcmsSection>
      <BcmsSection bind='sec1'><NotFound /></BcmsSection>
      </BcmsSections>
    </main>
  )
}

export default ErrorPage
