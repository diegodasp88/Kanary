import { useState } from 'react'
import { Index } from '../home/index'
import { RecoveryPasswordTapOne } from '../home/index'

function App() {

  const [recoveryPassIsVisible, setRecoveryPassIsVisible] = useState<boolean>(false);

  return (
    <>
      <Index className={recoveryPassIsVisible ? "hidden justify-center w-screen h-screen items-center" : "flex justify-center w-screen h-screen items-center"} setRecoveryPassIsVisible={setRecoveryPassIsVisible}/>
      <RecoveryPasswordTapOne className={recoveryPassIsVisible ? "flex justify-center w-screen h-screen items-center" : "hidden justify-center w-screen h-screen items-center"} setRecoveryPassIsVisible={setRecoveryPassIsVisible} />
    </>
  )
}

export default App