import { useRef, useEffect } from 'react';

const useInterval = (callback, delay, deps = []) => {
  const intervalRef = useRef();
  const callbackRef = useRef(callback);

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  useEffect(() => {
    if (typeof delay === 'number') {
      intervalRef.current = setInterval(() => callbackRef.current(), delay);

      return () => clearInterval(intervalRef.current);
    }
  }, [delay, ...deps]);

  return intervalRef;
};

export default useInterval;
