const RecoveryPass = ({ children, 
  isRecoveryPassVisible
  }: {
    children?: React.ReactNode;
    isRecoveryPassVisible: boolean;
  }) => {
  
  return (
    <div>
      <main className={`${
          isRecoveryPassVisible
            ? 'flex justify-center w-screen h-screen items-center'
            : 'hidden'
        }`}
      >
        <div
          id="menuLogin"
          className="w-[650px] h-[620px] bg-linear-to-t from-white to-sky-300 rounded-[3rem] ring-1 ring-white flex flex-col items-center shadow-x1/30"
        >
          <button
            className="mt-10 mr-10 w-7 border-1 border-white rounded-[10rem] self-end"
          >
            X
          </button>
          <div
            id="containerLogin"
            className="flex flex-col items-center m-[100px] w-[300px]"
          >
            <img
              src="src/assets/img/logoKanarySemFundo.png"
              alt="logolight"
              className="w-45 h-30 rounded-xl"
            />
            <div className="w-[100%] text-center flex flex-col">
              <h1 className="font-bold text-2xl">Recupere sua senha!</h1>
              <form action="#" className="flex flex-col">
                <input
                  type="email"
                  name="RecoveryPassword"
                  id="RecoveryPasswordUser"
                  placeholder="Email de recuperação"
                  className="bg-white opacity-40 rounded-lg pl-2 pt-0.5 pb-0.5 mt-4 mb-4"
                />
                <button className="bg-black text-white rounded-lg h-[30px] cursor-pointer hover:opacity-70">
                  Recuperar
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>
      {children}
    </div>
  );
}

export default RecoveryPass;