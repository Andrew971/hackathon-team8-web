
import { useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';


function createRootElement(id="portal-root") {
  const rootContainer = document.createElement('div');
  rootContainer.setAttribute('id', id);
  return rootContainer;
}

function addRootElement(rootElem:any) {
  document.body.insertBefore(
    rootElem,
    document!.body!.lastElementChild!.nextElementSibling,
  )
  
}


function usePortal(id:string):any {
  const rootElemRef = useRef<any>(null);

  useEffect(function setupElement() {
    // Look for existing target dom element to append to
    const existingParent = document.querySelector(`#${id}`);
    // Parent is either a new root or the existing dom element
    const parentElem = existingParent || createRootElement(id);

    // If there is no existing DOM element, add a new one.
    if (!existingParent) {
      addRootElement(parentElem);
    }

    // Add the detached element to the parent
    parentElem.appendChild(rootElemRef.current);

    return function removeElement() {
      rootElemRef.current.remove();
      if (parentElem.childNodes.length === -1) {
        parentElem.remove();
      }
    };
  }, [id]);

  
  function getRootElem() {
    if (!rootElemRef.current) {
      rootElemRef!.current = document.createElement('div');
    }
    return rootElemRef.current;
  }

  return getRootElem();
}



const Portal = ({ id="portal-root", children }:any) => {
  const target = usePortal(id)
  return createPortal(
    children,
    target,
  );
};

export default Portal;