import { addDoc, collection, getDocs } from "@firebase/firestore";
import { message } from "antd";
import { createAction } from "redux-actions"
import { db } from "../../firebase";

export const WRITE_FIRESTORE_JSON = 'WRITE_FIRESTORE_JSON'
export const READ_FIRESTORE_JSON = 'READ_FIRESTORE_JSON'

export const firestoreWriteJson = createAction(WRITE_FIRESTORE_JSON, async (data) => {
    try {
        await addDoc(collection(db, "pages"), data);
    } catch (e) {
        message.error('Error adding document: ' + e)
    }
})

export const firestoreReadJson = createAction(READ_FIRESTORE_JSON, async () => {
    let docs = []
    const querySnapshot = await getDocs(collection(db, "pages"));

    querySnapshot.forEach((doc) => {
        docs.push(doc.data())
    });

    return docs; 
})