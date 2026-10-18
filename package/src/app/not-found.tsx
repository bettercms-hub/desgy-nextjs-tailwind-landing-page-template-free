import HeroSub from '@/app/components/SharedComponent/HeroSub'
import NotFound from '@/app/components/NotFound'
import { Metadata } from 'next'
import bcmsForgotPassword from '../../bcms-content/forgot-password.json'
import { bcms } from '../bcms-content'

export const metadata: Metadata = {
  title: '404 Page | Venus ',
}

const ErrorPage = () => {
  return (
    <>
      <HeroSub title={bcms(bcmsForgotPassword, '404-h2-404', '404')} titleField='404-h2-404' />
      <NotFound />
    </>
  )
}

export default ErrorPage
