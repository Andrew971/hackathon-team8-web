import { useEffect } from 'react';



function useLazyDataTable(ref:any, rootMargin:any = '0px', _state:any) {
  // State and setter for storing whether element is visible


  useEffect(() => {
    const observedElement = ref.current;
    // //console.log(ref)
    for ( let row of observedElement.rows){
      // //console.log(row.index)
      if (('IntersectionObserver' in window)) {

      const observer = new IntersectionObserver(
        ([entry]) => {
          // Update our state when observer callback fires
          // //console.log(entry)

          if(entry.isIntersecting){
            row.classList.remove('hide')
          }else{
            row.classList.add('hide')

          }
          // //console.log(entry)
          // setIntersecting(entry.isIntersecting);
        },
        {
          rootMargin
        }
      );

      if (row) {
        observer.observe(row);
      }
      observer.unobserve(observedElement);
    }
    }


    return () => {

    };
  }, [ref,rootMargin]); // Empty array ensures that effect is only run on mount and unmount

  return ;
}




export default useLazyDataTable
