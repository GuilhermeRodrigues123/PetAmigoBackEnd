const firebase = require("firebase/app");
require("firebase/auth");

const firebaseConfig = {
    apiKey: process.env.API_KEY,
    authDomain: process.env.AUTH_DOMAIN,
    projectId: process.env.PROJECT_ID,
    storageBucket: process.env.STORAGE_BUCKET,
    messagingSenderId: process.env.MESSAGING_SENDER_ID,
};

 firebase.initializeApp(firebaseConfig);

module.exports = { 
    async createNewUsuario(email, senha){
 
        const result = await firebase
        .auth()
        .createUserWithEmailAndPassword(email, senha);

    return result.user.uid;
       
    },

    async login(email, senha){
        
       const result = await firebase
       .auth()
       .signInWithEmailAndPassword(email, senha);

       return result.user.uid;
    }

}
