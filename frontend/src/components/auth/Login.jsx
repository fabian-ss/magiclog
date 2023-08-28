import { Card, Label, Input,Buttom } from "../../components/ui"
import { set, useForm } from "react-hook-form";
import { useSigninMutation  } from "../../api/apiSlice";
import { useState } from "react";
import toast from 'react-hot-toast';

function Login({...props}) {

  const [message,setMessage] = useState("");
  const [signin] = useSigninMutation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const notify = (customText) => toast.custom((t) => (
    <div
      className={`${t.visible ? 'animate-enter' : 'animate-leave'
        } max-w-md w-full shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5 bg-red-500 mt-10`}
    >
      <div className="flex-1 w-0 border-1 p-4 text-white text-xl text-center">
        <h1>{customText}</h1>
      </div>
      <div className="flex border-l border-gray-200 bg-white">
        <button
          onClick={() => toast.dismiss(t.id)}
          className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          Close
        </button>
      </div>
    </div>
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
        localStorage.setItem("token", res.data)
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