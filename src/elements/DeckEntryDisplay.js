
const DeckEntryDisplay = (props) => {

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

                </ul>
            </>
        )

        }
     
    
        </>
    )
}

export default DeckEntryDisplay

const DeckEntryStyle = {
    border: '2px solid red'
}