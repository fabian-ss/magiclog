export function Buttom({children}) {
  return (
    <button
        className="relative inline-flex items-center rounded-sm bg-[#edeef0ff] px-8 py-2.5 text-sm font-semibold text-black shadow-sm hover:bg-[#cdd2db] disabled:cursor-not-allowed border-2 border-[#cdd2db] mt-8" 
        >
        {children}
    </button>
  )
}

export default Buttom