import { Outlet, Link } from "react-router-dom";
import '../baseStyle.css'
import { auth } from "../firebase";

//Firebase
import { app, database } from "../firebase";
import { collection, addDoc } from 'firebase/firestore'


const Root = () => {

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

                { auth.currentUser ? (
                    <li style={ListElement}>
                        <Link to={'/createdecks'}>create decks</Link>
                    </li>
                    ) : (
                        <>
                        <div>
                            <></>
                        </div>
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
