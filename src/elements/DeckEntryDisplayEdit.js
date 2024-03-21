import { deleteDoc, doc } from 'firebase/firestore';
import { database } from '../firebase';
import { Link } from 'react-router-dom';

const DeckEntryDisplayEdit = (props) => {

  

    async function deleteDeck(){
        if (window.confirm('Process?')) {
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
        { props.deck_commander_two ? (
            <> 
               <ul style={DeckEntryStyle}>
                    <li> <p>Deck author : {props.deck_author} </p></li>
                    <li> <p>deck color : {props.deck_colour} </p></li>
                    <li> <p>Commander one:  {props.deck_commander_one} </p></li>
                    <li> <p>Commander two:  {props.deck_commander_two} </p></li>
                    <li> <p>Deck description: {props.deck_description} </p></li>
                    <li> <p>Deck link: {props.deck_link} </p></li>
                    <button onClick={deleteDeck}>Delete</button>
                    <button onClick={editDeck}>Edit</button>
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
                    <button onClick={editDeck}>Edit</button>
                </ul>
            </>
        )

        }
     
    
        </>
    )
}

export default DeckEntryDisplayEdit

const DeckEntryStyle = {
    border: '2px solid red'
}