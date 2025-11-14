import { useEffect, useState } from 'react';
import { PokemonObject } from '../types/pokemon';


interface UseFetchResult {
  data: PokemonObject;
  error: Error | undefined;
  isLoading: boolean;
  fetchData: () => Promise<void>
}

interface FetchOptions {
  method?: string;
  headers?: Record<string, string>;
  immediate?: boolean;
}

export function usePokemonApi(url: string, options: FetchOptions = {}): UseFetchResult {
  const [data, setData] = useState<PokemonObject>({ count: 0, next: null, previous: null, results: [] });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | undefined>(); 


  const fetchData = async () => {
    setIsLoading(true);
    setError(undefined);
    setData({ count: 0, next: null, previous: null, results: [] });

    try {
      const res = await fetch(url, options);

      if (!res.ok) {
        throw new Error(`HTTP error ${res.status}`);
      }

      const json = await res.json();
      setData(json);
    } catch (error: unknown) {
      if (error instanceof Error) {
        setError(error);
      }
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (options?.immediate !== false) {
    fetchData();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url]);

  return { fetchData, data, isLoading, error };
}