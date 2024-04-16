import { useState } from 'react';

export interface RequestConfig {
  url: string;
  method?: string;
  headers?: HeadersInit;
  body?: BodyInit | null;
}

const useHTTP = () => {
  const [isLoading, setIsLoading] = useState<null | boolean>(null);
  const [error, setError] = useState<null | Error>(null);

  const getJSON = async (
    requestConfig: RequestConfig,
    errorMsg = 'Something went wrong',
    consume: (data: string) => void,
  ) => {
    setIsLoading(true);
    try {
      const response = await fetch(requestConfig.url, {
        method: requestConfig.method,
        headers: requestConfig.headers,
        body: requestConfig.body,
      });
      if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);
      const data = await response.json();
      consume(data);
    } catch (error) {
      if (error instanceof Error) {
        setError(error);
      } else {
        setError(new Error('An unknown error occurred'));
      }
    }
    setIsLoading(false);
  };

  return { isLoading, error, getJSON };
};

export default useHTTP;
