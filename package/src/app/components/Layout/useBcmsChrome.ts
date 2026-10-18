'use client'
import { usePathname } from 'next/navigation'
import bcmsSignin from '../../../../bcms-content/signin.json'
import bcmsSignup from '../../../../bcms-content/signup.json'
import bcmsDocumentation from '../../../../bcms-content/documentation.json'
import bcmsForgotPassword from '../../../../bcms-content/forgot-password.json'
import bcmsHome from '../../../../bcms-content/home.json'
import { bcms } from '../../../bcms-content'

// ponytail: BetterCMS derived the header and footer copy as fields of each page, so the chrome
// reads the page of the current route. `prefix` is that page's footer key prefix.
const routes: Record<string, { page: unknown; prefix: string }> = {
  '/signin': { page: bcmsSignin, prefix: 'desgy-' },
  '/signup': { page: bcmsSignup, prefix: 'desgy-' },
  '/documentation': { page: bcmsDocumentation, prefix: 'desgy-' },
  '/': { page: bcmsHome, prefix: '' },
}
// Every other route renders not-found, which BetterCMS derived as /forgot-password.
const notFound = { page: bcmsForgotPassword, prefix: '' }
const MISSING = '\u0000'

export function useBcmsChrome() {
  const path = usePathname()
  const route = routes[path] ?? notFound
  const text = (field: string, fallback: string) => bcms(route.page, field, fallback)
  // Pages were derived with different chrome fields (home has no nav lists), so a field is
  // declared only where its page holds it. The pulled snapshot decides; the {} stub declares none.
  const has = (field: string) => bcms(route.page, field, MISSING) !== MISSING
  return {
    prefix: route.prefix,
    text,
    field: (field: string) => (has(field) ? field : undefined),
    /** The attributes that declare `field` on the element rendering it. */
    bind: (field: string, kind = 'text') => (has(field) ? { 'data-bcms-field': field, 'data-bcms-kind': kind } : {}),
    /** An anchor's `href`, read and declared. */
    href: (field: string, fallback: string) => ({
      href: text(field, fallback),
      ...(has(field) ? { 'data-bcms-props': `${field}|url|href` } : {}),
    }),
  }
}
