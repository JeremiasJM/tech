'use client';

import Link from 'next/link';
import { useLoading } from './LoadingProvider';
import { useRouter, usePathname } from 'next/navigation';
import { ReactNode, MouseEvent } from 'react';

interface LoadingLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
  [key: string]: any;
}

export function LoadingLink({ href, children, ...props }: LoadingLinkProps) {
  const { setLoading } = useLoading();
  const router = useRouter();
  const pathname = usePathname();

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    // No mostrar loading si es la misma página
    if (href === pathname) return;
    
    // No mostrar loading para anclas o enlaces externos
    if (href.startsWith('#') || href.startsWith('http') || href.startsWith('mailto:')) return;
    
    e.preventDefault();
    setLoading(true);
    
    // Pequeño delay para asegurar que el loading se muestre
    setTimeout(() => {
      router.push(href);
    }, 100);
  };

  return (
    <Link href={href} {...props} onClick={handleClick}>
      {children}
    </Link>
  );
}