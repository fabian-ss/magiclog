import { Card } from "../ui"
import Rectangulo from "../../assets/rectangulo.png";

function MenuCreateProduct({ ...props }) {

    const activateModal = () => {
        props.setModalCrear(true)
    }

    return (
        <div className="h-screen flex flex-col mt-6 mx-2">
            <Card style={" pb-10 pt-4 rounded-sm border-2 "}>

                <div className="flex overflow-auto">

                    <div className="flex justify-center items-center phone:w-10/12 h-[20rem] ">
                        <img src={Rectangulo} width={350} height={300} />
                    </div>

                    <div className="phone:w-5/11 flex flex-col ">

                        <h1 className="pt-10 px-5 text-3xl font-bold text-start">Crea tu</h1>
                        <h1 className="text-3xl px-5 font-bold text-start">producto</h1>

                        <h3 className="pt-10 px-5 text-xl font-bold text-start ">Organiza de manera profesional tu inventario</h3>

                        <div className="flex tablet:justify-evenly
                    justify-center 
                    items-center">

                            <p className="pt-6 text-blue-800 underline underline-offset-4 px-4">Conoce más</p>
                            <button className=" inline-flex items-center bg-[#edeef0ff] tablet:px-5 mx-1 py-2 text-sm font-semibold text-black shadow-sm hover:bg-[#e1edd7ff] hover:border-[#b6ce9eff] rounded-md disabled:cursor-not-allowed border-2 border-[#cdd2db] mt-8"
                                onClick={activateModal}
                            >
                                Crear Producto
                            </button>

                        </div>

                    </div>

                </div>

            </Card>

            <p className="text-blue-500 mt-5 font-semibold text-center">Inicia sesión para poder ver tu inventario</p>

        </div>
    )
}

export default MenuCreateProduct