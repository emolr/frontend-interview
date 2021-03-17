import { useEffect } from 'react';
import ResizeObserver from 'resize-observer-polyfill';

const useResizeCallback = (
  ref: React.RefObject<any>,
  callback: (instance: any | null) => void,
): void => {
  useEffect(() => {
    if (!ref.current) {
      return;
    }

    const observer = new ResizeObserver(() => {
      if (callback) {
        callback(ref.current);
      }
    });

    observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, [ref, callback]);
};

export default useResizeCallback;
