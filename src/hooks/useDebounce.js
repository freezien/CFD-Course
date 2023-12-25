import { useEffect, useRef, useState } from "react";

function useDebounce(value, delay) {
  const [debounceValue, setDebounceValue] = useState(value);
  const timeoutRef = useRef(null);

  useEffect(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      setDebounceValue(value);
    }, delay);

    return () => {
      clearTimeout(timeoutRef.current);
    };
  }, [value, delay]);

  return debounceValue;
}

export default useDebounce;
