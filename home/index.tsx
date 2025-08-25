export function Index(props:string) {

  return (
    <>
        <div className="bg-[url('/src/assets/img/backgroundLIGHT.png')] bg-cover bg-fixed h-screen">
            <main className={props.className}>
                <div id="menuLogin" className=" w-[650px] h-[620px] bg-linear-to-t from-white to-sky-300 rounded-[3rem] ring-1 ring-white flex flex-col items-center shadow-x1/30">
                    <div id="containerLogin" className="flex flex-col items-center m-[150px]">
                        <img src="src/assets/img/logoKanarySemFundo.png" alt="logolight" className="w-45 h-30 rounded-xl"/>
                        <div className="w-[100%] text-center flex flex-col">
                            <h1 className="font-bold text-2xl ">Login com seu e-mail</h1>
                            <p className="font-thin text-base mb-5">Produtividade simples, equipes mais fortes. <br/>Eficiência de graça!</p>
                            <form action="#" className="flex flex-col">
                                <input type="email" name="email" placeholder="Email" className="bg-white opacity-40 rounded-lg mb-3 pl-2 pt-0.5 pb-0.5"/>
                                <input type="password" name="password" id="passwordUser" placeholder="Senha" className="bg-white opacity-40 rounded-lg pl-2 pt-0.5 pb-0.5"/>
                                <p onClick={()=>{}} className="text-xs font-thin self-end  mb-5 hover:underline cursor-pointer">Esqueci minha senha</p>
                                <button className="bg-black text-white rounded-lg h-[30px] cursor-pointer hover:opacity-70">Login</button>
                            </form>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    </>
  )
}





export function RecoveryPasswordTapOne() {

  return (
    <>
        <div id="background" className="bg-[url('/src/assets/img/backgroundLIGHT.png')] bg-cover bg-fixed h-screen">
            <main className="hidden justify-center w-screen h-screen items-center">
                <div id="menuLogin" className=" w-[650px] h-[620px] bg-linear-to-t from-white to-sky-300 rounded-[3rem] ring-1 ring-white flex flex-col items-center shadow-x1/30">
                    <div id="containerLogin" className="flex flex-col items-center m-[150px]">
                        <img src="src/assets/img/logoKanarySemFundo.png" alt="logolight" className="w-45 h-30 rounded-xl"/>
                        <div className="w-[100%] text-center flex flex-col">
                            <h1 className="font-bold text-2xl ">Recupere sua senha!</h1>
                            <form action="#" className="flex flex-col">
                                <input type="email" name="RecoveryPassword" id="RecoveryPasswordUser" placeholder="Email de recuperação" className="bg-white opacity-40 rounded-lg pl-2 pt-0.5 pb-0.5"/>
                                <button className="bg-black text-white rounded-lg h-[30px] cursor-pointer hover:opacity-70">Recuperar</button>
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