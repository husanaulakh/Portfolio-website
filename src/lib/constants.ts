import type { LucideIcon } from 'lucide-react';
import { Home, Briefcase, User, Mail, FolderKanban } from 'lucide-react';

export interface NavLink {
  href: string;
  label: string;
  icon: LucideIcon;
}

export const NAV_LINKS: NavLink[] = [
  { href: '/', label: 'Home', icon: Home },
  { href: '/about', label: 'About', icon: User },
  { href: '/projects', label: 'Projects', icon: FolderKanban },
  { href: '/work-experience', label: 'Work Experience', icon: Briefcase },
  { href: '/contact', label: 'Contact', icon: Mail },
];
