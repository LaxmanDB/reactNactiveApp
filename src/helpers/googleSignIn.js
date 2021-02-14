import * as Google from "expo-google-app-auth";
const ANDROID_CLIENT_ID =
  "692888661368-862dvk8lcd0nklesatuat66kolr5b4p6.apps.googleusercontent.com";
const googleSignIn = async () => {
  const result = await Google.logInAsync({
    androidClientId: ANDROID_CLIENT_ID,
    //iosClientId: IOS_CLIENT_ID,
    scopes: [
      "profile",
      "email",
      // "https://www.googleapis.com/auth/user.birthday.read",
    ],
  });
  return result.type === "cancel" ? null : result.user;
};
export default googleSignIn;
