import { useState } from "react";
import { doc, addDoc, collection} from "firebase/firestore";
import { database } from "../firebase";

const CreateDeck = () => {
    const [category, setCategory] = useState('Fringe')
    const [deckName, setDeckName] = useState('')
    const [deckAuthor, setDeckAuthor] = useState('')
    const [commanderOne, setCommanderOne] = useState('')
    const [commanderTwo, setCommanderTwo] = useState('')
    const [deckDescription, setDeckDescription] = useState('')
    const [deckLink, setDeckLink] = useState('')
    const [isColourless, setIsColourless] = useState(false)
    const [isWhite, setIsWhite] = useState(false)
    const [isBlue, setIsBlue] = useState(false)
    const [isBlack, setIsBlack] = useState(false)
    const [isRed, setIsRed] = useState(false)
    const [isGreen, setIsGreen] = useState(false)
    const [top16, setTop16] = useState('')

    const handleColourless = () => {
      setIsColourless(!isColourless);
    }

    const handleWhite = () => {
      setIsWhite(!isWhite);
    }

    const handleBlue = () => {
      setIsBlue(!isBlue);
    }

    const handleBlack = () => {
      setIsBlack(!isBlack);
    }

    const handleRed = () => {
      setIsRed(!isRed);
    }

    const handleGreen = () => {
      setIsGreen(!isGreen);
    }

 
  
  function clearInputs(){
      setDeckName('')
      setDeckAuthor('') 
      setCommanderOne('')
      setCommanderTwo('')
      setDeckDescription('')
      setDeckLink('')
      setIsWhite(false)
      setIsBlue(false);
      setIsBlack(false);
      setIsRed(false)
      setIsGreen(false)
  }


  async function addNewDocToDB(){
      try{
        if (commanderTwo !== '') {
        
          await addDoc(collection(database, 'decks_mainlist'), {
            deck_name: deckName,
            deck_author: deckAuthor,
            deck_commander_one: commanderOne,
            deck_commander_two: commanderTwo,
            deck_description: deckDescription,
            deck_link: deckLink,
            deck_results: top16,
            deck_category: category,
            is_white: isWhite,
            is_blue: isBlue,
            is_black: isBlack,
            is_red: isRed,
            is_green: isGreen
          }); 
        } else {
          await addDoc(collection(database, 'decks_mainlist'), {
            deck_name: deckName,
            deck_author: deckAuthor,
            deck_commander_one: commanderOne,
            deck_description: deckDescription,
            deck_link: deckLink,
            deck_results: top16,
            deck_category: category,
            is_white: isWhite,
            is_blue: isBlue,
            is_black: isBlack,
            is_red: isRed,
            is_green: isGreen
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
                <label htmlFor='Category'>What category (Meta, Fringe, New Commander) does this deck belong in?</label>
                <select name="Deck Colour" id="DeckColour" onChange={e => setCategory(e.target.value)}>
                  <option value="Fringe">Fringe</option>
                  <option value="Meta">Meta</option>
                  <option value="New Commander">Winner</option>
                </select>
            </div>

            <div>
              <label htmlFor='DeckName'>Deck Name: </label>
              <input type="text" name="DeckName" value={deckName} onInput={e => setDeckName(e.target.value)}/>
            </div>

            <div>
              <label htmlFor='DeckAuthor'>Deck Author(s): </label>
              <input type="text" name="DeckAuthor" value={deckAuthor} onInput={e => setDeckAuthor(e.target.value)}/>
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
          


            <div style={{border: '2px solid red'}}>
              <p>Choose colours for the deck:</p>
              <div>
                <label>Colourless</label>
                <input type="checkbox" id="colourless" name="colourless" value={isColourless} onChange={handleColourless}/>
              </div>

              <div>
                <label>White</label>
                <input type="checkbox" id="white" name="white" value={isWhite} onChange={handleWhite}/>
              </div>

              <div>
                <label>Blue</label>
                <input type="checkbox" id="blue" name="blue" value={isBlue} onChange={handleBlue}/>
              </div>

              <div>
                <label>Black</label>
                <input type="checkbox" id="black" name="black" value={isBlack} onChange={handleBlack}/>
              </div>

              <div>
                <label>Red</label>
                <input type="checkbox" id="red" name="red" value={isRed} onChange={handleRed}/>
              </div>

              <div>
                <label>Green</label>
                <input type="checkbox" id="green" name="green" value={isGreen} onChange={handleGreen}/>
              </div>
            </div>

            <div>
              <label htmlFor='Tournament Results'>Have this decklist had any 64+ entries tournament results?</label>
              <select name="Deck Colour" id="DeckColour" onChange={e => setTop16(e.target.value)}>
                <option value="">No Results</option>
                <option value="Top 16">Top 16</option>
                <option value="Top 4">Top 4</option>
                <option value="Winner">Winner</option>
              </select>
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