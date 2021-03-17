import { useEffect } from 'react';
import ResizeObserver from 'resize-observer-polyfill';

const useResizeCallback = (
  ref: React.RefObject<HTMLElement>,
  callback: (instance: unknown | null) => void,
): void => {
  useEffect(() => {
    if (!ref.current) {
      return (): void => {};
    }

    const observer = new ResizeObserver(() => {
      if (callback) {
        callback(ref.current);
      }
    });

    observer.observe(ref.current);

    return (): void => {
      observer.disconnect();
    };
  }, [ref, callback]);
};

export default useResizeCallback;
