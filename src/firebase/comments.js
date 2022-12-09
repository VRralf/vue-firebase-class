import { db } from './index.js';
import { collection, addDoc, getDocs, query, where, orderBy, limit, doc, deleteDoc, updateDoc, onSnapshot } from 'firebase/firestore';
import { ref } from 'vue';

const commentsRef = collection(db, 'comments');
const comments = ref([]);

const addComment = (comment) => {
    addDoc(commentsRef, comment);
};

const deleteComment = (id) => {
    deleteDoc(doc(commentsRef, id));
};


onSnapshot(commentsRef, (snapshot) => {
    comments.value = []
    snapshot.forEach((doc) => {
        console.log('doc', doc.data());
        const comment = {
            id: doc.id,
            body: doc.data().body,
            email: doc.data().email,
            name: doc.data().name,
        };
        console.log('comment', comment);
        comments.value.push(comment);
    });
    return comments;
});


export { addComment, comments, deleteComment };