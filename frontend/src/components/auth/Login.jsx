import { Link } from "react-router-dom"
import { Card, Label, Input,Buttom } from "../../components/ui"
import { useForm } from "react-hook-form";
import axios from "axios";
import { useSigninMutation  } from "../../api/apiSlice";
import { useState } from "react";

function Login() {

  const [message,setMessage] = useState("");
  const [signin] = useSigninMutation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();


  const onSubmit = handleSubmit(async (data) => {
    await signin(data)
    .then((res)=>{
      if (res?.error?.status === 404) 
      {setMessage(res.error.data.msg)}
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

          <Buttom>
            Iniciar sesión
          </Buttom>

          <div className="flex justify-between pt-4">
            <p>
              ¿No tienes cuenta?
            </p>
              <Link to="/register" className="font-bold pl-2">
                 Registar 
              </Link>
          </div>

        </form>

      </Card>

    </div>
  )
}

export default Login