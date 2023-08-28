import React,{ useEffect, useState } from "react";
import { useGetProductsQuery } from "../../api/apiSlice";
import { Card, Input } from "../ui/index";

function ProductsList({...props}) {

  const { data: products,isError,isLoading,error,isSuccess } = useGetProductsQuery()
  
  const [textInput,setTextInput] = useState('')
  const [show,setShow] = useState(false)


  const [preload,setPreload] =  useState(products===undefined ? [{}] : products )

  const filtered = preload.filter(product => {

    return (product.price >= props.minNumber && product.price <= props.sliceValue && product.price > 0 && (product.name.includes(textInput) || product.sku.includes(textInput)) && product.count > 0 );
    })

  useEffect(()=>{
    props.setMinNumber(Math.min.apply(Math, products?.map(function (o) {return o.price;})))
    props.setMaxNumber(Math.max.apply(Math, products?.map(function (o) {return o.price;})))
    setShow(true)
    props.setSliceValue(Math.max.apply(Math, products?.map(function (o) {return o.price;}))) 
  },[isSuccess])


  const onchangeTextInput =(text)=>{
    console.log(text);
    setTextInput(text)
  }

  if (isLoading) return(
    <div className="w-11/12">
    <div className="flex justify-center pt-10 text-2xl">Loading...</div>
  </div>
  );
  else if (isError) return (
  <div className="w-11/12">
    <div className="flex justify-center pt-10">Error: {error.message ??"Hubo un error al cargardar los datos"}</div>
  </div>
  )

  return (

    <div className="flex flex-col w-screen h-screen overflow-auto phone:items-start phone:pl-4 items-center border-b-2 border-y-black ">
      <div className="my-5 px-4 phone:w-[90%]">
        <Input icon='search'
          placeholder='Buscar por nombre/Sku'
          className="phone:w-[95%] tablet:w-[70%]  pl-3 pr-4 py-2 border-2 rounded-sm"
          onChange={(e) => onchangeTextInput(e.target.value)}
        />

      </div>
    <div className="flex flex-wrap justify-center items-center text-center w-fit h-fit mx-1  overflow-hidden">


      { show  === true ? 
      filtered.map(product => {
         return (
           <Card style={"flex-wrap pt-4 flex my-1 flex-col justify-center items-center mx-2 text-center"} key={product.id}>
           <img src="https://picsum.photos/id/237/100/100" width={50} height={50} />
           <div>
             <h1 className="phone:w-[180px] w-[160px] h-[30px] truncate py-5 font-bold">
               {product.name}
             </h1>
             <h2 className="phone:w-[180px] w-[160px] h-[30px] truncate py-1 font-semibold">
               {product.sku}
             </h2>
             <h3 className="phone:w-[180px] w-[160px] h-[30px] truncate py-1 font-semibold">
               precio: ${product.price}
             </h3> 
             <h3 className="phone:w-[180px] w-[160px] h-[30px] truncate font-semibold">
               cantidad: {product.count}
             </h3> 
           </div>
           </Card>
         );
       }) :null 
      
    }

  </div>
  </div>
  )
}

export default ProductsList