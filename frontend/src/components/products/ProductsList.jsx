import { useGetProductsQuery } from "../../api/apiSlice";
import { Card } from "../ui/index";

function ProductsList() {

  const { data: products,isError,isLoading,error } = useGetProductsQuery()


  if (isLoading) return <div>Loading...</div>;
  else if (isError) return <div>Error: {error.message}</div>

  return (
    <div className="flex flex-wrap justify-center items-center text-center my-5 nx-5">

     {products?.data !== 0  ? products.map(product => (
      <Card style={"px-6 pt-4 pb-2 rounded-sm border-2 flex my-1 flex-col justify-center items-center text-center mx-2 "} key={product.id}>
      <img src="https://picsum.photos/id/237/100/100" width={50} height={50} />
      <div>
        <h1 className="w-[180px] h-[30px] truncate px-4 py-5 font-bold">
          {product.name}
        </h1>
        <h2 className="w-[180px] h-[30px] truncate px-4 py-1 font-semibold">
          {product.sku}
        </h2>
        <h3 className="w-[180px] h-[30px] truncate px-4 py-1 font-semibold">
          precio: ${product.price}
        </h3> 
        <h3 className="w-[180px] h-[30px] truncate px-4 font-semibold">
          cantidad: {product.count}
        </h3> 
      </div>
      </Card>
    )):null} 
  </div>
  )
}

export default ProductsList