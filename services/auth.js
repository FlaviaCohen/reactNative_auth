import axios from "axios";

export const authenticate = async (mode, email, password) => {
  const response = await axios.post(
    `https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key=${process.env.FIREBASE_API_KEY}`,
    { email, password, returnSecureToken: true }
  );

  const token = response.data.idToken;
  return token;
};

export const signUp = (email, password) => {
  return authenticate("signUp", email, password);
};

export const login = (email, password) => {
  return authenticate("signInWithPassword", email, password);
};
