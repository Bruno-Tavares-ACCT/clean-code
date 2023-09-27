import { getDataCep } from "../../utils/getDataCep"

export const ButtonCep = () => {
    return (
        <div className='cep--button' >
            <button onClick={getDataCep}>Entrar</button>
        </div>
    )
}