import Link from 'next/link'

type LogoProps = { label?: string; href?: string; field?: string; hrefField?: string }

const Logo: React.FC<LogoProps> = ({ label = 'Desgy Solutions', href = '/', field, hrefField }) => {
  return (
    <Link
      href={href}
      className='text-3xl font-semibold'
      data-bcms-field={field}
      data-bcms-kind={field && 'text'}
      data-bcms-props={hrefField && `${hrefField}|url|href`}>
      {label}
    </Link>
  )
}

export default Logo
