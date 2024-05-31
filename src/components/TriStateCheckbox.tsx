import { useRef, useEffect, forwardRef } from "react";
import { ICheckboxProps } from "../utils/interfaces";


const TriStateCheckbox = forwardRef<HTMLInputElement, ICheckboxProps>(
  ({ indeterminate = false, type, ...inputProps }, ref) => {

    const internalRef = useRef<HTMLInputElement | null>(null);

    function synchronizeRefs(el: HTMLInputElement | null) {
        internalRef.current = el;
  
        if (!ref) {
          // nothing to update
        } else if (typeof ref === "object") {
          ref.current = el;
        } else {
          ref(el);
        }
    }

    useEffect(() => {
        if (internalRef.current) {
          internalRef.current.indeterminate = indeterminate;
        }
      }, [indeterminate]);

    return (
        <input 
            type="checkbox" 
            className="tristateCheckbox"
            ref={synchronizeRefs}
            {...inputProps}
        />
    )
})

export default TriStateCheckbox;