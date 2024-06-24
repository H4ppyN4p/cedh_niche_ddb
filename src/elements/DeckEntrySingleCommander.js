import { useState } from "react"

import { cssLightArray } from "../ColourConsts"

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
import links from "../images/hyperlink-icon.png"



const DeckEntrySingleCommander = (props) => {

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

   

 ///

    const DeckEntry = {
        minHeight: '410px',
        width: '320px',
        margin: '20px 40px',
        position: 'relative',
    }

    const DeckEntryHeader = {
        backgroundColor: cssLightArray.headerColour,
        left: '6%',
        width: '87%',
        margin: 'auto',
        position: 'absolute',
        paddingBottom: '50px',
        color: cssLightArray.headerTextColour,
        border: `3px solid ${cssLightArray.headerBorder}`,
        borderRadius: cssLightArray.entryBorderRadius,
        boxShadow: '4px 4px 4px rgb(0 0 0 / 0.2)'

    }

    const DeckEntryHeaderText = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    }

    const DeckAuthor = {
        overflow: 'auto',
        height: '19px'
 
    }

    const DeckEntryContainer = {
        top: '67px',
        width: '74%',
        paddingTop: '7px',
        margin: 'auto',
        backgroundColor: cssLightArray.entryColour,
        height: '354px',
        position: 'relative',
        border: `3px solid ${cssLightArray.entryBorder}`,
        borderRadius: cssLightArray.entryBorderRadius,
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

    const LinkImage = {
        width: '40px', 
        aspectRatio: '1/0.85', 
        display: 'block', 
        float: 'left'
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

    const TagPrimary = {
        width: '90%',
        backgroundColor: cssLightArray.tagArchetypeColour,
        textAlign: 'center',
        margin: '2px auto',
        border: `2px solid ${cssLightArray.tagsBorder}`,
        borderRadius: '6px',
        boxShadow: '2px 2px 2px rgb(0 0 0 / 0.2)'

    }

    const TagResult = {
        width: '90%',
        backgroundColor: cssLightArray.tagResultColour,
        textAlign: 'center',
        margin: '2px auto',
        border: `2px solid ${cssLightArray.tagsBorder}`,
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
        width: '45%',
        margin: '2px',
        backgroundColor: cssLightArray.tagStrategiesColour,
        height: '20px',
        border: `2px solid ${cssLightArray.tagsBorder}`,
        textAlign: 'center',
        borderRadius: '6px',
        boxShadow: '2px 2px 2px rgb(0 0 0 / 0.2)',
        overflow: 'auto'

    }

    const pipStyle = {
        width: '20px',
        aspectRatio: '1/1',
        display: 'block',
        marginTop: '1px',
        boxShadow: '2px 2px 2px rgb(0 0 0 / 0.95)',
        borderRadius: '10px'

    }

///

    return (
        <div> 
                <article style={DeckEntry}>
                    <section style={DeckEntryHeader}>
                        <div style={DeckEntryHeaderText}>
                            <a target="_blank" href={props.deck_link}><h3>{props.deck_name}</h3></a>
                        </div>
                        <p style={DeckAuthor}>By: {props.deck_author}</p>
                        <section style={IsColoursContainer}>

                                    { isWhite ? (
                                        <img alt="white pip" style={pipStyle} src={white} />
                                    ) : 
                                        <img alt="white pip off" style={pipStyle} src={whiteOff} />

                                    }
                                    <span/>
                                    { isBlue ? (
                                        <img alt="blue pip" style={pipStyle} src={blue} />

                                    ) : 
                                        <img alt="blue pip off" style={pipStyle} src={blueOff} />
                                        
                                    }
                                    <span/>

                                    { isBlack ? (
                                        <img alt="black pip" style={pipStyle} src={black} />

                                    ) : 
                                        <img alt="black pip off" style={pipStyle} src={blackOff} />
                                    }
                                    <span/>

                                    { isRed ? (
                                       <img alt="red pip" style={pipStyle} src={red} />

                                    ) : 
                                        <img alt="red pip off" style={pipStyle} src={redOff} />
                                     }
                                    <span/>

                                    { isGreen ? (
                                         <img alt="green pip" style={pipStyle} src={green} />

                                        ) : 
                                        
                                        <img alt="green pip off" style={pipStyle} src={greenOff} />
                                    }
                        </section>
                    </section>
                    <section style={DeckEntryContainer}>
                        <div style={DeckEntryContainerText}>
                           
                            
                            <section style={ImageContainer}>
                                <div style={ImageBlock}></div>

                                <div 
                                onMouseEnter={() => onImageHover()} 
                                onMouseLeave={() => onImageHoverLeave()}
                                style={ImageHolder}>
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
                            <section style={LinkSection}>
                                <a target="_blank" href={props.deck_link}>
                                    <img alt="link to decklist" style={LinkImage} src={links} />
                                </a>
                                
                                <a target="_blank" href={props.discord_link} style={DiscordLink}>
                                    <img alt="link to discord server" style={DiscordImage} src={discordLogo} />
                                </a>
                            </section>
                        </div>
                    </section>
                </article>
            </div>
    )
}

export default DeckEntrySingleCommander