

//Contexts
import { useDatabaseContext } from '../contexts/DatabaseContextProvider'

//elements
import DeckEntry from '../elements/DeckEntryDisplayEdit'

const EditDecks = () => {

    const data = useDatabaseContext()

    return(
        <>
        <div>Edit page for editing decks</div>

            {data && data.map((e) => {
                return (
                    <DeckEntry 
                        key={e.id}
                        deck_id={e.id}
                        deck_author={e.deck_author} 
                        deck_category={e.deck_category}
                        deck_commander_one={e.deck_commander_one}
                        deck_commander_two={e.deck_commander_two}
                        deck_commander_one_ref={e.deck_commander_one_ref}
                        deck_commander_two_ref={e.deck_commander_two_ref}
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

export default EditDecks;