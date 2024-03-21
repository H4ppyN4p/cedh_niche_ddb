import { collection } from 'firebase/firestore'
import { useCollection } from 'react-firebase-hooks/firestore'
import { database } from '../firebase'

import DeckEntry from '../elements/DeckEntryDisplayEdit'

const EditDecks = () => {

    const [values] = useCollection(collection(database, 'decks_mainlist'))
    const data = values?.docs.map(doc => ({...doc.data(), id: doc.id}))

    return(
        <>
        <div>Edit page for editing decks</div>

            {data && data.map((e) => {
                return (
                    <DeckEntry 
                        key={e.id}
                        deck_id={e.id}
                        deck_author={e.deck_author} 
                        deck_colour={e.deck_colour}
                        deck_commander_one={e.deck_commander_one}
                        deck_commander_two={e.deck_commander_two}
                        deck_description={e.deck_description}
                        deck_link={e.deck_link} 
                    />
                )
            })}
        </>
    )
}

export default EditDecks;