import { useState } from "react";
import { doc, setDoc, collection } from "firebase/firestore";
import { database } from "../firebase";
import { auth } from "../firebase";

const CreateDeck = () => {

    const [deckName, setDeckName] = useState('')
    const [deckAuthor, setDeckAuthor] = useState('')
    const [deckColour, setDeckColour] = useState('')
    const [commanderOne, setCommanderOne] = useState('')
    const [commanderTwo, setCommanderTwo] = useState('')
    const [deckDescription, setDeckDescription] = useState('')
    const [deckLink, setDeckLink] = useState('')
  
  function clearInputs(){
    
      setDeckName('')
      setDeckAuthor('') 
      setDeckColour('')
      setCommanderOne('')
      setCommanderTwo('')
      setDeckDescription('')
      setDeckLink('')
  }

  /*
     await setDoc(doc(db, 'decks_mainlist', deckName), {
          deck_author: deckAuthor,
          deck_colour: deckColour,
          deck_commander_one: commanderOne,
          deck_description: deckDescription,
          deck_link: deckLink,
  */

  async function addNewDocToDB(){
      try{
        if (commanderTwo != '') {
        
          await setDoc(doc(database, 'decks_mainlist', deckName), {
            deck_author: deckAuthor,
            deck_colour: deckColour,
            deck_commander_one: commanderOne,
            deck_commander_two: commanderTwo,
            deck_description: deckDescription,
            deck_link: deckLink
          }); 
        } else {
          await setDoc(doc(database, 'decks_mainlist', deckName), {
            deck_author: deckAuthor,
            deck_colour: deckColour,
            deck_commander_one: commanderOne,
            deck_description: deckDescription,
            deck_link: deckLink
          });
        }
      } catch(error) {
        console.log(error)
      }
      
        clearInputs() 
    }

    return (
        <>
        <div style={Container}>
          <div style={FormStyle}>
            <div>
              <label htmlFor='DeckName'>Deck Name: </label>
              <input type="text" name="DeckName" value={deckName} onInput={e => setDeckName(e.target.value)}/>
            </div>

            <div>
              <label htmlFor='DeckAuthor'>Deck Author(s): </label>
              <input type="text" name="DeckAuthor" value={deckAuthor} onInput={e => setDeckAuthor(e.target.value)}/>
            </div>

            <div>
              <label htmlFor='DeckColour'>Deck Colour: </label>
              <input type="text" name="Deck Colour" value={deckColour} onInput={e => setDeckColour(e.target.value)}/>
            </div>
            
            <div>
              <label htmlFor='CommanderOne'>Commander One: </label>
              <input type="text" name="CommanderOne" value={commanderOne} onInput={e => setCommanderOne(e.target.value)}/>
            </div>

            <div>
              <label htmlFor='CommanderTwo'>Commander Two (if any): </label>
              <input type="text" name="CommanderTwo" value={commanderTwo} onInput={e => setCommanderTwo(e.target.value)}/>
            </div>

            <div>
              <label htmlFor='DeckDescription'>Short Description of the deck: </label>
              <input type="text" name="DeckDescription" value={deckDescription} onInput={e => setDeckDescription(e.target.value)}/>
            </div>

            <div>
              <label htmlFor='DeckLink'>Link to the deck-list: </label>
              <input type="text" name="DeckLink" value={deckLink} onInput={e => setDeckLink(e.target.value)}/>
            </div>

            <button onClick={addNewDocToDB}>Button to send text</button>
          </div>
        </div>
        </>
    )
}

export default CreateDeck;

const Container = {
  display: 'flex',
  border: '2px solid green'
}

const FormStyle = {
  display: 'flex',
  flexDirection: 'column'
}