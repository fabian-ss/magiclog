import { Card, Label, Input,Buttom } from "../../components/ui"
import { useForm } from "react-hook-form";
import { useSigninMutation  } from "../../api/apiSlice";
import { useState } from "react";
import toast from 'react-hot-toast';
import Notificacion from "../notifications/Notificacion";

function Login({...props}) {

  const [message,setMessage] = useState("");
  const [signin] = useSigninMutation();

  // qwerty1#Q

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const notify = (customText) => toast.custom((t) => (
    <Notificacion customText={customText} t={t}/>
  ))
  
  const handleLogin = ()=>{
    props.setRegister(true)
  }

  const onSubmit = handleSubmit(async (data) => {
    await signin(data).then((res)=>{
      if (res?.error?.status === 404) {
        setMessage(res.error.data.msg)
        notify(res.error.data.msg)
      } else{
        window.location.reload()
        props.setLogin(false)
      }
    }).catch((e)=>{
      console.log("Error",e);
    });
  });

  return (
    <div className="h-screen flex justify-center items-center">
      <Card>

        <h1 className="text-3xl font-semibold text-center pb-5">Iniciar sesion</h1>

        <form onSubmit={onSubmit} className="flex flex-col justify-center items-center">

          <div>
          <Label htmlFor="email">
            Email
          </Label>
          <Input type="email" placeholder="name@mail.com" {...register('email', {
            required: {
            value: true,
            message: "El correo es requerido"
          }
            })} />
            {errors.email && <p className="text-red-500">{errors.email.message}</p>}
            {message !== "" ? <p className="text-red-500 pl-1">{message}</p> : null}

          <Label htmlFor="password">
            Password
          </Label>
          <Input type="password" placeholder="*****" {...register('password', {
            required: {
            value: true,
            message: "La contraseña es requerida"
          },
            })} />
          {errors.password && <p className="text-red-500">{errors.password.message}</p>}
          </div>

          <Buttom  type="button">
            Iniciar sesión
          </Buttom>

          <div className="flex justify-between pt-4">
            <p>
              ¿No tienes cuenta?
            </p>
            <button onClick={handleLogin}  type="button">
              <p className="font-bold pl-2">
                 Registar 
              </p>
            </button>
          </div>
        </form>

      </Card>

    </div>
  )
}

export default Login