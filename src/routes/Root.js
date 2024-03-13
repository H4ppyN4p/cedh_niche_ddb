import { Outlet, Link } from "react-router-dom";
import '../baseStyle.css'


const Root = () => {
    return(
        <>
        <div style={Container}>
            <p>This will work like a nav-bar</p>
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

        <div>
            <Outlet />
        </div>
        </>
    )
}


export default Root;

const Container = {
    display: 'flex',
    margin: 0
}



const ListElement = {
    display: 'inline',
    paddingLeft: '20px',
    paddingRight: '20px'
}