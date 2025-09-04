import { useState } from 'react';
import CustomButton from '../CustomButton';
import RecoveryPass from './RecoveryPass';

export function Login() {

  const [isRecoveryPassVisible, setIsRecoveryPassVisible] = useState(false)
  const [isLoginVisible, setIsLoginVisible] = useState(true)

  return (
    <>
      <div className="bg-[url('/src/assets/img/backgroundLIGHT.png')] bg-cover bg-fixed h-screen">
        <RecoveryPass
          isRecoveryPassVisible={isRecoveryPassVisible}
        >
        <main className={`${
          isLoginVisible
            ? "flex justify-center w-screen h-screen items-center"
            : "hidden"
          }`}>
          <div
            id="menuLogin"
            className=" w-[650px] h-[620px] bg-linear-to-t from-white to-sky-300 rounded-[3rem] ring-1 ring-white flex flex-col items-center shadow-x1/30"
          >
            <div
              id="containerLogin"
              className="flex flex-col items-center m-[100px]"
            >
              <img
                src="src/assets/img/logoKanarySemFundo.png"
                alt="logolight"
                className="w-45 h-30 rounded-xl"
              />
              <div className="w-[100%] text-center flex flex-col">
                <h1 className="font-bold text-2xl">Login com seu e-mail</h1>
                <p className="font-thin text-base mb-5">
                  Produtividade simples, equipes mais fortes. <br />
                  Eficiência de graça!
                </p>
                <form action="#" className="flex flex-col">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="bg-white opacity-40 rounded-lg mb-3 pl-2 pt-0.5 pb-0.5"
                  />
                  <input
                    type="password"
                    name="password"
                    id="passwordUser"
                    placeholder="Senha"
                    className="bg-white opacity-40 rounded-lg pl-2 pt-0.5 pb-0.5"
                  />
                  <p
                    onClick={() => {
                      setIsRecoveryPassVisible(!isRecoveryPassVisible) 
                      setIsLoginVisible(!isLoginVisible)
                    }}
                    className="text-xs font-thin self-end mb-5 hover:underline cursor-pointer"
                  >
                    Esqueci minha senha
                  </p>
                  <CustomButton label="Login" />
                </form>
                <p
                  className="mt-2 text-xs font-thin"
                > Não tem uma conta? &nbsp;
                  <span
                    className='font-bold hover:underline cursor-pointer'
                  > 
                  Cadastre-se.
                  </span>
                </p>
              </div>
            </div>
          </div>
        </main>
        </RecoveryPass>
      </div>
    </>
  );
}
