// import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth"
// import { doc, setDoc } from "firebase/firestore"
// import db from "../../../confiq"
// import { LOGIN_WITH_GOOGLE_FAIL, LOGIN_WITH_GOOGLE_REQUEST, LOGIN_WITH_GOOGLE_SUCCESS } from "./authConstants"

// export const loginWithGoogle = () => async dispatch => {
//     try {
//         dispatch({ type: LOGIN_WITH_GOOGLE_REQUEST })
//         const provide = new GoogleAuthProvider()
//         const auth = getAuth()
//         const { user: { uid, email, displayName, photoURL } } = await signInWithPopup(auth, provide)


//         const docRef = doc(db, "users", uid)
//         const users = {
//             email,
//             name: displayName,
//             avatar: photoURL
//         }
//         localStorage.setItem("localLogin", JSON.stringify(users))
//         const result = await setDoc(docRef, users)


//         dispatch({ type: LOGIN_WITH_GOOGLE_SUCCESS, payload: users })

//     } catch (error) {
//         dispatch({ type: LOGIN_WITH_GOOGLE_FAIL, payload: "" + error })
//     }



// }

