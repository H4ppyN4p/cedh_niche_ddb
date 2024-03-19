import { collection, addDoc } from 'firebase/firestore'
import { useCollection } from 'react-firebase-hooks/firestore'
import { database } from '../firebase'

import DeckEntry from '../elements/DeckEntry'

const MainDecks = () => {

    const [values, loading, error] = useCollection(collection(database, 'decks_mainlist'))
    const data = values?.docs.map(doc => ({...doc.data(), id: doc.id}))

    console.log(data)


    return(
        <>
        <div>Main list of decks niche decks</div>

            {data && data.map((e) => {
                return (
                    <DeckEntry 
                        key={e.id}
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

export default MainDecks;