import { useRef } from "../setup.js";
import { useRender } from "./useRender.js";

export const useTimer = function(millis = 1000, run = true) {
  const render = useRender();
  const ref = useRef({ value: 0, date: Date.now(), run });

  const tick = () => {
    setTimeout(() => {
      const { value, date, run } = ref.current;
      const now = Date.now();
      if (now - date >= (value + 1) * millis) {
        ref.current.value = Math.floor((now - date) / millis);
        ref.current.date = now;
        render();
      }
      if (run) tick();
    }, 0);
  };

  const setValue = newValue => {
    ref.current.date = Date.now() - newValue * millis;
    ref.current.value = newValue;
    render();
  };

  const toggle = runValue => {
    const prevValue = ref.current.run;
    ref.current.run = typeof runValue === "undefined" ? !prevValue : !!runValue;
    if (!prevValue && ref.current.run) tick();
  };

  if (ref.current.run) tick();

  return [ref.current.value, setValue, toggle];
};
