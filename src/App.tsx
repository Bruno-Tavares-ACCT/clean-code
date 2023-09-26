import axios from 'axios'
import './App.css'
import { useState } from 'react'

function App() {

  const [valorCep, setvalorCep] = useState<any>('')

  function formularioCep(){
    axios.get('https://viacep.com.br/ws/01001000/json/')
  }

  return (
    <>
      <div className='cep--container'>
        <h1>Digite seu Cep</h1>
        <div className='cep--inputs'>
          <input type="text" placeholder='Digite seu cep' value={valorCep} onChange={(e) => setvalorCep(e.target.value)}/>
        </div>
        <div className='cep--button' >
          <button onClick={formularioCep}>Entrar</button>
        </div>
      </div>
      <div className='cep--info'>
        <p className="cep--street"></p>
        <p className="cep--neighborhood"></p>
        <p className="cep--city"></p>
        <p className="cep--postalcode"></p>
      </div>
    </>
  )
}

export default App
