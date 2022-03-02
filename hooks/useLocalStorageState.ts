import React from "react";

export function useLocalStorageState<Type>(
  key: string,
  defaultValue: Type | null = null,
  // the = {} fixes the error we would get from destructuring when no argument was passed
  // Check https://jacobparis.com/blog/destructure-arguments for a detailed explanation
  { serialize = JSON.stringify, deserialize = JSON.parse } = {}
): [Type, React.Dispatch<React.SetStateAction<Type>>] {
  const [state, setState] = React.useState<Type>(() => {
    return typeof defaultValue === "function" ? defaultValue() : defaultValue;
  });

  const prevKeyRef = React.useRef(key);

  React.useEffect(() => {
    const valueInLocalStorage = window.localStorage.getItem(key);
    if (valueInLocalStorage) {
      try {
        setState(deserialize(valueInLocalStorage));
      } catch (error) {
        window.localStorage.removeItem(key);
      }
    }
  }, [setState, key, deserialize]);

  React.useEffect(() => {
    let initialState =
      typeof defaultValue === "function" ? defaultValue() : defaultValue;
    if (state !== initialState || state === null) {
      // TODO: Need to solve this slightly differently
      const prevKey = prevKeyRef.current;
      if (prevKey !== key) {
        window.localStorage.removeItem(prevKey);
      }
      prevKeyRef.current = key;
      window.localStorage.setItem(key, serialize(state));
    }
  }, [key, state, serialize, defaultValue]);

  return [state, setState];
}
