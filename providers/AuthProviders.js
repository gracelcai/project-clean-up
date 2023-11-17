const AuthContext = React.createContext(null);

const login = async(email, password) =>{
    const creds = Realm.Credentials.emailPassword();
    const newUser = await app.logIn(creds);
    setUser(newUser);
};

const signUp = async (email, password) => {
    await app.emailPasswordAuth.registerUser({ email, password });
};