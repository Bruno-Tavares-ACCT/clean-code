import { useCepContext } from "../../context/CepContext"

export const InputCep = () => {

    const { cepValue, setCepValue } = useCepContext()

    return (
        <>
            <h1>Digite seu Cep</h1>
            <div className='cep--inputs'>
                <input
                    type="text"
                    placeholder='Digite seu cep'
                    value={cepValue}
                    onChange={(e) => setCepValue(e.target.value)}
                />
            </div>
        </>
    )
}