import { useState } from 'react';

const useHTTP = () => {
  const [isLoading, setIsLoading] = useState(null);
  const [error, setError] = useState(null);

  const getJSON = async (url, errorMsg = 'Something went wrong') => {
    setIsLoading(true);
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);
      return await response.json();
    } catch (error) {
      setError(error);
    }
    setIsLoading(false);
  };

  return { isLoading, error, getJSON };
};

export default useHTTP;
