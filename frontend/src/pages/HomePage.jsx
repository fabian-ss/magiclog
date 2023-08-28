import { useEffect, useState } from 'react'
import Products from "../components/products/ProductsList";
import ProductForm from "../components/products/ProductForm";
import MenuCreateProduct from "../components/products/MenuCreateProduct";
import ModalSignIn from "../components/products/ModalCrearCuenta";
import Register from '../components/auth/Register'
import Login from '../components/auth/Login'
import LeftBar from "../components/leftbar/LeftBar";
import jwt_decode from "jwt-decode";
import NavBar from '../components/navbar/NavBar';

import Cookie from "js-cookie";

function HomePage() {

  const [login, setLogin] = useState(false)
  const [register, setRegister] = useState(false)
  const [modalCrear, setModalCrear] = useState(false)
  const [minNumber, setMinNumber] = useState(0)
  const [maxNumber, setMaxNumber] = useState(0)
  const [sliceValue, setSliceValue] = useState(1)

  const [token, setToken] = useState(null)
  const [ctrlProducts, setCtrlProducts] = useState(true)
  const [ctrlInventario, setCtrlInventario] = useState(false)

  useEffect(() => {
    console.log("ssss");
    console.log(Cookie.get('token'));
    if (Cookie.get('token')) {
      console.log("isAuth", jwt_decode(Cookie.get('token')))
      setToken(jwt_decode(Cookie.get('token')))
    }
  }, [])

  return (
    <div className=''>
      {login === false ?

        <div>
          <NavBar
            token={token}
            login={login}
            setLogin={setLogin}
          />
          <div className='flex mid:flex-row flex-col w-full '>
            <div className="">
              <LeftBar
                token={token}
                ctrlInventario={ctrlInventario}
                ctrlProducts={ctrlProducts}
                setCtrlProducts={setCtrlProducts}
                setCtrlInventario={setCtrlInventario}
                setShowCreate={setCtrlProducts}
                minNumber={minNumber}
                maxNumber={maxNumber}
                setSliceValue={setSliceValue}
                sliceValue={sliceValue}
                setMaxNumber={setMaxNumber}
              />
            </div>

            {modalCrear === false ?
              <div>
                {ctrlProducts === true ?
                  <Products
                    minNumber={minNumber}
                    setMinNumber={setMinNumber}
                    setSliceValue={setSliceValue}
                    sliceValue={sliceValue}
                    maxNumber={maxNumber}
                    setMaxNumber={setMaxNumber}
                  />
                  :
                  <>
                    {ctrlInventario === true && token === null ?
                      <div>
                        <MenuCreateProduct setModalCrear={setModalCrear}

                        />
                      </div>
                      :
                      <div className='w-full tablet:flex h-full justify-center items-center tablet:px-16 pt-16'>
                        <ProductForm />

                      </div>
                    }
                  </>
                }
              </div>
              :
              <div className='w-full '>
                <ModalSignIn
                  setLogin={setLogin}
                  setRegister={setRegister}
                  setModalCrear={setModalCrear}

                />
              </div>
            }

          </div>
        </div>

        :
        <div>
          {register == false ?
            <Login
              setLogin={setLogin}
              setRegister={setRegister}
            />
            :
            <Register
              setRegister={setRegister}
              setLogin={setLogin}
            />
          }
        </div>
      }
    </div>

  )
}

export default HomePage