import { forwardRef } from "react"

export const Input = forwardRef((props,ref)=>{
  
    return (
      <input
      className=" pl-3 pr-4 py-2 border-2 rounded-sm w-full" 
      ref={ref}
      {...props}/>
    )
  
})


export default Input