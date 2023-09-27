import { createContext, useContext, PropsWithChildren, useState } from 'react'

interface CepContextTypes{
    cepValue: string
    setCepValue: (cepValue: string) => void
}

const CepContext = createContext<CepContextTypes>({} as CepContextTypes)

export const CepProvider: React.FunctionComponent<PropsWithChildren>= ({ children }) => {

  const [cepValue, setCepValue] = useState<string>('')

    return(
        <CepContext.Provider
            value={{
                cepValue,
                setCepValue
            }}
        >
            {children}
        </CepContext.Provider>
    )
}

export const useCepContext = () => useContext(CepContext)