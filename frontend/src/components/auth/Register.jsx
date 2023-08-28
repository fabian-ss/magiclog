import { Buttom, Card, Input, Label } from "../../components/ui";
import { useForm } from "react-hook-form";
import { Link,  } from "react-router-dom";
import { useRegisterMutation  } from "../../api/apiSlice";
import { useState } from "react";
import toast from 'react-hot-toast';
import Notifications from "../notifications/Notificacion";

function Register({...props}) {

  const [message,setMessage] = useState("")
  const [registerUser] = useRegisterMutation()
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch
  } = useForm()


  const handleRegister = ()=>{
    props.setRegister(false)
  } 

  const notify = (customText) => toast.custom((t) => (
    <Notifications customText={customText} t={t}/>
  ))

  const onSubmit = handleSubmit(async (data) => {

    console.log("data",data);
    await registerUser(data).then((res)=>{
      if (res?.error?.status === 409) {
        setMessage(res.error.data.msg)
        notify(res.error.data.msg)
    } else{
      props.setLogin(false)
      props.setRegister(false)    
      window.location.reload()

    }
    }).catch((e)=>{
      console.log("Error",e);
    })
  });

  return (
    <div className="h-screen flex justify-center items-center">
      <Card>
        <h1 className="text-3xl font-semibold text-center pb-10">Crea una cuenta</h1>
        <form onSubmit={onSubmit} className="flex flex-col justify-center items-center">

          <div>

          <Label>Nombre</Label>
            <Input type="text" placeholder="nombre"{...register('name', {
          required: {
            value: true,
            message: "El nombre es requerido"
          },
          maxLength: {
            value: 255,
            message: "No puede exeder de 255 carácteres"
          }
        })} />
            {errors.name && <p className="text-red-500">{errors.name.message}</p>}

            <Label>Correo</Label>
            <Input type="email" placeholder="name@mail.com"{...register('email', {
          required: {
            value: true,
            message: "El correo es requerido"
          },
          maxLength: {
            value: 255,
            message: "No puede exeder de 255 carácteres"
          },
        })} />
            {errors.email && <p className="text-red-500">{errors.email.message}</p>}
            {message !== "" ? <p className="text-red-500 pl-1">{message}</p> : null}

            <Label>Contraseña</Label>
            <Input type="password" placeholder="Enter Password"  {...register('password', {
          required: {
            value: true,
            message: "La contraseña es requerida"
          },
          maxLength: {
            value: 255,
            message: "No puede exeder de 255 carácteres"
          },
          pattern: {
            value: /^(?=.*[!@#$%^&*])/,
            message: "La contraseña requiere un carácter"
          },
          validate:{
            length: (value) => value && value.length >= 6 || 'La contraseña debe tener minimo 6 carácteres',
            digits: (value) => value && /\d/.test(value) || 'La contraseña debe tener un número',
            upper: (value) => value && /(?=.*[A-Z])/.test(value) || 'La contraseña debe tener una mayúscula',
            lower: (value) => value && /(?=.*[a-z])/.test(value) || 'La contraseña debe tener una minúscula',            
          }
            })} />
            {errors.password && <p className="text-red-500">{errors.password.message}</p>}

            <Label>Confirmar contraseña</Label>

            <Input type="password" placeholder="Enter Password"  {...register('confirmPassword', {
                required: {
                  value: true,
                  message: "Se requiere confirmar la contraseña"
                },
                validate: value => value === watch('password') || 'Las contraseñas no coinciden'
            })} />
            {errors.confirmPassword && <p className="text-red-500">{errors.confirmPassword.message}</p>}

          </div>

          <Buttom  type="button">
            REGISTRARSE
          </Buttom>

          <button onClick={handleRegister}  type="button">
              <p className="text-blue-800 pt-3 underline underline-offset-4">
              Inicia sesión
              </p>
          </button>

        </form>

      </Card>
    </div>
  )
}

export default Register