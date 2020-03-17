import { useState } from "../setup.js";

export const useRender = function() {
  const [, setValue] = useState(Date.now());
  return () => setValue(Date.now());
};
