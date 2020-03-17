const storage = {};

export const setup = hooks => Object.assign(storage, hooks);

const hook = name => {
  return function(...args) {
    if (!(name in storage && typeof storage[name] === "function")) {
      throw new Error(`"${name}" hook missing. Run flyhook.setup({${name}})`);
    }
    return storage[name](...args);
  };
};

export const useCallback = hook("useCallback");
export const useContext = hook("useContext");
export const useDebugValue = hook("useDebugValue");
export const useEffect = hook("useEffect");
export const useImperativeHandle = hook("useImperativeHandle");
export const useLayoutEffect = hook("useLayoutEffect");
export const useMemo = hook("useMemo");
export const useReducer = hook("useReducer");
export const useRef = hook("useRef");
export const useState = hook("useState");
