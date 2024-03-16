
const DeckEntry = (props) => {
    return(
        <>
        <ul style={DeckEntryStyle}>
            <li>{props.deck_author}</li>
            <li>{props.deck_commander_one}</li>
            <li>{props.deck_commander_two}</li>
            <li>{props.deck_description}</li>
            <li>{props.deck_link}</li>
        </ul>
    
        </>
    )
}

export default DeckEntry

const DeckEntryStyle = {
    border: '2px solid red'
}