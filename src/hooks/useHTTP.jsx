import { useState } from 'react';

const useHTTP = () => {
  const [isLoading, setIsLoading] = useState(null);
  const [error, setError] = useState(null);

  const getJSON = async (url, errorMsg = 'Something went wrong', consume) => {
    setIsLoading(true);
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);
      const data = await response.json();
      consume(data);
    } catch (error) {
      setError(error);
    }
    setIsLoading(false);
  };

  return { isLoading, error, getJSON };
};

export default useHTTP;
