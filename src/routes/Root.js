import { Outlet, Link } from "react-router-dom";
import '../baseStyle.css'
import { auth } from "../firebase";
import { signOut } from "firebase/auth";
import { useAuthState, } from "react-firebase-hooks/auth";

//Firebase

import {cssDarkArray } from "../ColourConsts";
import Footer from "../elements/Footer";

//image
import logo from '../images/logo.final1.png'



const Root = () => {

    const [user] = useAuthState(auth)

    function signOutFromFirebase(){
        signOut(auth).then(() => {
            console.log('signout successfull')
        }).catch((e) => {
            console.log('something went wrong: ' + e)
        })
    }

    ///     
        const Container = {
            backgroundColor: '#352538',
            zIndex: 50,
            width: '100%',
            position: 'fixed',
            borderBottom: '2px solid black '
        }

        const NavStyle = {
            width: '60%', 
            display: 'flex',
            margin: 'auto',
            flexDirection: 'row',
            zIndex: 40,
        }

        const NavStyleInner = {
                display: 'flex',
                margin: 'auto',
                flexDirection: 'row',
                zIndex: 40,
                justifyContent: 'space-between',
                alignItems: 'center',
                color: 'gray'
        }

        const NavElement = {
            margin: '0 10px',
            color: 'lightgray'
        }

        const LoggedInElements = {
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'flex-end'
        }

        const Content = {
            paddingTop: '30px',
            position: 'relative',
            minHeight: '1000px',
            backgroundColor: cssDarkArray.BgColour
        }

        const PaddingElement = {
            padding: '20px', 
            backgroundColor: cssDarkArray.BgColour,
        }

    ///

    return(
        <>
        <nav style={Container}>
            <div style={NavStyle}>
                <Link to={'/'} style={{ width: '50px', aspectRatio: '1/1'}}>
                    <img alt="Logo" style={{display: 'block', width: '100%', height: '100%'}} src={logo} />
                </Link>

                <div style={NavStyleInner}>
                    <Link style={NavElement} to={'/'}>Fringe Decks</Link>
                    <Link style={NavElement} to={'/outdateddecks'}>Outdated Decks</Link>
                    <Link style={NavElement} to={'/newdecks'}>New Decks</Link>
                    <Link style={NavElement} to={'/metadecks'}>Meta Decks</Link>
                    <a style={NavElement} href="https://discord.gg/upE7RXM3rp" >Submit a Deck</a>

                
                { user ? (
                        <div style={LoggedInElements}>
                            <div>///</div>
                            <Link style={NavElement} to={'/createdecks'}>Create decks</Link>
                            <Link style={NavElement} to={'/editdecks'}>Edit decks</Link>
                            <button onClick={signOutFromFirebase}>Logout</button>
                        </div>
                        
                    ) : (
                        <>
                        
                        </>
                    )
                    
                }   
                </div>
            </div>       
        </nav>

        <div style={PaddingElement}></div>

        <div style={Content}>
            <Outlet />
        </div>

        <div style={PaddingElement}></div>
        
        <Footer />
        </>
    )
}


export default Root;
