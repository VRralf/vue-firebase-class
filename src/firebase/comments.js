import { app } from './index.js';
import { collection, addDoc, doc, deleteDoc, onSnapshot, getFirestore } from 'firebase/firestore';
import { comments } from '../store/PostStore.js'

const db = getFirestore(app)
const commentRef = collection(db, 'comments')

const addComment = (comment) => {
    addDoc(commentRef, comment)
}

const getComments = () => {
    onSnapshot(commentRef, (snapshot) => {
        comments.value = []
        snapshot.forEach(commentData => {
            let newComment = {
                id: commentData.id,
                postId: commentData.data().postId,
                date: commentData.data().date,
                name: commentData.data().name,
                email: commentData.data().email,
                text: commentData.data().text,
                photo: commentData.data().photo,
            }
            comments.value.push(newComment)
        })
        comments.value.sort((a,b) => b.date - a.date)
    })
}

export { addComment, getComments }