import { Buttom, Card, Input, Label } from "../components/ui";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import axios from "axios";

function RegisterPage() {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = handleSubmit(async (data) => {
    console.log(data);
    const response = await axios.post('http://localhost:3000/api/signup', data, {
      withCredentials: true
    });
    console.log(response);
  });

  return (
    <div className="h-screen flex justify-center items-center bg-red-700">
      <Card>
        <h1 className="text-3xl font-semibold text-center pb-10">Crea una cuenta</h1>
        <form onSubmit={onSubmit} className="flex flex-col justify-center items-center">

          <div>
            <Label>Correo</Label>
            <Input type="email" placeholder="name@mail.com"{...register('email', {
              required: true
            })} />
            {errors.email && <p className="text-red-500">El correo es requerido</p>}

            <Label>Contraseña</Label>
            <Input type="password" placeholder="Enter Password"  {...register('password', {
              required: true
            })} />
            {errors.password && <p className="text-red-500">La contraseña es requerida</p>}

            <Label>Confirmar contraseña</Label>

            <Input type="password" placeholder="Enter Password"  {...register('password', {
              required: true
            })} />
            {errors.password && <p className="text-red-500">Las contraseñas no coinciden</p>}

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