import { useEffect } from "react";
import ResizeObserver from 'resize-observer-polyfill'

export const useResizeCallback = (
  ref: React.RefObject<any>,
  callback: ((instance: any | null) => void)
) => {
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

  return;
};
