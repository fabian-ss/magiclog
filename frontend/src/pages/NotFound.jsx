import { Link } from "react-router-dom";
import { Card } from "../components/ui";

function NotFound() {
  return (
    <div className="h-screen flex flex-col justify-center items-center text-center">
            <Link to="/">
        <Card>
            <h1 className="text-4xl font-bold my-2">Page Not Found</h1>
            <h3 className="text-3xl my-2 font-semibold">404</h3>
            <h3 className="text-3xl my-2 font-semibold">Regresar al inicio</h3>
        </Card>
            </Link>
    </div>
  )
}

export default NotFound