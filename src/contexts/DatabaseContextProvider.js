import { createContext, useContext, useState, useEffect } from "react";
import { collection } from "firebase/firestore";
import { useCollection } from "react-firebase-hooks/firestore";
import { database } from "../firebase";

//create a context
const databaseContext = createContext()

export function useDatabaseContext(){
    return useContext(databaseContext)
}


export function DatabaseContextProvider({children}) {

    const [decklistsDatabase, setDecklistdatabase] = useState()

    const [values] = useCollection(collection(database, 'decklists'))
    const data = values?.docs.map(doc => ({...doc.data(), id: doc.id}))

    useEffect(() => {
        getAndSetData()
    }, [data !== undefined])

    function getAndSetData(){
        setDecklistdatabase(data)
    }


    return(
        <databaseContext.Provider value={decklistsDatabase}>
            {children}
        </databaseContext.Provider>
    )
}
