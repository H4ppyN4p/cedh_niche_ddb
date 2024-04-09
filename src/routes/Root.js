import { Outlet, Link } from "react-router-dom";
import '../baseStyle.css'
import { auth } from "../firebase";
import { signOut } from "firebase/auth";
import { useAuthState, } from "react-firebase-hooks/auth";

//Firebase



const Root = () => {

    const [user] = useAuthState(auth)

    function signOutFromFirebase(){
        signOut(auth).then(() => {
            console.log('signout successfull')
        }).catch((e) => {
            console.log('something went wrong: ' + e)
        })
    }

    
    //console.log(JSON.stringify(database, null, 4))

   

    return(
        <>
        <nav style={Container}>
            <h2 style={NavElement}>Logo</h2> 
            <Link style={NavElement} to={'/'}>Fringe Decks</Link>
            <Link style={NavElement} to={'/outdateddecks'}>Outdated Decks</Link>
            <Link style={NavElement} to={'/newdecks'}>New Decks</Link>
            <Link style={NavElement} to={'/metadecks'}>Meta Decks</Link>

              
            { user ? (
                    <div style={LoggedInElements}>
                        <div>///</div>
                        <Link style={NavElement} to={'/createdecks'}>Create decks</Link>
                        <Link style={NavElement} to={'/editdecks'}>Edit decks</Link>
                        <button style={NavElement} onClick={signOutFromFirebase}>Logout</button>
                    </div>
                    
                ) : (
                    <>
                    
                    </>
                )
            }          
        </nav>

        <div style={{padding: '20px', 
        backgroundColor: '#72BFD7',

        }}></div>
        <div style={Content}>
            <Outlet />
        </div>
        </>
    )
}


export default Root;

const Container = {
    display: 'flex',
    margin: 0,
    flexDirection: 'row',
    backgroundColor: '#D77272',
    position: 'fixed',
    width: '100%',
    alignItems: 'flex-end'

}

const NavElement = {
    margin: '0 10px'
}

const LoggedInElements = {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-end'
}

const Content = {
    minHeight: '500px',
    backgroundColor: '#72BFD7'
}

