import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import type { UserAuthRequest, UserRequest } from "../../types/auth.types.ts";

const AuthServices = {
  createUser: async (userData: UserRequest) => {
    const auth = getAuth();
    const { user } = await createUserWithEmailAndPassword(
      auth,
      userData.email,
      userData.password
    );
    await updateProfile(user, {
      displayName: userData.name,
    });
    const userToken = await user.getIdToken();
    return {
      name: userData.name,
      token: userToken,
    };
  },
  authenticateUser: async (userData: UserAuthRequest) => {
    const auth = getAuth();
    const { user } = await signInWithEmailAndPassword(
      auth,
      userData.email,
      userData.password
    );
    const userToken = await user.getIdToken();
    console.log(user);
    if (user.displayName) {
      return { name: user.displayName, token: userToken };
    }
    throw new Error("erro na autenticação");
  },
};

export { AuthServices };
