import { createContext, useContext, PropsWithChildren } from 'react'

interface CepContextTypes{

}

const CepContext = createContext<CepContextTypes>({} as CepContextTypes)

export const CepProvider: React.FunctionComponent<PropsWithChildren>= ({ children }) => {

    return(
        <CepContext.Provider
            value={{
            }}
        >
            {children}
        </CepContext.Provider>
    )
}

export const useCepContext = () => useContext(CepContext)