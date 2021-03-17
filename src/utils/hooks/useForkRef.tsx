import { useMemo } from 'react';

export function setRef<T>(
  ref:
  | React.MutableRefObject<T | null>
  | ((instance: T | null) => void)
  | null
  | undefined,
  value: T | null,
): void {
  /* eslint-disable no-param-reassign */
  if (typeof ref === 'function') {
    ref(value);
  } else if (ref) {
    ref.current = value;
  }
  /* eslint-enable no-param-reassign */
}

const useForkRef = (
  refA: React.Ref<unknown>,
  refB: React.Ref<unknown>,
): any => {
  return useMemo(() => {
    if (refA === null && refB === null) {
      return;
    }

    return (refValue: any) => {
      setRef(refA, refValue);
      setRef(refB, refValue);
    };
  }, [refA, refB]);
};

export default useForkRef;
