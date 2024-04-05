import { useState} from "react";
import { image } from "../firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage"
import { v4 } from "uuid";

const UploadCommander = () => {

    const [commanderOne, setCommanderOne] = useState('')

    //handle images for firebase
    const [img, setImg] = useState('') 

    function checkUUID(){
        console.log(v4())
    }

    const metadata = {
        name: commanderOne
    }

    function uploadImage(){
        const imgRef = ref(image, `commanders/${v4()}`)
        uploadBytes(imgRef, img, metadata).then((snapshot) => {
            getDownloadURL( snapshot.ref).then(url => {
                console.log(url)
            })
        })
    }

    return(
        <>
            <div>
                <label htmlFor='CommanderOne'>Commander Name (be precise): </label>
                <input type="text" name="CommanderOne" value={commanderOne} onInput={e => setCommanderOne(e.target.value)}/>
            </div>

           <div>
              <label>Image one</label>
              <input type="file" onChange={(e) => setImg(e.target.files[0])} />
            </div>

            <button onClick={uploadImage}>Add Image </button>
            <button onClick={checkUUID}>Check random ID </button>
        </>
    )
}

export default UploadCommander;