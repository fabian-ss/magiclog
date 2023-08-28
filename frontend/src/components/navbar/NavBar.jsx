import userLogo from '../../assets/user.png';

function NavBar({ ...props }) {

  const handleLogin = () => {
    props.setLogin(!props.login)
  }
  console.log("Navbar", props.token);

  return (

    <div className="bg-[#eaebefff] flex justify-between px-10 py-2">

      <h1 className='font-bold text-2xl'>MagicLog</h1>

      <button onClick={handleLogin}>

        <div className='flex justify-center items-center'>

          <img src={userLogo} width={25} height={25} className='mr-2' />

          <h1>{props.token !== null ? props.token.name : "Iniciar Sesión"}</h1>

        </div>

      </button>

    </div>


  )
}

export default NavBar