import { useState } from "react"

const DeckEntryDisplay = (props) => {

    const [isColourless] = useState(props.is_colourless)
    const [isWhite] = useState(props.is_white)
    const [isBlue] = useState(props.is_blue)
    const [isBlack] = useState(props.is_black)
    const [isRed] = useState(props.is_red)
    const [isGreen] = useState(props.is_green)

    return(
        <>
        { props.deck_commander_two ? (
            <> 
               <ul style={DeckEntryStyle}>
                    <li><p>Deck name: {props.deck_name}</p></li>
                    <li> <p>Deck author: {props.deck_author} </p></li>
                    <li> <p>Commander one:  {props.deck_commander_one} </p></li>
                    <li> <p>Commander two:  {props.deck_commander_two} </p></li>
                    <li> <p>Deck description: {props.deck_description} </p></li>
                    <li> <p>Deck link: {props.deck_link} </p></li>
                    <li> <p>Discord link: {props.discord_link}</p> </li>
                    <li> <p>Deck resulsts: {props.deck_results} </p></li>
                    <li> <p>Archetype: {props.tag_primary}</p></li>
                    <li>
                        <div>
                            <label>Colourless</label>
                            <input type="checkbox" id="colourless" checked={isColourless} readOnly={true}/>
                        </div>
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
                    </li>
                    <li style={{border: "2px solid green"}}>
                        <div>
                            <p>{props.tag_one}</p>
                            <p>{props.tag_two}</p>
                            <p>{props.tag_three}</p>
                            <p>{props.tag_four}</p>
                        </div>
                    </li>
                </ul>
            </>
        ) : 
            <> 
                  <ul style={DeckEntryStyle}>
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
                            <input type="checkbox" id="colourless" checked={isColourless} readOnly={true}/>
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

const DeckEntryStyle = {
    border: '2px solid red'
}