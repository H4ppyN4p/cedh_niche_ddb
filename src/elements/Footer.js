import { cssLightArray } from "../ColourConsts";
import { Link } from "react-router-dom";

///

    const Container = {
        backgroundColor: cssLightArray.headerColour,
        borderTop: '2px solid black',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',

    }

    const TextStyle = {
        width: '55%'
    }

///

const Footer = () => {
    return(
        <>
        <footer style={Container}>
            
            <p style={TextStyle}> --- Webside made by Tobias "HappyNap" Hammeken Arboe - <a style={{textDecoration: 'underline'}} href="https://github.com/H4ppyN4p/cedh_niche_ddb">link to github for the project</a> ---</p>
            <p style={TextStyle}> --- For personal inquiries, contact me at mail: tobi5703@gmail.com ---</p>
            <p style={TextStyle}> --- Inquiries about the website can be send to mail at: cedhbrewhouse@gmail.com ---</p>
            <p style={TextStyle}> --- Logo and deck-entry design(s) by CJ Delorto ---</p>
            <p style={TextStyle}> --- <Link to={'/signin'}>Login</Link> ---</p>


        </footer>
        </>
    )
}

export default Footer;

