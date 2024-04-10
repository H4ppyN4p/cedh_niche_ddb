import { useState } from "react"

import { cssArray } from "../ColourConsts"

const DeckEntryDisplay = (props) => {

    /*
    id={e.id}
    deck_commander_one={e.deck_commander_one}
    deck_commander_two={e.deck_commander_two}
    deck_description={e.deck_description}
    */


    const [isColourless] = useState(props.is_colourless)
    const [isWhite] = useState(props.is_white)
    const [isBlue] = useState(props.is_blue)
    const [isBlack] = useState(props.is_black)
    const [isRed] = useState(props.is_red)
    const [isGreen] = useState(props.is_green)

    return(
        <>
        { props.deck_commander_two ? (
            <div> 
                <article style={DeckEntry}>
                    <section style={DeckEntryHeader}>
                        <div style={DeckEntryHeaderText}>
                            <h3>{props.deck_name}</h3>
                            <p>By: {props.deck_author}</p>
                        </div>
                    </section>
                    <section style={DeckEntryContainer}>
                        <div style={DeckEntryContainerText}>
                            <a href={props.deck_link}>Deck link</a>

                            <p>Discord server link: {props.discord_link}</p>
                            <section style={IsColoursContainer}>
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
                            </section>
                            <section style={ImageContainer}>
                                <div style={ImageHolder}>
                                    <img style={ImageObject} alt={props.deck_commander_one} src={props.deck_commander_one_ref}/>
                                </div>
                                <div style={ImageHolder}>
                                    <img style={ImageObject} alt={props.deck_commander_two} src={props.deck_commander_two_ref}/>
                                </div>
                            </section>
                            <div style={TagPrimary}>{props.tag_primary}</div>
                            <div style={TagResult}>{props.deck_results}</div>
                            <section style={TagContainer}>
                                <div style={TagHolder}>{props.tag_one}</div>
                                <div style={TagHolder}>{props.tag_two}</div>
                                <div style={TagHolder}>{props.tag_three}</div>
                                <div style={TagHolder}>{props.tag_four}</div>
                            </section>
                        </div>
                    </section>
                </article>
            </div>
        ) : 
            <> 
                   <div> 
                <article style={DeckEntry}>
                    <section style={DeckEntryHeader}>
                        <div style={DeckEntryHeaderText}>
                            <h3>{props.deck_name}</h3>
                            <p>By: {props.deck_author}</p>
                        </div>
                    </section>
                    <section style={DeckEntryContainer}>
                        
                        <div style={DeckEntryContainerText}>

                            <a href={props.deck_link}>Deck link</a>
                            <p>Discord server link: {props.discord_link}</p>
                            <section style={IsColoursContainer}>

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
                            </section>
                            <section style={ImageContainer}>
                                <div style={ImageHolder}>
                                    <img style={ImageObject} alt={props.deck_commander_one} src={props.deck_commander_one_ref}/>
                                </div>
                            </section>
                            <div style={TagPrimary}>{props.tag_primary}</div>
                            <div style={TagResult}>{props.deck_results}</div>
                            <section style={TagContainer}>
                                <div style={TagHolder}>{props.tag_one}</div>
                                <div style={TagHolder}>{props.tag_two}</div>
                                <div style={TagHolder}>{props.tag_three}</div>
                                <div style={TagHolder}>{props.tag_four}</div>
                            </section>
                        </div>
                    </section>
                </article>
            </div>
            </>
        

        }
     
    
        </>
    )
}

export default DeckEntryDisplay


const DeckEntry = {
    minHeight: '390px',
    width: '320px',
    margin: '20px 40px',
    position: 'relative'
}

const DeckEntryHeader = {
    backgroundColor: cssArray.headerColour,
    left: '6%',
    width: '92%',
    margin: 'auto',
    position: 'absolute',
    paddingBottom: '10px',
    color: 'lightgray',
    border: `3px solid ${cssArray.headerBorder}`,
    borderRadius: cssArray.entryBorderRadius,
    boxShadow: '4px 4px 4px rgb(0 0 0 / 0.2)'

}

const DeckEntryHeaderText = {
    marginLeft: '5px'
}

const DeckEntryContainer = {
    top: '44px',
    width: '80%',
    paddingTop: '10px',
    margin: 'auto',
    backgroundColor: cssArray.entryColour,
    height: '100%',
    position: 'relative',
    border: `3px solid ${cssArray.entryBorder}`,
    borderRadius: cssArray.entryBorderRadius,
    boxShadow: '8px 8px 5px rgb(0 0 0 / 0.2)'
}

const DeckEntryContainerText = {
    paddingLeft: '2px'
}

const IsColoursContainer = {
    display: 'flex',
    flexDirection: 'col'
}

const ImageContainer = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center'
}

const ImageHolder = {
    height: '200px',
    aspectRatio: '1 / 1.4',
    margin: '5px'

}

const ImageObject = {
    display: 'block',
    width: '100%',
    height: '100%',
    borderRadius: '7px',
    boxShadow: '4px 4px 2px rgb(0 0 0 / 0.2)'
    
}

const TagPrimary = {
    width: '80%',
    backgroundColor: 'pink',
    textAlign: 'center',
    margin: '2px auto'
}

const TagResult = {
    width: '80%',
    backgroundColor: 'lightgreen',
    textAlign: 'center',
    margin: '2px auto'
}

const TagContainer = {
    display: 'flex',
    flexDirection: 'col',
    flexWrap: 'wrap',
    justifyContent: 'center',
    minHeight: '45px'
}

const TagHolder = {
    width: '40%',
    margin: '2px',
    backgroundColor: 'lightblue',
    height: '20px'
}