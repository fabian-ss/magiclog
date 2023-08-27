import { Link } from "react-router-dom"
import { Card, Label, Input,Buttom } from "../components/ui"
import { useForm } from "react-hook-form";
import axios from "axios";

function LoginPage() {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()


  const onSubmit = handleSubmit(async (data) => {
    console.log(data);
    const response = await axios.post('http://localhost:3000/api/signin', data, {
      withCredentials: true
    });
    console.log(response);
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
            })} ></Input>
          <Label htmlFor="email">
            Password
          </Label>
          <Input type="password" placeholder="*****" {...register('password', {
            required: {
            value: true,
            message: "La contraseña es requerida"
          },
            })} ></Input>
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

export default LoginPage