import { useMemo } from 'react';
/* eslint-disable @typescript-eslint/indent */
export function setRef<T>(
  ref:
    | React.MutableRefObject<T | null>
    | ((instance: T | null) => void)
    | null
    | undefined,
  value: T | null,
): void {
  if (typeof ref === 'function') {
    ref(value);
  } else if (ref) {
    // eslint-disable-next-line no-param-reassign
    ref.current = value;
  }
}
/* eslint-enable @typescript-eslint/indent */

const useForkRef = (
  refA: React.Ref<unknown>,
  refB: React.Ref<unknown>,
): ((refValue: unknown) => void) | undefined => {
  return useMemo(() => {
    if (refA === null && refB === null) {
      return (): void => {};
    }

    return (refValue: unknown): void => {
      setRef(refA, refValue);
      setRef(refB, refValue);
    };
  }, [refA, refB]);
};

export default useForkRef;
