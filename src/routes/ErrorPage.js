import { useRouteError } from "react-router-dom";


const ErrorPage = () => {
    
    const error = useRouteError();
    console.error(error)

    return(
        <>
        <div>This is an error page</div>
        <i>{error.statusText || error.message}</i>
        </>
    )
}

export default ErrorPage;
