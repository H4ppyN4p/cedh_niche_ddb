import { redirect } from "react-router-dom"
import { auth } from "./firebase"


export async function onMainDeckLoad() {

    //const user = await auth.currentUser.uid
    console.log('this is loading the main page')
    console.log(auth.currentUser)
    
    if (auth.currentUser != null) {
        return null
    } else {
        return redirect("/")
    }
    
}
