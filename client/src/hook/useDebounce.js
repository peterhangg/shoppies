import { useState, useEffect } from "react";

const useDebounce = (input, ms) => {
  const [debounce, setDebounce] = useState(null);

  useEffect(() => {
    const timeout = setTimeout(() => setDebounce(input), ms);
    return () => clearTimeout(timeout);
  }, [input, ms]);

  return debounce;
}

export default useDebounce;