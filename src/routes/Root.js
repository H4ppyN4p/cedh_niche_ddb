import { Outlet, Link } from "react-router-dom";
import '../baseStyle.css'

//Firebase
import { app } from "../firebase";


const Root = () => {

    console.log(app)

    return(
        <>
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
