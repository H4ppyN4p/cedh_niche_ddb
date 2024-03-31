import { createContext, useContext, useState, useEffect, useCallback } from "react";
import { collection } from "firebase/firestore";
import { useCollection } from "react-firebase-hooks/firestore";
import { database } from "../firebase";

//create a context
const databaseContext = createContext()

export function useDatabaseContext(){
    return useContext(databaseContext)
}

//Create another context
const updateContext = createContext()

export function useUpdateContext(){
    return useContext(updateContext)
}


export function DatabaseContextProvider({children}) {

    const [decklistsDatabase, setDecklistdatabase] = useState()
    const [update, setUpdate] = useState(false)


    const [values] = useCollection(collection(database, 'decklists'))
    const data = values?.docs.map(doc => ({...doc.data(), id: doc.id}))

    useEffect(() => {
        getAndSetData()
    }, [data !== undefined])

    useEffect(() => {
        getAndSetData()
        resetCheck()
    }, [update])

    

    function getAndSetData(){
        setDecklistdatabase(data)
    }

    function resetCheck(){
        setUpdate(false)
    }


    return(
        <databaseContext.Provider value={decklistsDatabase}>
            <updateContext.Provider value={setUpdate}>
                {children}
            </updateContext.Provider>
        </databaseContext.Provider>
    )
}
