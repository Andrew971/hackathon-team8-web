import { useEffect } from 'react';


function useOnClickOutside(ref:any,containerRef:any,handler:any) {

  useEffect(
    () => {
      const el = ref.current;
      const container = containerRef?containerRef.current:document;

      const listener = (event:any) => {
        // Do nothing if clicking ref's element or descendent elements
        if (!el || el.contains(event.target)) {
          return;
        }

        handler(event);
      };
      container.addEventListener('mousedown', listener);
      container.addEventListener('touchstart', listener);
      return () => {
        container.removeEventListener('mousedown', listener);
        container.removeEventListener('touchstart', listener);
      };
    },
    // Add ref and handler to effect dependencies
    // It's worth noting that because passed in handler is a new ...
    // ... function on every render that will cause this effect ...
    // ... callback/cleanup to run every render. It's not a big deal ...
    // ... but to optimize you can wrap handler in useCallback before ...
    // ... passing it into this hook.
    [ref, containerRef,handler]
  );
}




export default useOnClickOutside
