import { useState } from "react"

import { cssAltThreeArray } from "../ColourConsts"

import black from "../images/symbolBlack.png"
import red from "../images/symbolRed.png"
import green from "../images/symbolGreen.png"
import blue from "../images/symbolBlue.png"
import white from "../images/symbolWhite.png"
import blackOff from "../images/symbolBlackOff.png"
import redOff from "../images/symbolRedOff.png"
import greenOff from "../images/symbolGreenOff.png"
import blueOff from "../images/symbolBlueOff.png"
import whiteOff from "../images/symbolWhiteOff.png"

import discordLogo from "../images/Discord-Logo-PNG-Photo.png"



const DeckEntryDoubleCommander = (props) => {

    const [isWhite] = useState(props.is_white)
    const [isBlue] = useState(props.is_blue)
    const [isBlack] = useState(props.is_black)
    const [isRed] = useState(props.is_red)
    const [isGreen] = useState(props.is_green)

    const [imageHeight, setImageHeight] = useState('200px')
    const [imagePosition, setImagePosition] = useState('relative')
    const [imageBlockHeight, setImageBlockHeight] = useState('0') 
    const [imageZIndex, setImageZIndex] = useState()
    const [imageBottom, setImageBottom] = useState('0')
    const [imageRadius, setImageRadius] = useState('7px')


    const [imageHeightTwo, setImageHeightTwo] = useState('200px')
    const [imagePositionTwo, setImagePositionTwo] = useState('relative')
    const [imageZIndexTwo, setImageZIndexTwo] = useState()
    const [imageBottomTwo, setImageBottomTwo] = useState('0')
    const [imageRadiusTwo, setImageRadiusTwo] = useState('7px')

    
    function onImageHover(){
        setImageHeight('383px')
        setImagePosition('absolute')
        setImageBlockHeight('210px')
        setImageZIndex(2)
        setImageBottom('70')
        setImageRadius('15px')
    }

    function onImageHoverLeave(){
        setImageHeight('200px')
        setImagePosition('relative')
        setImageBlockHeight('0')
        setImageZIndex()
        setImageBottom('0')
        setImageRadius('7px')
    }

    function onImageTwoHover(){
        setImageHeightTwo('383px')
        setImagePositionTwo('absolute')
        setImageBlockHeight('210px')
        setImageZIndexTwo(2)
        setImageBottomTwo('70')
        setImageRadiusTwo('15px')

    }

    function onImageTwoHoverLeave(){
        setImageHeightTwo('200px')
        setImagePositionTwo('relative')
        setImageBlockHeight('0')
        setImageZIndexTwo(0)
        setImageBottomTwo('0')
        setImageRadiusTwo('7px')

    }

 ///

    const DeckEntry = {
        minHeight: '410px',
        width: '320px',
        margin: '20px 40px',
        position: 'relative',
    }

    const DeckEntryHeader = {
        backgroundColor: cssAltThreeArray.headerColour,
        left: '6%',
        width: '92%',
        margin: 'auto',
        position: 'absolute',
        paddingBottom: '50px',
        color: 'lightgray',
        border: `3px solid ${cssAltThreeArray.headerBorder}`,
        borderRadius: cssAltThreeArray.entryBorderRadius,
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
        backgroundColor: cssAltThreeArray.entryColour,
        height: '100%',
        position: 'relative',
        border: `3px solid ${cssAltThreeArray.entryBorder}`,
        borderRadius: cssAltThreeArray.entryBorderRadius,
        boxShadow: '10px 10px 5px rgb(60 20 20 / 0.2)'
    }

    const LinkSection = {
        marginBottom: '15px'
    }

    const DiscordLink = {
        float: 'right'
    }

    const DiscordImage = {
        width: '40px', 
        aspectRatio: '1/0.6', 
        display: 'block', 
        float: 'right'
    }

    const DeckEntryContainerText = {
        paddingLeft: '2px'
    }

    const IsColoursContainer = {
        display: 'flex',
        flexDirection: 'col',
        justifyContent: 'space-around',
        width: '70%',
        margin: 'auto'
    }

    const ImageContainer = {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center'
    }

    const ImageHolder = {
        height: imageHeight,
        position: imagePosition,
        zIndex: imageZIndex,
        bottom: imageBottom,
        aspectRatio: '1 / 1.4',
        margin: '5px',
    }

    const ImageHolderTwo = {
        height: imageHeightTwo,
        position: imagePositionTwo,
        zIndex: imageZIndexTwo,
        bottom: imageBottomTwo,
        aspectRatio: '1 / 1.4',
        margin: '5px',
    }

    const ImageBlock = {
        height: imageBlockHeight
    }

    const ImageObject = {
        display: 'block',
        width: '100%',
        height: '100%',
        borderRadius: imageRadius,
        boxShadow: '4px 4px 2px rgb(0 0 0 / 0.2)',   
    }

    const ImageObjectTwo = {
        display: 'block',
        width: '100%',
        height: '100%',
        borderRadius: imageRadiusTwo,
        boxShadow: '4px 4px 2px rgb(0 0 0 / 0.2)',   
    }

    const TagPrimary = {
        width: '80%',
        backgroundColor: cssAltThreeArray.tagArchetypeColour,
        textAlign: 'center',
        margin: '2px auto',
        border: `2px solid ${cssAltThreeArray.tagsBorder}`,
        borderRadius: '6px',
        boxShadow: '2px 2px 2px rgb(0 0 0 / 0.2)'

    }

    const TagResult = {
        width: '80%',
        backgroundColor: cssAltThreeArray.tagResultColour,
        textAlign: 'center',
        margin: '2px auto',
        border: `2px solid ${cssAltThreeArray.tagsBorder}`,
        borderRadius: '6px',
        boxShadow: '2px 2px 2px rgb(0 0 0 / 0.2)'


    }

    const TagContainer = {
        display: 'flex',
        flexDirection: 'col',
        flexWrap: 'wrap',
        justifyContent: 'center',
        minHeight: '45px',
        marginBottom: '5px',

    }

    const TagHolder = {
        width: '40%',
        margin: '2px',
        backgroundColor: cssAltThreeArray.tagStrategiesColour,
        height: '20px',
        border: `2px solid ${cssAltThreeArray.tagsBorder}`,
        textAlign: 'center',
        borderRadius: '6px',
        boxShadow: '2px 2px 2px rgb(0 0 0 / 0.2)'


    }

    const pipStyle = {
        width: '20px',
        aspectRatio: '1/1',
        display: 'block'
    }

///

    return (
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
                    <section style={LinkSection}>
                                <a href={props.deck_link}>Deck link</a>
                                
                                <a href={props.discord_link} style={DiscordLink}>
                                    <img style={DiscordImage} src={discordLogo} />
                                </a>
                            </section>
                    <section style={IsColoursContainer}>
                            { isWhite ? (
                                <img style={pipStyle} src={white} />
                            ) : 
                                <img style={pipStyle} src={whiteOff} />

                            }
                            <span/>
                            { isBlue ? (
                                <img style={pipStyle} src={blue} />

                            ) : 
                                <img style={pipStyle} src={blueOff} />
                                
                            }
                            <span/>

                            { isBlack ? (
                                <img style={pipStyle} src={black} />

                            ) : 
                                <img style={pipStyle} src={blackOff} />
                        }
                            <span/>

                            { isRed ? (
                               <img style={pipStyle} src={red} />

                            ) : 
                                <img style={pipStyle} src={redOff} />
                             }
                            <span/>

                            { props.isGreen ? (
                                 <img style={pipStyle} src={green} />

                                ) : 

                                <img style={pipStyle} src={greenOff} />
                            }
                    </section>
                    <section style={ImageContainer}>
                        <div style={ImageBlock}></div>
                        
                        <div
                        onMouseEnter={() => onImageHover()} 
                        onMouseLeave={() => onImageHoverLeave()}
                        style={ImageHolder}>
                            <img style={ImageObject} alt={props.deck_commander_one} src={props.deck_commander_one_ref}/>
                        </div>
                        <div
                        onMouseEnter={() => onImageTwoHover()} 
                        onMouseLeave={() => onImageTwoHoverLeave()}
                        style={ImageHolderTwo}>
                            <img style={ImageObjectTwo} alt={props.deck_commander_two} src={props.deck_commander_two_ref}/>
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
    )
}

export default DeckEntryDoubleCommander