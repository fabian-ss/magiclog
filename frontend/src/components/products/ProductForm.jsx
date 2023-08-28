import { Card, Label, Input, Buttom } from "../ui/index"
import { useForm } from "react-hook-form";
import { useCreateProductMutation } from "../../api/apiSlice";
import toast from 'react-hot-toast';
import Notifications from "../notifications/Notificacion";

function ProductForm() {

  const [createProduct] = useCreateProductMutation()

  const notify = (customText) => toast.custom((t) => (
    <Notifications customText={customText} t={t} />
  ))

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = handleSubmit(async (data) => {

    data.price = Number(data.price)
    data.count = Number(data.count)

    await createProduct(data).then((res) => {
      console.log(res);
      if (res?.error?.status === 401) {
        notify(res.error.data.message)
        const timer = setTimeout(() => window.location.reload(), 6000);

      } else {
        props.setLogin(false)
        props.setRegister(false)
      }
    }

    ).catch(() => {
      console.log("Error");
    })
  });


  return (
    <div className="h-screen w-[100%]">
      <div className="flex justify-center items-center">
        <Card>
          <h1 className="text-3xl font-semibold text-start pb-2">Crear Producto</h1>

          <form onSubmit={onSubmit} className="flex flex-col justify-center">

            <div>
              <Label>
                Nombre
              </Label>
              <Input type="Text" placeholder="Nombre del producto" {...register('name', {
                required: {
                  value: true,
                  message: "El nombre es requerido"
                }
              })} />
              {errors.name && <p className="text-red-500">{errors.name.message}</p>}

              <Label>
                SKU
              </Label>
              <Input type="Text" placeholder="SKU" {...register('sku', {
                required: {
                  value: true,
                  message: "El Sku es requerido"
                }
              })} />
              {errors.sku && <p className="text-red-500">{errors.sku.message}</p>}

              <Label>
                Precio
              </Label>
              <Input type="number" placeholder="0" {...register('price', {
                required: {
                  value: true,
                  message: "El precio es requerido"
                }
              })} />
              {errors.price && <p className="text-red-500">{errors.price.message}</p>}

              <Label>
                Cantidad
              </Label>
              <Input type="number" placeholder="0" {...register('count', {
                required: {
                  value: true,
                  message: "La cantidad es requerida"
                }
              })} />
              {errors.count && <p className="text-red-500">{errors.count.message}</p>}

            </div>

            <div className="flex justify-end items-end">

              <Buttom style="relative inline-flex items-center rounded-sm bg-[#edeef0ff] px-14 py-2.5 text-sm font-semibold text-black shadow-sm hover:bg-[#e1edd7ff] hover:border-[#b6ce9eff] disabled:cursor-not-allowed border-2 border-[#cdd2db] mt-8 ">
                CREAR
              </Buttom>

            </div>
          </form>

        </Card>

      </div>

    </div>
  )
}

export default ProductForm