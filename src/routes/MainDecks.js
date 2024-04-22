
//Contexts
import { useEffect, useState } from 'react'
import { useDatabaseContext } from '../contexts/DatabaseContextProvider'

//Elements
import DeckEntry from '../elements/DeckEntryDisplay'
import { Link } from 'react-router-dom'
import NewDecks from './NewDecks'
import { cssDarkArray } from '../ColourConsts'


const MainDecks = () => {

    const data = useDatabaseContext()

    const [decksToShow, setDeckToShow] = useState()

    useEffect(() => {
        const newObjects = []

        if (data !== undefined){
            data.forEach(element => {
                if (element.deck_category === 'Fringe'){
                    newObjects.push(element)
                }
            });
        }
        setDeckToShow(newObjects)
    }, [data])

    ///


    const EntryContainer = {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'flex-start',
        alignContent: 'space-between',
    }

    const ExplainSection = {
        width: '80%', 
        margin: 'auto',
        minHeight: '40px',
        backgroundColor: cssDarkArray.entryColour,
        textAlign: 'center',
        color: 'lightgray'
    }

    ///

    return(
        <>
            <div style={EntryContainer}>

                <div style={ExplainSection}>
                    <p>This is the main-page for decks; for new commanders released within the last set, see <Link style={{color: 'lightgray'}} to={NewDecks}>New Decks</Link></p>
                </div>

                {decksToShow && decksToShow.map((e) => {
                    return (

                        <DeckEntry
                        key={e.id}
                        id={e.id}
                        deck_author={e.deck_author}
                        deck_category={e.deck_category}
                        deck_commander_one={e.deck_commander_one}
                        deck_commander_one_ref={e.deck_commander_one_ref}
                        deck_commander_two={e.deck_commander_two}
                        deck_commander_two_ref={e.deck_commander_two_ref}
                        deck_description={e.deck_description}
                        deck_link={e.deck_link}
                        deck_name={e.deck_name}
                        deck_results={e.deck_results}
                        discord_link={e.discord_link}
                        is_black={e.is_black}
                        is_blue={e.is_blue}
                        is_colourless={e.is_colourless}
                        is_green={e.is_green}
                        is_red={e.is_red}
                        is_white={e.is_white}
                        tag_primary={e.tag_primary}
                        tag_one={e.tag_one}
                        tag_two={e.tag_two}
                        tag_three={e.tag_three}
                        tag_four={e.tag_four}

                        />
                    )
                })}
            </div>
        </>
    )
}

export default MainDecks;

