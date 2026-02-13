'use client';

import { useLoading } from './LoadingProvider';
import { LoadingOverlay } from './PageSkeleton';
import { ReactNode } from 'react';

interface LoadingWrapperProps {
  children: ReactNode;
}

export function LoadingWrapper({ children }: LoadingWrapperProps) {
  const { isLoading } = useLoading();

  return (
    <>
      {children}
      {isLoading && <LoadingOverlay />}
    </>
  );
}