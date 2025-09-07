import { useState } from "react";
import CustomButton from "../CustomButton";
import RecoveryPass from "./RecoveryPass";
import backgroundLight from "../../assets/img/backgroundLIGHT.png";
import logoKanary from "../../assets/img/logoKanarySemFundo.png";
import { SlEnvolope, SlLock } from "react-icons/sl";
import Register from "./Register"

export function Login() {
  const [isLoginVisible, setIsLoginVisible] = useState(true);
  const [isRecoveryPassVisible, setIsRecoveryPassVisible] = useState(false);

  const [isRegisterVisible, setIsRegisterVisible] = useState(false)

  return (
    <>
      <div
        className="bg-cover bg-center h-screen"
        style={{ backgroundImage: `url(${backgroundLight})` }}
      >
        <RecoveryPass
          isRecoveryPassVisible={isRecoveryPassVisible}
          handleClose={() => {
            setIsRecoveryPassVisible(false);
            setIsLoginVisible(true);
          }}
        >

        <Register
          isRegisterVisible={isRegisterVisible}
          
          >
          <main
            className={`${
              isLoginVisible
                ? "flex justify-center w-screen h-screen items-center"
                : "hidden"
            }`}
          >
            <div
              id="menuLogin"
              className=" w-[650px] h-[620px] bg-linear-to-t from-white to-sky-300 rounded-[3rem] ring-1 ring-white flex flex-col items-center shadow-x1/30"
            >
              <div
                id="containerLogin"
                className="flex flex-col items-center m-[100px]"
              >
                <img
                  src={logoKanary}
                  alt="logolight"
                  className="w-50 h-30 rounded-xl"
                />
                <div className="w-[100%] text-center flex flex-col">
                  <h1 className="font-bold text-2xl">Login com seu e-mail</h1>
                  <p className="font-thin text-base mb-5">
                    Produtividade simples, equipes mais fortes. <br />
                    Eficiência de graça!
                  </p>
                  <form action="#" className="flex flex-col">
                    <div className="relative bg-white opacity-50 rounded-lg mb-3">
                      <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        className="border-white border-2 opacity-100 rounded-lg pl-8 pt-0.5 pb-0.5 w-full hover:border-black/30 hover:border-2"
                      />
                      <SlEnvolope className="absolute left-3 top-[17px] transform -translate-y-1/2 text-gray-500"/>
                    </div>
                    
                    <div className="relative bg-white opacity-50 rounded-lg">
                      <input
                        type="password"
                        name="password"
                        id="passwordUser"
                        placeholder="Senha"
                        className="border-2 border-white opacity-100 rounded-lg pl-8 pt-0.5 pb-0.5 w-full hover:border-black/30 hover:border-2"
                      />
                      <SlLock className="absolute left-[11px] top-[15px] transform -translate-y-1/2 text-gray-500"/>
                    </div>



                    <p
                      onClick={() => {
                        setIsRecoveryPassVisible(!isRecoveryPassVisible);
                        setIsLoginVisible(!isLoginVisible);
                      }}
                      className="text-xs font-thin self-end  mb-5 hover:underline cursor-pointer"
                    >
                      Esqueci minha senha
                    </p>
                    <CustomButton label="Login" />
                  </form>
                    <p
                      onClick={() => {
                        setIsRegisterVisible(!isRegisterVisible);
                        setIsLoginVisible(!isLoginVisible);
                      }}
                      className="text-xs font-thin self-center  mt-2 "
                    >
                      Ainda sem cadastro? <span className="cursor-pointer hover:underline font-bold">Cadastre-se</span>
                    </p>
                </div>
              </div>
            </div>
          </main>
        </Register>
        </RecoveryPass>
      </div>
    </>
  );
}
