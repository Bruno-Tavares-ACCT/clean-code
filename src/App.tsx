import { InputCep } from './component/InputCep'
import { ButtonCep } from './component/ButtonCep'
import { CepInfo } from './component/CepInfo'

import './App.css'

function App() {

  return (
    <>
      <div className='cep--container'>
        <InputCep />
        <ButtonCep />
      </div>
      <CepInfo />
    </>
  )
}

export default App
