import db from './configFirebase';
import {doc, getDoc} from "firebase/firestore";


const getDocument = async (collection: any, idDocument: any) => {
    const docRef = doc(db, collection, idDocument);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        return console.log("Document data:", docSnap.data());
    } else {
        // docSnap.data() will be undefined in this case
       return  console.log("No such document!");
    }
}

const getAllDocument = async () => {

}