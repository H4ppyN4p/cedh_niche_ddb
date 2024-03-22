import { deleteDoc, doc } from 'firebase/firestore';
import { database } from '../firebase';
import { useState } from 'react';

const DeckEntryDisplayEdit = (props) => {

    const [isEditing, setIsEditing] = useState(false)

    const [deckName, setDeckName] = useState(props.deck_id)
    const [deckAuthor, setDeckAuthor] = useState(props.deck_author)
    const [deckColour, setDeckColour] = useState(props.deck_colour)
    const [commanderOne, setCommanderOne] = useState(props.deck_commander_one)
    const [commanderTwo, setCommanderTwo] = useState(props.deck_commander_two)
    const [deckDescription, setDeckDescription] = useState(props.deck_description)
    const [deckLink, setDeckLink] = useState(props.deck_link)

    function setToEditMode(){
        setIsEditing(!isEditing)
    }

    async function deleteDeck(){
        if (window.confirm('Are you sure you want to delete this deck?')) {
            try {
              await deleteDoc(doc(database, 'decks_mainlist', props.deck_id))
            } catch(error) {
                console.log(error)
            }
        }   
    }

    function editDeck(){
        console.log(props.deck_id)
    }
    return(
        <>
        { isEditing ? (

                <div>
                 
                    <div>
                        <label htmlFor='DeckName'>Deck Name: </label>
                        <input type="text" name="DeckName"  value={deckName} onInput={e => setDeckName(e.target.value)}/>
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

                        Edit mode
                        <button onClick={setToEditMode}>Edit</button>

                </div>
                
            ) : (

                props.deck_commander_two ? (
                    <> 
                    <ul style={DeckEntryStyle}>
                            <li> <p>Deck author : {props.deck_author} </p></li>
                            <li> <p>deck color : {props.deck_colour} </p></li>
                            <li> <p>Commander one:  {props.deck_commander_one} </p></li>
                            <li> <p>Commander two:  {props.deck_commander_two} </p></li>
                            <li> <p>Deck description: {props.deck_description} </p></li>
                            <li> <p>Deck link: {props.deck_link} </p></li>
                            <button onClick={deleteDeck}>Delete</button>
                            <button onClick={setToEditMode}>Edit</button>
                        </ul>
                    </>
                ) : (
                    <> 
                        <ul style={DeckEntryStyle}>
                            <li> <p>Deck author : {props.deck_author} </p></li>
                            <li> <p>deck color : {props.deck_colour} </p></li>
                            <li> <p>Commander one:  {props.deck_commander_one} </p></li>
                            <li> <p>Deck description: {props.deck_description} </p></li>
                            <li> <p>Deck link: {props.deck_link} </p></li>
                            <button onClick={deleteDeck}>Delete</button>
                            <button onClick={setToEditMode}>Edit</button>
                        </ul>
                    </>
                )
            )
        
        }
        
        </>
    )
}

export default DeckEntryDisplayEdit

const DeckEntryStyle = {
    border: '2px solid red'
}