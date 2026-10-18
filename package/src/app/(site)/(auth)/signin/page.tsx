import Signin from '@/app/components/Auth/SignIn'
import Breadcrumb from '@/app/components/Common/Breadcrumb'
import { Metadata } from 'next'
import { BcmsSection, BcmsSections } from "@bettercms-ai/next/sections";
import { sectionsFor } from "@bettercms-ai/next";

export const metadata: Metadata = {
  title: 'Sign In | Property',
}

const SigninPage = () => {
  return (
    <>
      <BcmsSections {...sectionsFor("signin")}>
      <BcmsSection bind="desgy"><Breadcrumb pageName='Sign In Page' bcmsField='desgy-body-sign-in-pagehome-sign' /></BcmsSection>

      <BcmsSection bind="code:sec1"><Signin /></BcmsSection>
      </BcmsSections>
    </>
  )
}

export default SigninPage
