import { useEffect, useState } from 'react';

/**
 * Hook genérico para consumir a camada de serviço assíncrona.
 * Mantém `data`, `isLoading` e `error`, prontos para quando o
 * serviço passar a consultar uma API REST real.
 */
export function useDashboardData<T>(fetcher: () => Promise<T>, deps: unknown[] = []) {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    let active = true;
    setIsLoading(true);
    fetcher()
      .then((result) => {
        if (active) setData(result);
      })
      .catch((err) => {
        if (active) setError(err instanceof Error ? err : new Error('Erro desconhecido'));
      })
      .finally(() => {
        if (active) setIsLoading(false);
      });
    return () => {
      active = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  return { data, isLoading, error };
}
