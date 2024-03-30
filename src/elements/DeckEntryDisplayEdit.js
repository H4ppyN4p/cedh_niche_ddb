import { deleteDoc, updateDoc, doc } from 'firebase/firestore';
import { database } from '../firebase';
import { useState } from 'react';

const DeckEntryDisplayEdit = (props) => {

    const [isEditing, setIsEditing] = useState(false)

    const [deckName, setDeckName] = useState(props.deck_name)
    const [deckAuthor, setDeckAuthor] = useState(props.deck_author)
    const [deckColour, setDeckColour] = useState(props.deck_colour)
    const [commanderOne, setCommanderOne] = useState(props.deck_commander_one)
    const [commanderTwo, setCommanderTwo] = useState(props.deck_commander_two)
    const [deckDescription, setDeckDescription] = useState(props.deck_description)
    const [deckLink, setDeckLink] = useState(props.deck_link)
    const [category, setCategory] = useState(props.deck_category)
    const [discordLink, setDiscordLink] = useState(props.discord_link)
    const [isColourless, setIsColourless] = useState(props.is_colourless)
    const [isWhite, setIsWhite] = useState(props.is_colour)
    const [isBlue, setIsBlue] = useState(props.is_blue)
    const [isBlack, setIsBlack] = useState(props.is_black)
    const [isRed, setIsRed] = useState(props.is_red)
    const [isGreen, setIsGreen] = useState(props.is_green)
    const [top16, setTop16] = useState(props.deck_results)
    const [tagPrimary, setTagPrimary] = useState(props.tag_primary)
    const [tag1, setTag1] = useState(props.tag_one)
    const [tag2, setTag2] = useState(props.tag_two)
    const [tag3, setTag3] = useState(props.tag_three)
    const [tag4, setTag4] = useState(props.tag_four)


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


    function setToEditMode(){
        setIsEditing(!isEditing)
        console.log('black: ' + isBlack)
        console.log('blue: ' + isBlue)
        console.log('white: ' + isWhite)
        console.log('Green: ' + isGreen)
        console.log('Red: ' + isRed)
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

    async function updateDeck(){
        if (window.confirm('Are you sure you want to save this edit?')) {

            try {
                if (commanderTwo !== undefined) {
                    await updateDoc(doc(database, 'decks_mainlist', props.deck_id), {
                        deck_name: deckName,
                        deck_author: deckAuthor,
                        deck_commander_one: commanderOne,
                        deck_commander_two: commanderTwo,
                        deck_description: deckDescription,
                        deck_link: deckLink,
                        discord_link: discordLink,
                        deck_results: top16,
                        deck_category: category,
                        is_colourless: isColourless,
                        is_white: isWhite,
                        is_blue: isBlue,
                        is_black: isBlack,
                        is_red: isRed,
                        is_green: isGreen,
                        tag_primary: tagPrimary,
                        tag_one: tag1,
                        tag_two: tag2,
                        tag_three: tag3,
                        tag_four: tag4,
                    })
    
                } else {
                    await updateDoc(doc(database, 'decks_mainlist', props.deck_id), {
                        deck_name: deckName,
                        deck_author: deckAuthor,
                        deck_commander_one: commanderOne,
                        deck_description: deckDescription,
                        deck_link: deckLink,
                        discord_link: discordLink,
                        deck_results: top16,
                        deck_category: category,
                        is_colourless: isColourless,
                        is_white: isWhite,
                        is_blue: isBlue,
                        is_black: isBlack,
                        is_red: isRed,
                        is_green: isGreen,
                        tag_primary: tagPrimary,
                        tag_one: tag1,
                        tag_two: tag2,
                        tag_three: tag3,
                        tag_four: tag4,
                    })
                }    
    
            } catch(error) {
                console.log(error)
            }
    
        }       
    }

    return(
        <>
        { isEditing ? (

                <div style={EditEntryStyle}>

                    <div>
                        <label htmlFor='Category'>What category (Meta, Fringe, New Commander) does this deck belong in?</label>
                        <select name="Deck Colour" id="DeckColour" value={category} onChange={e => setCategory(e.target.value)}>
                        <option value="Fringe">Fringe</option>
                        <option value="Meta">Meta</option>
                        <option value="New Commander">Winner</option>
                        </select>
                    </div>

                    <div>
                        <label htmlFor='DeckName'>Deck Name: </label>
                        <input type="text" name="DeckNName" value={deckName} onInput={e => setDeckName(e.target.value)}/>
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

                    <div>
                        <label htmlFor='DiscordLink'>Deck discord link: </label>
                        <input type="text" name="DiscordLink" value={discordLink} onInput={e => setDiscordLink(e.target.value)}/>
                    </div>

                    <div style={{border: '2px solid red'}}>
                        <p>Choose colours for the deck:</p>
                        <div>
                            <label>Colourless</label>
                            <input type="checkbox" id="colourless" name="colourless" checked={isColourless} onChange={handleColourless}/>
                        </div>

                        <div>
                            <label>White</label>
                            <input type="checkbox" id="white" name="white" value={isWhite}onChange={handleWhite}/>
                        </div>

                        <div>
                            <label>Blue</label>
                            <input type="checkbox" id="blue" name="blue" value={isBlue}  onChange={handleBlue}/>
                        </div>

                        <div>
                            <label>Black</label>
                            <input type="checkbox" id="black" name="black" value={isBlack}  onChange={handleBlack}/>
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
                        <select name="Deck Colour" id="deckColour" value={top16} onChange={e => setTop16(e.target.value)}>
                            <option value="">No Results</option>
                            <option value="Top 16">Top 16</option>
                            <option value="Top 4">Top 4</option>
                            <option value="Winner">Winner</option>
                        </select>
                    </div>

                    <div>
                        <label htmlFor='Tag-Primary'>Primary Archetype</label>
                        <select name="Tag-Primary" id="tagPrimary" value={tagPrimary} onChange={e => setTagPrimary(e.target.value)}>
                            <option value="Stax">Stax</option>
                            <option value="Midrange">Midrange</option>
                            <option value="Control">Control</option>
                            <option value="Turbo">Turbo</option>
                        </select>
                    </div>

                    <div>
                        <label htmlFor='Tag-1'>Tag 1</label>
                        <select name="Tag-1" id="tagOne" value={tag1} onChange={e => setTag1(e.target.value)}>
                            <option value="">None</option>
                            <option value="AdNaus">Ad Naus</option>
                            <option value="Hatebears">Hatebears</option>
                            <option value="Reanimator">Reanimator</option>
                            <option value="Hulk">Hulk</option>
                            <option value="Polymorph">Polymorph</option>
                            <option value="Evolution">Evolution</option>
                            <option value="Breach">Breach</option>
                        </select>
                    </div>

                    <div>
                        <label htmlFor='Tag-2'>Tag 2</label>
                        <select name="Tag-2" id="tagTwo" value={tag2} onChange={e => setTag2(e.target.value)}>
                            <option value="">None</option>
                            <option value="AdNaus">Ad Naus</option>
                            <option value="Hatebears">Hatebears</option>
                            <option value="Reanimator">Reanimator</option>
                            <option value="Hulk">Hulk</option>
                            <option value="Polymorph">Polymorph</option>
                            <option value="Evolution">Evolution</option>
                            <option value="Breach">Breach</option>
                        </select>
                    </div>

                    <div>
                        <label htmlFor='Tag-3'>Tag 3</label>
                        <select name="Tag-3" id="tagThree" value={tag3} onChange={e => setTag3(e.target.value)}>
                            <option value="">None</option>
                            <option value="AdNaus">Ad Naus</option>
                            <option value="Hatebears">Hatebears</option>
                            <option value="Reanimator">Reanimator</option>
                            <option value="Hulk">Hulk</option>
                            <option value="Polymorph">Polymorph</option>
                            <option value="Evolution">Evolution</option>
                            <option value="Breach">Breach</option>
                        </select>
                    </div>

                    <div>
                        <label htmlFor='Tag-4'>Tag 4</label>
                        <select name="Tag-4" id="tagFour" value={tag4} onChange={e => setTag4(e.target.value)}>
                            <option value="">None</option>
                            <option value="AdNaus">Ad Naus</option>
                            <option value="Hatebears">Hatebears</option>
                            <option value="Reanimator">Reanimator</option>
                            <option value="Hulk">Hulk</option>
                            <option value="Polymorph">Polymorph</option>
                            <option value="Evolution">Evolution</option>
                            <option value="Breach">Breach</option>
                        </select>
                    </div>
                        

                    Edit mode
                    <button onClick={updateDeck}>Save edit</button>
                    <button onClick={setToEditMode}>Edit</button>

                </div>
        
                
            ) : (

                props.deck_commander_two ? (
                    <> 
                        <ul style={DeckEntryStyle}>
                            <li> <p>Deck name: {props.deck_name}</p></li>
                            <li> <p>Deck author: {props.deck_author} </p></li>
                            <li> <p>Commander one:  {props.deck_commander_one} </p></li>
                            <li> <p>Commander two:  {props.deck_commander_two} </p></li>
                            <li> <p>Deck description: {props.deck_description} </p></li>
                            <li> <p>Deck link: {props.deck_link} </p></li>
                            <li> <p>Deck resulsts: {props.deck_results} </p></li>
                            <li> <p>Archetype: {props.tag_primary}</p></li>
                            <li>
                                <div>
                                    <label>Colourless</label>
                                    <input type="checkbox" id="colourless" checked={isColourless} readOnly={true}/>
                                </div>
                                <div>
                                    <label>White</label>
                                    <input type="checkbox" id="white" checked={isWhite} readOnly={true}/>
                                </div>
                                <div>
                                    <label>Blue</label>
                                    <input type="checkbox" id="blue" checked={isBlue} readOnly={true}/>
                                </div>
                                <div>
                                    <label>Black</label>
                                    <input type="checkbox" id="black" checked={isBlack} readOnly={true}/>
                                </div>
                                <div>
                                    <label>Red</label>
                                    <input type="checkbox" id="red" checked={isRed} readOnly={true}/>
                                </div>
                                <div>
                                    <label>Green</label>
                                    <input type="checkbox" id="green" checked={isGreen} readOnly={true}/>
                                </div>
                            </li>
                            <li style={{border: "2px solid green"}}>
                                <div>
                                    <p>{props.tag_one}</p>
                                    <p>{props.tag_two}</p>
                                    <p>{props.tag_three}</p>
                                    <p>{props.tag_four}</p>
                                </div>
                            </li>
                            <button onClick={deleteDeck}>Delete</button>
                            <button onClick={setToEditMode}>Edit</button>
                        </ul>
                    </>
                ) : (
                    <> 
                        <ul style={DeckEntryStyle}>
                        <li> <p>Deck name: {props.deck_name}</p></li>
                            <li> <p>Deck author: {props.deck_author} </p></li>
                            <li> <p>Commander one:  {props.deck_commander_one} </p></li>
                            <li> <p>Deck description: {props.deck_description} </p></li>
                            <li> <p>Deck link: {props.deck_link} </p></li>
                            <li> <p>Deck resulsts: {props.deck_results} </p></li>
                            <li> <p>Archetype: {props.tag_primary}</p></li>
                            <li>
                                <div>
                                    <label>Colourless</label>
                                    <input type="checkbox" id="colourless" checked={isColourless} readOnly={true}/>
                                </div>
                                <div>
                                    <label>White</label>
                                    <input type="checkbox" id="white" checked={isWhite} readOnly={true}/>
                                </div>
                                <div>
                                    <label>Blue</label>
                                    <input type="checkbox" id="blue" checked={isBlue} readOnly={true}/>
                                </div>
                                <div>
                                    <label>Black</label>
                                    <input type="checkbox" id="black" checked={isBlack} readOnly={true}/>
                                </div>
                                <div>
                                    <label>Red</label>
                                    <input type="checkbox" id="red" checked={isRed} readOnly={true}/>
                                </div>
                                <div>
                                    <label>Green</label>
                                    <input type="checkbox" id="green" checked={isGreen} readOnly={true}/>
                                </div>
                            </li>
                            <li style={{border: "2px solid green"}}>
                                <div>
                                    <p>{props.tag_one}</p>
                                    <p>{props.tag_two}</p>
                                    <p>{props.tag_three}</p>
                                    <p>{props.tag_four}</p>
                                </div>
                            </li>
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

const EditEntryStyle = {
    border: '2px solid blue',
    backgroundColor: 'lightblue'
}