import { forwardRef } from "react"

export const Input = forwardRef((props,ref)=>{
  
    return (
      <input
      className="phone:w-[24rem] pl-3 pr-4 py-2 border-2 rounded-sm" 
      ref={ref}
      {...props}/>
    )
  
})


export default Input