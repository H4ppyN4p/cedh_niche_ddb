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
        <div></div>
        <div style={Container}>
            <ul>
                <li style={ListElement}>
                    <Link to={'/maindecks'}>Home</Link>
                </li>
                <li style={ListElement}>
                    <Link to={'/outdateddecks'}>Outdated Decks</Link>
                </li>
                <li style={ListElement}>
                    <Link to={'/newdecks'}>New Decks</Link>
                </li>

              
                { user ? (
                        <li style={ListElement}>
                            <Link style={LoggedInStyle} to={'/createdecks'}>Create decks</Link>
                            <Link style={LoggedInStyle} to={'/editdecks'}>Edit decks</Link>
                            <Link style={LoggedInStyle} to={'/uploadcommander'}>Upload Commander images</Link>

                            <button onClick={signOutFromFirebase}>Logout</button>
                        </li>
                      
                    ) : (
                        <>
                      
                        </>
                    )
                }
               
                 
            </ul>
        </div>

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
    backgroundColor: '#D77272'

}

const ListElement = {
    display: 'inline',
    paddingRight: '20px'
}

const Content = {
    minHeight: '500px',
    backgroundColor: '#72BFD7'
}

const LoggedInStyle = {
    paddingRight: '20px'
}