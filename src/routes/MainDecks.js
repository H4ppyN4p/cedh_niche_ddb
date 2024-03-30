
//Contexts
import { useDatabaseContext } from '../contexts/DatabaseContextProvider'

//Elements
import DeckEntry from '../elements/DeckEntryDisplay'

const MainDecks = () => {

    const data = useDatabaseContext()

    return(
        <>
        <div>Main list of decks niche decks</div>

            {data && data.map((e) => {
                return (
                    <DeckEntry 
                        key={e.id}
                        deck_author={e.deck_author} 
                        deck_category={e.deck_category}
                        deck_commander_one={e.deck_commander_one}
                        deck_commander_two={e.deck_commander_two}
                        deck_description={e.deck_description}
                        deck_link={e.deck_link} 
                        deck_name={e.deck_name}
                        deck_results={e.deck_results}
                        is_colourless={e.is_colourless}
                        is_white={e.is_white}
                        is_blue={e.is_blue}
                        is_black={e.is_black}
                        is_red={e.is_red}
                        is_green={e.is_green}
                        tag_primary={e.tag_primary}
                        tag_one={e.tag_one}
                        tag_two={e.tag_two}
                        tag_three={e.tag_three}
                        tag_four={e.tag_four}
                        discord_link={e.discord_link}
                    />
                )
            })}
        </>
    )
}

export default MainDecks;