import { useState } from "react";

const useInput = (type, initialValue) =>{
    const [value,setValue] = useState(initialValue);
    const onChange = (event) => {
         event.preventDefault();
         setValue(event.target.value)
    }
    return{value,onChange,type}
}
export default useInput;