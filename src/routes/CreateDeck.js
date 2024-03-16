import { useState } from "react";


const CreateDeck = () => {

    const [deckName, setDeckName] = useState('')
    const [deckAuthor, setDeckAuthor] = useState('')
    const [deckColour, setDeckColour] = useState('')
    const [commanderOne, setCommanderOne] = useState('')
    const [commanderTwo, setCommanderTwo] = useState('')
    const [deckDescription, setDeckDescription] = useState('')
    const [deckLink, setDeckLink] = useState('')

    function addNewDeck(){

    }

    function sendToConsole(){

    }

    return (
        <>
          <input name="MyDeckName" value={deckName} onInput={e => setDeckName(e.target.value)} onChange={console.log(deckName)}/>
        </>
    )
}

export default CreateDeck;