import { registerUniformComponent } from '@uniformdev/canvas-react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

const NavMenu: React.FC = () => (
  <ul className="list-reset lg:flex justify-end flex-1 items-center space-x-2 lg:mr-4">
    <NavItem href="/" label="Home" />
    <NavItem href="/developers" label="For Developers" />
    <NavItem href="/marketers" label="For Marketers" />
    <NavItem href="/registration" label="Registration" />
    <NavItem href="/?utm_campaign=unfrmconf" label="Campaign" />
  </ul>
);

type NavItemProps = {
  href: string;
  label: string;
};

const NavItem: React.FC<NavItemProps> = ({ href, label }) => {
  const router = useRouter();
  const prefix = router.pathname.includes('pmap') ? '/pmap' : '';
  const isActive = router.asPath === prefix + href;

  return (
    <li>
      <Link
        prefetch={false}
        href={prefix + href}
        className={`inline-block py-2 px-4 no-underline ${isActive ? 'font-bold text-black' : 'text-black hover:text-gray-800 hover:text-underline'}`}
      >
        {label}
      </Link>
    </li>
  );
};

registerUniformComponent({
  type: 'navmenu',
  component: NavMenu,
});

export default NavMenu;
