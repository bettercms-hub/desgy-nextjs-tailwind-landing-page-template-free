import SignUp from '@/app/components/Auth/SignUp'
import Breadcrumb from '@/app/components/Common/Breadcrumb'
import { Metadata } from 'next'
import { BcmsSection, BcmsSections } from "@bettercms-ai/next/sections";
import { sectionsFor } from "@bettercms-ai/next";

export const metadata: Metadata = {
  title: 'Sign Up | Property',
}

const SignupPage = () => {
  return (
    <>
      <BcmsSections {...sectionsFor("signup")}>
      <BcmsSection bind="desgy"><Breadcrumb pageName='Sign Up Page' bcmsField='desgy-body-sign-up-pagehome-sign' /></BcmsSection>

      <BcmsSection bind="code:sec1"><SignUp /></BcmsSection>
      </BcmsSections>
    </>
  )
}

export default SignupPage
