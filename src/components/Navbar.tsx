const NAV_ITEMS = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/asad-junaid-1aa9882bb/',
    external: true,
  },
  {
    label: 'Github',
    href: 'https://github.com/asadjunaidkhan',
    external: true,
  },
  { label: 'UI/UX designs', href: '#ui-ux-wireframes' },
  { label: 'Full Stack development' },
  { label: 'AI/ML' },
];

/**
 * Navbar pill that hangs down from the top edge of the hero container,
 * centered horizontally.
 */
export default function Navbar() {
  return (
    <nav className="absolute top-0 left-1/2 -translate-x-1/2 z-20 max-w-[calc(100vw-1rem)] overflow-x-auto">
      <ul className="flex items-center gap-3 sm:gap-5 md:gap-8 lg:gap-10 bg-black rounded-b-2xl md:rounded-b-3xl px-4 py-2 md:px-8 list-none m-0">
        {NAV_ITEMS.map((item) => (
          <li key={item.label}>
            {item.href ? (
              <a
                href={item.href}
                target={item.external ? '_blank' : undefined}
                rel={item.external ? 'noreferrer' : undefined}
                className="text-[9px] sm:text-[11px] md:text-sm transition-colors duration-300 whitespace-nowrap cursor-pointer"
                style={{ color: 'rgba(225, 224, 204, 0.8)' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#E1E0CC')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(225, 224, 204, 0.8)')}
              >
                {item.label}
              </a>
            ) : (
              <span
                className="text-[9px] sm:text-[11px] md:text-sm whitespace-nowrap cursor-default"
                style={{ color: 'rgba(225, 224, 204, 0.4)' }}
              >
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}
