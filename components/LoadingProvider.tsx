'use client';

import { createContext, useContext, useState, useEffect, Suspense } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

interface LoadingContextType {
  isLoading: boolean;
  setLoading: (loading: boolean) => void;
}

const LoadingContext = createContext<LoadingContextType>({
  isLoading: false,
  setLoading: () => {},
});

  const [isLoading, setIsLoading] = useState(false);

  function ParamsListener() {
    const pathname = usePathname();
    const searchParams = useSearchParams();
    useEffect(() => {
      setIsLoading(false);
    }, [pathname, searchParams]);
    return null;
  }

  const setLoading = (loading: boolean) => {
    setIsLoading(loading);
  };

  return (
    <LoadingContext.Provider value={{ isLoading, setLoading }}>
      <Suspense fallback={null}>
        <ParamsListener />
      </Suspense>
      {children}
    </LoadingContext.Provider>
  );
}

export const useLoading = () => useContext(LoadingContext);