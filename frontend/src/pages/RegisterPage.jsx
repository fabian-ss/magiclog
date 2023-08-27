import { Buttom, Card, Input, Label } from "../components/ui";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import axios from "axios";

function RegisterPage() {

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch
  } = useForm()

  const onSubmit = handleSubmit(async (data) => {
    console.log(data);
    const response = await axios.post('http://localhost:3000/api/signup', data, {
      withCredentials: true
    });
    console.log(response);
  });

  return (
    <div className="h-screen flex justify-center items-center">
      <Card>
        <h1 className="text-3xl font-semibold text-center pb-10">Crea una cuenta</h1>
        <form onSubmit={onSubmit} className="flex flex-col justify-center items-center">

          <div>
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
          pattern: {
            value: /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
            message: "Correo no valido"
          },
        })} />
            {errors.email && <p className="text-red-500">{errors.email.message}</p>}

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

          <Buttom>
            REGISTRARSE
          </Buttom>

            
            <Link to="/login" className="text-blue-800 pt-3 underline underline-offset-4">
            Inicia sesión 
            </Link>

        </form>

      </Card>
    </div>
  )
}

export default RegisterPage