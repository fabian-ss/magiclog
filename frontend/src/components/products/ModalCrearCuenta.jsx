import { Buttom, Card } from "../ui"
import Close from "../../assets/close.png";

function ModalCrearCuenta({ ...props }) {

    const closeModal = () => {
        props.setModalCrear(false)
    }

    const handleLogin = () => {
        props.setModalCrear(false)
        props.setLogin(true)
    }

    const handleSignUp = () => {
        props.setModalCrear(false)
        console.log("registrate");
        props.setLogin(true)
        props.setRegister(true)
    }

    return (
        <div className="mt-5 tablet:flex justify-center mx-6">
            <Card style={"bg-[#f8faf9ff] tablet:w-[25rem] pb-7  rounded-lg border-2"}>

                <div className="flex py-3 px-4 text-xl font-bold bg-[#eaebefff] justify-between">
                    <h1>Crea una cuenta</h1>
                    <button onClick={closeModal}>
                        <img src={Close} width={30} height={30} />
                    </button>
                </div>

                <div className="flex flex-col justify-between items-end phone:h-[82%]">
                    <p className="px-5 py-3 text-xl">Registrate o inicia sesión para empezar a agregar productos a tu inventario.</p>

                    <div>
                        <button onClick={handleLogin} className="items-center bg-[#edeef0ff] px-2 py-3 mb-3 text-sm font-semibold text-black shadow-sm hover:bg-[#e1edd7ff] hover:border-[#b6ce9eff] rounded-md disabled:cursor-not-allowed border-2 border-[#cdd2db] ml-2">
                            INICIA SESION
                        </button>
                        <button onClick={handleSignUp} className="items-center bg-[#dddfe3ff] px-2 py-3 mb-3 text-sm font-semibold text-black shadow-sm hover:bg-[#e1edd7ff] hover:border-[#b6ce9eff] rounded-md disabled:cursor-not-allowed border-2 border-[#cdd2db] ml-3 mr-3">
                            REGISTRATE
                        </button>

                    </div>
                </div>

            </Card>


        </div>
    )
}

export default ModalCrearCuenta