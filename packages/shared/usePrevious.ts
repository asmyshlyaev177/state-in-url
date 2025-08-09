import React from "react";

export function usePrevious<T>(value: T) {
  const ref = React.useRef<T>(); // Create a mutable ref

  React.useEffect(() => {
    ref.current = value;
  }, [value]);

  return ref.current;
}
