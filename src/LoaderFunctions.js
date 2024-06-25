import { redirect } from "react-router-dom"
import { auth } from "./firebase"


export async function checkAuthCredent() {

    //const user = await auth.currentUser.uid
    console.log('this is loading the main page')
    
    if (auth.currentUser != null) {
        return null
    } else {
        return redirect("/")
    }
    
}

export async function defaultRedirect(){
    return redirect("/")
}