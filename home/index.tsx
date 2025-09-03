export function Index() {

  return (
    <>
    <div className="bg-[url('/src/img/background/backgroundLIGHT.png')] bg-cover bg-fixed h-screen">

        <main className="flex justify-center w-screen h-screen items-center">
            <div id="menuLogin" className=" w-[650px] h-[620px] bg-linear-to-t from-white to-sky-300 rounded-[3rem] ring-1 ring-white flex flex-col items-center shadow-x1/30">
                <div id="containerLogin" className="flex flex-col items-center m-[150px]">
                    <img src="src/img/Login/light/logo.png" alt="logolight" className="w-12 h-12 mb-3"/>
                    <div className="w-[100%] text-center flex flex-col">
                        <h1 className="font-bold text-2xl ">Login com seu e-mail</h1>
                        <p className="font-thin text-base mb-5">Produtividade simples, equipes mais fortes. <br/>Eficiência de graça!</p>
                        <form action="#" className="flex flex-col">
                            <input type="email" placeholder="Email" className="bg-white opacity-40 rounded-lg mb-3 pl-2"/>
                            <input className="bg-white opacity-40 pl-2 rounded-lg" type="password" name="password" id="passwordUser" placeholder="Senha"/>
                            <p className="text-xs font-thin self-end  mb-5 hover:underline cursor-pointer">Esqueci minha senha</p>
                            <button className="bg-black text-white rounded-lg h-[30px] cursor-pointer">Login</button>
                        </form>
                    </div>
                </div>
            </div>
        </main>

    </div>

    <div className="bg-[url('/src/img/background/backgroundLIGHT.png')] bg-cover bg-fixed h-screen flex-none">

        <main className="flex justify-center w-screen h-screen items-center">
            <div id="menuLogin" className=" w-[650px] h-[620px] bg-linear-to-t from-white to-sky-300 rounded-[3rem] ring-1 ring-white flex flex-col items-center shadow-x1/30">
                <div id="containerLogin" className="flex flex-col items-center m-[150px]">
                    <img src="src/img/Login/light/logo.png" alt="logolight" className="w-12 h-12 mb-3"/>
                    <div className="w-[100%] text-center flex flex-col">
                        <h1 className="font-bold text-2xl ">Login com seu e-mail</h1>
                        <p className="font-thin text-base mb-5">Produtividade simples, equipes mais fortes. <br/>Eficiência de graça!</p>
                        <form action="#" className="flex flex-col">
                            <input type="email" placeholder="Email" className="bg-white opacity-40 rounded-lg mb-3 pl-2"/>
                            <input className="bg-white opacity-40 pl-2 rounded-lg" type="password" name="password" id="passwordUser" placeholder="Senha"/>
                            <p className="text-xs font-thin self-end  mb-5 hover:underline cursor-pointer">Esqueci minha senha</p>
                            <button className="bg-black text-white rounded-lg h-[30px] cursor-pointer">Login</button>
                        </form>
                    </div>
                </div>
            </div>
        </main>

    </div>
    </>
  )
}

export default Index