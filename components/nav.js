import Link from 'next/link'

const links = [
  { href: '/card', label: 'Cards Example' },
  { href: '/stepper', label: 'Stepper Example' },
]

export default function Nav() {
  return (
    <nav className="text-white">
      <ul className="flex justify-between items-center p-8">
        <li>
          <Link href="/">
            <a className="no-underline">Home</a>
          </Link>
        </li>
        <ul className="flex justify-between items-center space-x-4">
          {links.map(({ href, label }) => (
            <li key={`${href}${label}`}>
              <a href={href} className="btn-blue no-underline">
                {label}
              </a>
            </li>
          ))}
        </ul>
      </ul>
    </nav>
  )
}
