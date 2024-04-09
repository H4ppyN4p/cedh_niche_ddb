import { useState } from "react"

const DeckEntryDisplay = (props) => {

    /*
    id={e.id}
    deck_author={e.deck_author}
    deck_category={e.deck_category}
    deck_commander_one={e.deck_commander_one}
    deck_commander_one_ref={e.deck_commander_one_ref}
    deck_commander_two={e.deck_commander_two}
    deck_commander_two_ref={e.deck_commander_two_ref}
    deck_description={e.deck_description}
    deck_link={e.deck_link}
    deck_name={e.deck_name}
    deck_results={e.deck_results}
    is_black={e.is_black}
    is_blue={e.is_blue}
    is_colourless={e.is_colourless}
    is_green={e.is_green}
    is_red={e.is_red}
    is_white={e.is_white}
    tag_primary={e.tag_primary}
    tag_one={e.tag_one}
    tag_two={e.tag_two}
    tag_three={e.tag_three}
    tag_four={e.tag_four}
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
                    <h3>{props.deck_name}</h3>
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
                                <img style={ImageObject} src={props.deck_commander_one_ref}/>
                            </div>
                            <div style={ImageHolder}>
                                <img style={ImageObject} src={props.deck_commander_two_ref}/>
                            </div>
                        </section>
                        <div style={TagPrimary}>{props.tag_primary}</div>
                        <section style={TagContainer}>
                            <div style={TagHolder}>{props.tag_one}</div>
                            <div style={TagHolder}>{props.tag_two}</div>
                            <div style={TagHolder}>{props.tag_three}</div>
                            <div style={TagHolder}>{props.tag_four}</div>
                        </section>
                        <p>{props.deck_category}</p>
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
    border: '2px solid green',
    minHeight: '200px',
    width: '330px',
}

const DeckEntryContainer = {
    width: '80%',
    margin: 'auto',
    backgroundColor: 'lightgrey'
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

const TagContainer = {
    display: 'flex',
    flexDirection: 'col',
    flexWrap: 'wrap',
    justifyContent: 'flex-start'
}

const TagHolder = {
    width: '40%',
    margin: '2px',
    backgroundColor: 'lightblue'
}