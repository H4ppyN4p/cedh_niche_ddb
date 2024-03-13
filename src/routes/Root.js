import { Outlet, Link } from "react-router-dom";


const Root = () => {
    return(
        <>
        <div>
            <p>This will work like a nav-bar</p>
            <ul>
                <li>
                    <Link to={'/'}>Home</Link>
                </li>
                <li>
                    <Link to={'/outdated'}>Outdated Decks</Link>
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