const { createMockUserToken } = require('@firebase/util');
const firebase = require('firebase/app');
require('firebase/auth');

const firebaseConfig = {
    apiKey: process.env.APIKEY,
    authDomain: process.env.AUTHDOMAIN,
    projectId: process.env.PROJECTID,
    storageBucket: process.env.STORAGEBUCKET,
    messagingSenderId: process.env.MESSAGINGSENDERID,
};

firebase.initializeApp(firebaseConfig);

module.exports = { 
    async createNewUser(email, password){
        try{
        const result = await firebase
        .auth()
        .createUserWithEmailAndPassword(email, password);

    return result.user.uid;
        }catch (error){
            console.warn(error);
        }
    },

    async login(email, password){
        
       const result = await firebase
       .auth()
       .signInWithEmailAndPassword(email,password);

       return result.user.uid;
    }

}
