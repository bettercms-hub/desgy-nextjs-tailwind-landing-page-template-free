'use client'
import { usePathname } from 'next/navigation'
import bcmsSignin from '../../../../bcms-content/signin.json'
import bcmsSignup from '../../../../bcms-content/signup.json'
import bcmsDocumentation from '../../../../bcms-content/documentation.json'
import bcmsForgotPassword from '../../../../bcms-content/forgot-password.json'
import { bcms } from '../../../bcms-content'

// ponytail: BetterCMS derived the header and footer copy as fields of each page, so the chrome
// reads the page of the current route. `prefix` is that page's footer key prefix.
const routes: Record<string, { page: unknown; prefix: string }> = {
  '/signin': { page: bcmsSignin, prefix: 'desgy-' },
  '/signup': { page: bcmsSignup, prefix: 'desgy-' },
  '/documentation': { page: bcmsDocumentation, prefix: 'desgy-' },
}
// Every other route but / renders not-found, which BetterCMS derived as /forgot-password.
const notFound = { page: bcmsForgotPassword, prefix: '' }

export function useBcmsChrome() {
  const path = usePathname()
  // / has none of these fields: it renders the template's own copy, unbound.
  const route = routes[path] ?? (path === '/' ? null : notFound)
  const text = (field: string, fallback: string) => (route ? bcms(route.page, field, fallback) : fallback)
  return {
    prefix: route?.prefix ?? '',
    text,
    field: (field: string) => (route ? field : undefined),
    /** The attributes that declare `field` on the element rendering it. */
    bind: (field: string, kind = 'text') => (route ? { 'data-bcms-field': field, 'data-bcms-kind': kind } : {}),
    /** An anchor's `href`, read and declared. */
    href: (field: string, fallback: string) => ({
      href: text(field, fallback),
      ...(route ? { 'data-bcms-props': `${field}|url|href` } : {}),
    }),
  }
}
