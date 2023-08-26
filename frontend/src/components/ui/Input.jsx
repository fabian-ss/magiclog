import { forwardRef } from "react"

export const Input = forwardRef((props,ref)=>{
  
    return (
      <input type="Text" 
      className="phone:pr-40 pl-3 py-2 border-2 rounded-sm " 
      ref={ref}
      {...props}/>
    )
  
})


export default Input