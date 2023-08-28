import { useState } from "react";
import { useGetProductsQuery } from "../../api/apiSlice";
import { Input } from "../ui/index";


function LeftBar({ ...props }) {

  const onchangeSliceValue = (value) => {
    props.setSliceValue(Number(value))
  }

  const onchangeComprador = () => {
    props.setCtrlProducts(true)

  }

  const onchangeInventaripo = () => {
    props.setCtrlInventario(true)
    props.setCtrlProducts(false)
  }

  return (
    <div className='mid:w-[13rem] mid:h-screen mid:px-2 px-10 border-l-2 border-2 w-screen'>

        <h1 className="my-3 text-center phone:text-start py-2 phone:text-3xl text-4xl font-bold">
          {props.token !== null ? props.token.role : "Comprador" }
        </h1>

        <button onClick={onchangeComprador} className="">
        <h1 className="my-3 text phone:mx-0 mx-10 py-2 text-2xl font-semibold hover:bg-slate-200 px-2 rounded-md ">
          Productos
        </h1>
      </button>

      {props.ctrlProducts === true ?  
      <div>

        <div className="phone:px-2 mt-3">
          <h1 className="text-center">Filtro</h1>
        </div>

        <div className="flex justify-between phone:px-2 mt-8  flex-col phone:flex-row items-center">
          <h1>precios</h1>
          <p>{props.sliceValue}</p>
        </div>

        <div className="phone:px-2 ">

          <Input  className="h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer my-4 w-full "
            type="range"
            min={props.minNumber}
            max={props.maxNumber}
            value={props.sliceValue}
            onChange={(e) => {
              onchangeSliceValue(e.target.value)
            }}
          />

        </div>

        <div className="flex justify-between px-2">
          <h1>{props.minNumber}</h1>
          <p>{props.maxNumber}</p>
        </div>
      </div>      
      : null}

    
        <button onClick={onchangeInventaripo} className="">
        <h1 className="my-3 text phone:mx-0 mx-10 py-2 text-2xl font-semibold hover:bg-slate-200 px-2 rounded-md">
          Inventario
        </h1>
      </button>


    </div>
  )
}

export default LeftBar