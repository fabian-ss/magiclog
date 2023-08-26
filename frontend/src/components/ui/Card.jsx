export function Card({children}) {
  return (
    <div className="bg-[#f8faf9ff] w-11/12 phone:w-fit px-6 pb-10 pt-4 rounded-sm border-2">
        {children} 
    </div>
  )
}

export default Card