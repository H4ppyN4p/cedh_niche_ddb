import { useState } from "react"

import { coloursArray } from "../ColourConsts"

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
                        <h3>{props.deck_name}</h3>
                        <p>By: {props.deck_author}</p>
                    </section>
                    <div style={DeckEntryContainer}>

                        <p>{props.deck_link}</p>
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
                </article>
            </div>
        ) : 
            <> 
                  <ul>
                    <li><p>Deck name: {props.deck_name}</p></li>
                    <li> <p>Deck author: {props.deck_author} </p></li>
                    <li> <p>Commander one:  {props.deck_commander_one} </p></li>
                    <li> <p>Deck description: {props.deck_description} </p></li>
                    <li> <p>Deck link: {props.deck_link} </p></li>
                    <li> <p>Discord link: {props.discord_link}</p> </li>
                    <li> <p>Deck resulsts: {props.deck_results} </p></li>
                    <li> <p>Archetype: {props.tag_primary}</p></li>
                    <li>
                        <div>
                            <label>Colourless</label>
                        </div>
                        <div>
                            <label>White</label>
                            <input type="checkbox" id="white" checked={props.is_white} readOnly={true}/>
                        </div>
                        <div>
                            <label>Blue</label>
                            <input type="checkbox" id="blue" checked={props.is_blue} readOnly={true}/>
                        </div>
                        <div>
                            <label>Black</label>
                            <input type="checkbox" id="black" checked={props.is_black} readOnly={true}/>
                        </div>
                        <div>
                            <label>Red</label>
                            <input type="checkbox" id="red" checked={props.is_red} readOnly={true}/>
                        </div>
                        <div>
                            <label>Green</label>
                            <input type="checkbox" id="green" checked={props.is_green} readOnly={true}/>
                        </div>
                    </li>
                    <li>
                        <div>
                            <p> Tag one: {props.tag_one}</p>
                            <p>{props.tag_two}</p>
                            <p>{props.tag_three}</p>
                            <p>{props.tag_four}</p>
                        </div>
                    </li>
                    <li><p>Discord link: {props.discord_link}</p></li>
                </ul>
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
    backgroundColor: coloursArray.cardHeader,
    left: '6%',
    width: '92%',
    margin: 'auto',
    position: 'absolute',
    paddingBottom: '10px'
}

const DeckEntryContainer = {
    top: '40px',
    width: '80%',
    paddingTop: '10px',
    margin: 'auto',
    backgroundColor: coloursArray.cardColour,
    height: '100%',
    position: 'relative'
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