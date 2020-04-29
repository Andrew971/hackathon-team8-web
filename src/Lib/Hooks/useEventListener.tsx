import { useRef, useEffect } from 'react';
// import PropTypes from 'prop-types'



function useEventListener(eventName:any, handler:any, ref:any = document){
  // Create a ref that stores handler
  const savedHandler = useRef((param:any)=>param);

  // Update ref.current value if handler changes.
  // This allows our effect below to always get latest handler ...
  // ... without us needing to pass it in effect deps array ...
  // ... and potentially cause effect to re-run every render.
  useEffect(() => {
    savedHandler.current = handler;
  }, [handler]);

  useEffect(
    () => {
      const element = ref.current || ref
      // Make sure element supports addEventListener
      const isSupported = element && element.addEventListener;
      if (!isSupported) return;
      let eventListener:any
      // Create event listener that calls handler function stored in ref
      if(savedHandler && typeof savedHandler.current === "function"){
        eventListener = (event:any) => savedHandler.current(event)
      }
      // Add event listener
      element.addEventListener(eventName, eventListener);

      // Remove event listener on cleanup
      return () => {
        element.removeEventListener(eventName, eventListener);
      };
    },
    [eventName, ref] // Re-run if eventName or element changes
  );
};


// useEventListener.propTypes = {
//   eventName: PropTypes.object.isRequired,
//   handler: PropTypes.string.isRequired,
//   ref: PropTypes.object,

// }


export default useEventListener
