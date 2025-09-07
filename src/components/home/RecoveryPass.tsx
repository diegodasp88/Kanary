import { SlClose, SlEnvolope} from "react-icons/sl";




const RecoveryPass = ({ children, 
  isRecoveryPassVisible, handleClose
  }: {
    children?: React.ReactNode;
    isRecoveryPassVisible: boolean;
    handleClose: () => void; 
  }) => {

  return (
    <div>
      <main
        className={`${
          isRecoveryPassVisible
            ? "flex justify-center w-screen h-screen items-center"
            : "hidden"
        }`}
      >
        <div
          id="menuLogin"
          className="w-[650px] h-[620px] bg-linear-to-t from-white to-sky-300 rounded-[3rem] ring-1 ring-white flex flex-col items-center shadow-x1/30"
        >
          <SlClose 
            className="text-black/50 size-6 mt-8 mr-8 self-end hover:text-white hover:cursor-pointer"
            onClick={() => {handleClose()}} 
          />
          <div
            id="containerLogin"
            className="flex flex-col items-center m-[100px] w-[300px]"
          >
            <img
              src="src/assets/img/logoKanarySemFundo.png"
              alt="logolight"
              className="w-50 h-30 rounded-xl"
            />
            <div className="w-[100%] text-center flex flex-col">
              <h1 className="font-bold text-2xl">Recupere sua senha!</h1>
              <form action="#" className="flex flex-col">
                <div className="relative w-full bg-white opacity-50 mt-4 mb-4 rounded-lg">
                  <input
                    type="email"
                    name="RecoveryPassword"
                    id="RecoveryPasswordUser"
                    placeholder="Email de recuperação"
                    className="rounded-lg border-2 opacity-100 border-white pl-8 pt-0.5 pb-0.5 w-full hover:border-black/30 hover:border-2"
                  />
                  <SlEnvolope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"/>
                </div>
                
                <button type="submit" className="bg-black text-white pt-1 pb-1 rounded-lg cursor-pointer hover:opacity-70">
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
};

export default RecoveryPass;
