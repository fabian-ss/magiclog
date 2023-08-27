export function Buttom({children,style}) {
  return (
    <button
        className={style||"relative inline-flex items-center rounded-sm bg-[#edeef0ff] px-10 py-2.5 text-sm font-semibold text-black shadow-sm hover:bg-[#e1edd7ff] hover:border-[#b6ce9eff] disabled:cursor-not-allowed border-2 border-[#cdd2db] mt-8"}
        >
        {children}
    </button>
  )
}

export default Buttom