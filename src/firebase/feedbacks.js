import { app } from './index.js';
import { collection, addDoc, doc, deleteDoc, onSnapshot, getFirestore } from 'firebase/firestore';
import { feedbacks } from '../store/PostStore.js'

const db = getFirestore(app)
const commentRef = collection(db, 'feedbacks')

const addComment = (comment) => {
    addDoc(commentRef, comment)
}

const getComments = () => {
    onSnapshot(commentRef, (snapshot) => {
        feedbacks.value = []
        snapshot.forEach(commentData => {
            let newComment = {
                id: commentData.id,
                date: commentData.data().date,
                name: commentData.data().name,
                email: commentData.data().email,
                text: commentData.data().text,
                photo: commentData.data().photo,
            }
            comments.value.push(newComment)
        })
    })
}

export { addComment, getComments }