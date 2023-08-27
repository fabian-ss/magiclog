export function Label({children, htmlFor,style}) {
  return (
    <label 
    className={style || "block text-sm font-medium text-gray-400 mt-4"}
    htmlFor={htmlFor}>
        {children}
    </label>
  )
}

export default Label