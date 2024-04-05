import { useState } from "react";
import { addDoc, collection} from "firebase/firestore";
import { database, image } from "../firebase";
import { ref, uploadBytes } from "firebase/storage"

//Context
import { useUpdateContext } from "../contexts/DatabaseContextProvider";

const CreateDeck = () => {

    //handle images for firebase
    const [img, setImg] = useState('') 
    const [imgTwo, setImgTwo] = useState('') 

    

    const uploadImage = () => {
      if (commanderTwo != '') {

        const imgRef = ref(image, `commanders/${commanderOne}`)
        uploadBytes(imgRef, img)

        const imgRefTwo = ref(image, `commanders/${commanderTwo}`)
        uploadBytes(imgRefTwo, imgTwo)

      } else {
        const imgRef = ref(image, `commanders/${commanderOne}`)
        uploadBytes(imgRef, img)
      }

 
    }

    //use the context(s)
    const updateContext = useUpdateContext()

    //states to hold and manage values
    const [category, setCategory] = useState('Fringe')
    const [deckName, setDeckName] = useState('')
    const [deckAuthor, setDeckAuthor] = useState('')
    const [commanderOne, setCommanderOne] = useState('')
    const [commanderTwo, setCommanderTwo] = useState('')
    const [deckDescription, setDeckDescription] = useState('')
    const [deckLink, setDeckLink] = useState('')
    const [discordLink, setDiscordLink] = useState('')
    const [isColourless, setIsColourless] = useState(false)
    const [isWhite, setIsWhite] = useState(false)
    const [isBlue, setIsBlue] = useState(false)
    const [isBlack, setIsBlack] = useState(false)
    const [isRed, setIsRed] = useState(false)
    const [isGreen, setIsGreen] = useState(false)
    const [top16, setTop16] = useState('None')
    const [tagPrimary, setTagPrimary] = useState('Stax')
    const [tag1, setTag1] = useState('')
    const [tag2, setTag2] = useState('')
    const [tag3, setTag3] = useState('')
    const [tag4, setTag4] = useState('')


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
    setCategory('Fringe');
    setDeckName('');
    setDeckAuthor(''); 
    setCommanderOne('');
    setCommanderTwo('');
    setDeckDescription('');
    setDeckLink('');
    setIsColourless(false);
    setIsWhite(false);
    setIsBlue(false);
    setIsBlack(false);
    setIsRed(false);
    setIsGreen(false);
    setTop16('None');
    setDiscordLink('');
    setTagPrimary('Stax');
    setIsWhite(false);
    setIsBlue(false);
    setIsBlack(false);
    setIsRed(false);
    setIsGreen(false);
    setTag1('');
    setTag2('');
    setTag3('');
    setTag4('');
  }


  async function addNewDocToDB(){
      try{
        if (commanderTwo !== '') {
        
          await addDoc(collection(database, 'decklists'), {
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
          }); 
        } else {
          await addDoc(collection(database, 'decklists'), {
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
          });
        }
        updateContext(true)
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
                <select name="Deck Colour" id="DeckColour" value={category} onChange={e => setCategory(e.target.value)}>
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
          
            <div>
              <label htmlFor='DiscordLink'>Discord link to associated discord server: </label>
              <input type="text" name="DiscordLink" value={discordLink} onInput={e => setDiscordLink(e.target.value)}/>
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
                <option value="Food Chain">Food Chain</option>
                <option value="Storm - deterministic">Deterministic Storm</option>
                <option value="Storm - non deterministic">Non Deterministic Storm</option>
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
                <option value="Food Chain">Food Chain</option>
                <option value="Storm - deterministic">Deterministic Storm</option>
                <option value="Storm - non deterministic">Non Deterministic Storm</option>
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
                <option value="Food Chain">Food Chain</option>
                <option value="Storm - deterministic">Deterministic Storm</option>
                <option value="Storm - non deterministic">Non Deterministic Storm</option>
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
                <option value="Food Chain">Food Chain</option>
                <option value="Storm - deterministic">Deterministic Storm</option>
                <option value="Storm - non deterministic">Non Deterministic Storm</option>
              </select>
            </div>

            <div>
              <label>Image one</label>
              <input type="file" onChange={(e) => setImg(e.target.files[0])} />

              <label>Image Two</label>
              <input type="file" onChange={(e) => setImgTwo(e.target.files[0])} />
            </div>

            <button onClick={uploadImage}>Add Image </button>
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