import { useState, useEffect } from "react";
import { database, image } from "../firebase";
import { ref, uploadBytes, listAll, list } from "firebase/storage"

const UploadCommander = () => {

    const [commanderOne, setCommanderOne] = useState('')

    //handle images for firebase
    const [img, setImg] = useState('') 
    const [allImgs, setAllImgs] = useState()

    const listOfImgs = new Promise(function(myResolve, myReject) {
        listAll(ref(image, 'commanders'))

        myResolve();
        myReject();
    })
    

    
    
    useEffect(() => {
        setAllImgs(listOfImgs)
        console.log(allImgs)
    }, [listOfImgs !== undefined])
    
 
    const uploadImage = () => {
    
        const imgRef = ref(image, `commanders/${commanderOne}`)
        uploadBytes(imgRef, img)
 

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
        </>
    )
}

export default UploadCommander;