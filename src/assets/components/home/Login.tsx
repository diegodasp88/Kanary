import { useState } from 'react';
import NameBox from './NameBox';

export function Login() {
  //sintaxe do usestate = const [nomeDoEstado, setNomedoEstado] = useState(valor inicial do estado)
  //o primeiro é o valor do estado e o segundo é a função que modifica o estado
  const [qualquerCoisa, setQualquerCoisa] = useState('!!!');
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleFormSubmit = () => {
    console.log('envie essas informações para o servidor');
    console.log(formData);
  };

  return (
    <>
      <div className="bg-[url('/src/assets/img/backgroundLIGHT.png')] bg-cover bg-fixed h-screen">
        <main className="flex justify-center w-screen h-screen items-center">
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
                <NameBox name={qualquerCoisa} otherName="Lyra" />
                <NameBox name="Lauro" otherName="Jabes" />
                <p className="font-thin text-base mb-5">
                  Produtividade simples, equipes mais fortes. <br />
                  Eficiência de graça!
                </p>
                <form action={handleFormSubmit} className="flex flex-col">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="bg-white opacity-40 rounded-lg mb-3 pl-2 pt-0.5 pb-0.5"
                    onChange={(e) => {
                      setFormData({ ...formData, email: e.target.value });
                    }}
                  />
                  <input
                    type="password"
                    name="password"
                    id="passwordUser"
                    placeholder="Senha"
                    className="bg-white opacity-40 rounded-lg pl-2 pt-0.5 pb-0.5"
                    onChange={(e) => {
                      setFormData({ ...formData, password: e.target.value });
                    }}
                  />
                  <p
                    onClick={() => {}}
                    className="text-xs font-thin self-end  mb-5 hover:underline cursor-pointer"
                  >
                    Esqueci minha senha
                  </p>
                  <button
                    type="submit"
                    className="bg-black text-white rounded-lg h-[30px] cursor-pointer hover:opacity-70"
                  >
                    Login
                  </button>
                </form>
                <p>valor de e-mail: {formData.email}</p>
                <p>valor de e-senha: {formData.password}</p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
