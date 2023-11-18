import React, { useContext, useState, useEffect, useRef } from "react";
import Realm from "realm";
import app from "../RealmApp";

const AuthContext = React.createContext(null);

//commented out for now
// const AuthProvider = ({ children }) =>{
//     const [user, setUser] = useState(app.currentUser);
//     const realmRef = useRef(null);

//     useEffect(() => {
//         if(!user){
//             console.warn("NO USER");
//             return;
//         }

//         const config = {
//             sync: {
//                 user,
//                 partitionValue: `user=${user.id}`,
//             }
//         }
//     });
//}

const login = async(email, password) =>{
    const creds = Realm.Credentials.emailPassword();
    const newUser = await app.logIn(creds);
    setUser(newUser);
};

const signUp = async (email, password) => {
    await app.emailPasswordAuth.registerUser({ email, password });
};