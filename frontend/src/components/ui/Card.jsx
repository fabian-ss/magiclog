export function Card({children,style}) {
  return (
    <div className={style || "bg-[#f8faf9ff] tablet:w-[25rem] px-6 pb-10 pt-4 rounded-sm border-2"}>
        {children} 
    </div>
  )
}

export default Card