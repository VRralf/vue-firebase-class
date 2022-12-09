import { auth } from './index.js';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { ref } from 'vue';

const provider = new GoogleAuthProvider();
const user = ref(null);


const loginWithGoogle = () => {
    signInWithPopup(auth, provider)
    .then((result) => {
        console.log('result', result);
        user.value = result.user;
    })
    .catch((error) => {
        console.log('error', error);
    });
};

const logout = () => {
    auth.signOut(auth)
    .then(() => {
        console.log('logged out');
        user.value = null;
    }
    )
    .catch((error) => {
        console.log('error', error);
    });
};

export { loginWithGoogle, logout, user };