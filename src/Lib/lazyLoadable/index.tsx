import React from 'react';


function lazyLoadable (factory:any) {
  const Component:any = React.lazy(factory);
  Component.preload= factory;
  return Component;
}


export default lazyLoadable;