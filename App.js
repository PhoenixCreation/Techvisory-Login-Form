import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  KeyboardAvoidingView,
  Pressable,
  Image,
  Alert,
} from "react-native";
import Constants from "expo-constants";
import { Entypo } from "@expo/vector-icons";
import FooterSvg from "./Svg/FooterSvg";

const fontName = "serif";
// If system has {fontName} font then use it, or else fall back to default fonts
const fontFamily = Constants.systemFonts.includes(fontName)
  ? fontName
  : "normal";

// Totaly not from stackoverflow
function validateEmail(email) {
  var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

export default function App() {
  // State for checking weather login using email or socials
  const [loginType, setLoginType] = useState("normal");

  // validation colors to be displayed to icon and login button
  const [validColor, setValidColor] = useState({
    email: "black",
    password: "black",
    button: "#AF3263",
  });

  // User object to store user information
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  // Any type of error message
  const [error, setError] = useState("");

  // validate the information each time user value changes
  useEffect(() => {
    let validEmail = false;
    let validPassword = false;

    // Currently only checking if password in 6 charcters long or not
    // As this is login form, Signup form should check for more constrains
    if (user.password.length > 5) {
      validPassword = true;
    }

    // Using function defined above to check email
    validEmail = validateEmail(user.email);

    // set the colors
    setValidColor({
      email: user.email === "" ? "black" : validEmail ? "green" : "red",
      password:
        user.password === "" ? "black" : validPassword ? "green" : "red",
      button: validPassword && validEmail ? "#FF3263" : "#AF3263",
    });
  }, [user]);

  // The main login function
  // In this function the main login logic will be handled
  const performLogin = () => {
    if (!validateEmail(user.email)) {
      setError("Invalid Email");
      setTimeout(() => {
        setError("");
      }, 4000);
      return;
    }
    if (user.password.length < 6) {
      setError("Password must be 6 character long");
      setTimeout(() => {
        setError("");
      }, 4000);
      return;
    }

    // You are good to go for login
    // Perform any type of login logic here like,
    // firebase.auth.login(user)
    // here we are just gonna show alert
    Alert.alert("Login", "Login Successful");
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <KeyboardAvoidingView style={styles.container} behavior="height">
        <View style={styles.headingCont}>
          <Text style={styles.appName}>Application Name</Text>
          <Text style={styles.greetMsg}>
            Welcome back to the whole new world of mystic land
          </Text>
        </View>
        <View style={styles.mainCont}>
          <View style={styles.outerCont}>
            <View style={styles.loginHeadingCont}>
              {error !== "" ? (
                <Text>{error}</Text>
              ) : (
                <Text style={styles.loginHeading}>Login</Text>
              )}
            </View>
            <Pressable
              style={{
                ...styles.form,
                width: loginType === "normal" ? "100%" : 230,
                height: loginType === "normal" ? "auto" : 40,
              }}
              onPress={() => setLoginType("normal")}
            >
              <Text
                style={{
                  ...styles.normalToggler,
                  opacity: loginType === "normal" ? 0 : 1,
                }}
              >
                User Email and Password
              </Text>
              <View
                style={{ display: loginType === "normal" ? "flex" : "none" }}
              >
                <View style={styles.labelCont}>
                  <Text style={styles.label}>Email:</Text>
                </View>
                <View style={styles.inputCont}>
                  <TextInput
                    value={user.email}
                    onChangeText={(e) => setUser({ ...user, email: e })}
                    style={styles.inputField}
                    placeholder="e.g. jay123@domain.com"
                  />
                  <Entypo name="email" size={24} color={validColor.email} />
                </View>
                <View style={styles.labelCont}>
                  <Text style={styles.label}>Password:</Text>
                </View>
                <View style={styles.inputCont}>
                  <TextInput
                    value={user.password}
                    onChangeText={(e) => setUser({ ...user, password: e })}
                    style={styles.inputField}
                    placeholder="Your Password"
                    secureTextEntry={true}
                  />
                  <Entypo name="lock" size={24} color={validColor.password} />
                </View>
                <Text style={styles.forgotPassword}>Forgot Password?</Text>
                <Pressable
                  style={{
                    ...styles.loginCont,
                    backgroundColor: validColor.button,
                  }}
                  onPress={() => performLogin()}
                >
                  <Text style={styles.loginText}>Login</Text>
                </Pressable>
              </View>
            </Pressable>
            <View style={styles.orCont}>
              <View style={styles.dash}></View>
              <Text style={styles.orText}>or</Text>
              <View style={styles.dash}></View>
            </View>
            <Pressable
              style={styles.otherServicesCont}
              onPress={() => setLoginType("other")}
            >
              <View
                style={{
                  ...styles.otherToggler,
                  display: loginType === "normal" ? "flex" : "none",
                  opacity: loginType === "normal" ? 1 : 0,
                }}
              >
                <Text style={styles.otherServicesText}>Use Other services</Text>
                <View style={styles.logoCont}>
                  <Image
                    source={{
                      uri: "https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-google-logos-vector-eps-cdr-svg-download-10.png",
                    }}
                    style={styles.logoImage}
                  />
                </View>
                <View style={styles.logoCont}>
                  <Image
                    source={{
                      uri: "https://www.freepnglogos.com/uploads/apple-logo-png/file-apple-logo-black-svg-wikimedia-commons-1.png",
                    }}
                    style={styles.logoImage}
                  />
                </View>
                <View style={styles.logoCont}>
                  <Image
                    source={{
                      uri: "https://www.freepnglogos.com/uploads/512x512-logo-png/512x512-logo-github-icon-35.png",
                    }}
                    style={styles.logoImage}
                  />
                </View>
              </View>
              <View
                style={{
                  ...styles.otherOptions,
                  display: loginType === "normal" ? "none" : "flex",
                }}
              >
                <View style={styles.optionCont}>
                  <View style={styles.optionLogoCont}>
                    <Image
                      source={{
                        uri: "https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-google-logos-vector-eps-cdr-svg-download-10.png",
                      }}
                      style={styles.optionLogoImage}
                    />
                  </View>
                  <Text style={styles.optionText}>Google</Text>
                </View>
                <View style={styles.optionCont}>
                  <View style={styles.optionLogoCont}>
                    <Image
                      source={{
                        uri: "https://www.freepnglogos.com/uploads/apple-logo-png/file-apple-logo-black-svg-wikimedia-commons-1.png",
                      }}
                      style={styles.optionLogoImage}
                    />
                  </View>
                  <Text style={styles.optionText}>Apple</Text>
                </View>
                <View style={styles.optionCont}>
                  <View style={styles.optionLogoCont}>
                    <Image
                      source={{
                        uri: "https://www.freepnglogos.com/uploads/512x512-logo-png/512x512-logo-github-icon-35.png",
                      }}
                      style={styles.optionLogoImage}
                    />
                  </View>
                  <Text style={styles.optionText}>Github</Text>
                </View>
                <View style={styles.optionCont}>
                  <View style={styles.optionLogoCont}>
                    <Image
                      source={{
                        uri: "https://www.freepnglogos.com/uploads/facebook-logo-17.jpg",
                      }}
                      style={styles.optionLogoImage}
                    />
                  </View>
                  <Text style={styles.optionText}>Facebook</Text>
                </View>
              </View>
            </Pressable>
          </View>
          <Text style={styles.signup}>
            Don’t have an account? Create one here
          </Text>
        </View>
        <View style={styles.footer}>
          <FooterSvg />
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#B0FDEA",
    justifyContent: "space-between",
  },
  headingCont: {
    width: "100%",
    marginTop: 20,
    padding: 30,
    paddingHorizontal: 20,
    paddingBottom: 10,
    alignItems: "center",
  },
  appName: {
    fontSize: 24,
    fontWeight: "bold",
    fontFamily,
    color: "#FF0541",
    textAlign: "center",
  },
  greetMsg: {
    fontSize: 14,
    fontFamily,
    color: "#212121",
    textAlign: "center",
  },
  mainCont: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1,
  },
  footer: {
    alignItems: "center",
    zIndex: -1,
  },
  outerCont: {
    width: 280,
    backgroundColor: "#FBFDA2",
    borderRadius: 20,
    alignItems: "center",
  },
  loginHeadingCont: {
    width: "100%",
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  loginHeading: {
    fontSize: 22,
    fontFamily,
  },
  form: {
    width: "100%",
    backgroundColor: "#72F3A5",
    borderRadius: 15,
    padding: 15,
    paddingBottom: 0,
    borderWidth: 1,
  },
  labelCont: {
    marginTop: 10,
  },
  label: {
    fontSize: 16,
    fontFamily,
  },
  inputCont: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 40,
    backgroundColor: "#fff",
    borderRadius: 15,
    paddingLeft: 15,
    paddingRight: 10,
  },
  inputField: {
    flex: 1,
  },
  forgotPassword: {
    color: "#4335E2",
    fontSize: 13,
    textDecorationLine: "underline",
    marginLeft: 10,
    marginTop: 3,
  },
  loginCont: {
    backgroundColor: "#8F3263",
    width: 200,
    height: 40,
    alignSelf: "center",
    marginTop: 20,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
    transform: [{ translateY: 1 }],
    borderWidth: 1,
    borderBottomWidth: 0,
  },
  loginText: {
    fontSize: 18,
    color: "#fff",
    fontFamily,
  },
  orCont: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 4,
  },
  orText: {
    fontSize: 18,
    fontFamily,
  },
  dash: {
    flex: 1,
    height: 2,
    backgroundColor: "#000",
    marginHorizontal: 15,
  },
  otherServicesCont: {
    minHeight: 40,
    width: "auto",
    marginBottom: 10,
  },
  otherToggler: {
    borderWidth: 1,
    borderColor: "black",
    paddingHorizontal: 10,
    backgroundColor: "#fff",
    borderRadius: 15,
    height: 40,
    alignSelf: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  otherServicesText: {
    fontSize: 13,
    fontFamily,
  },
  logoCont: {
    width: 30,
    height: 30,
    borderRadius: 30,
    backgroundColor: "#e6e6e6",
    marginLeft: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  logoImage: {
    width: 24,
    height: 24,
  },
  signup: {
    color: "#4335E2",
    fontSize: 13,
    textDecorationLine: "underline",
    backgroundColor: "#B0FDEA",
  },
  normalToggler: {
    width: 230,
    height: 40,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    textAlignVertical: "center",
    borderWidth: 1,
    position: "absolute",
    fontFamily,
  },
  otherOptions: {
    alignItems: "center",
  },
  optionCont: {
    margin: 5,
    paddingHorizontal: 10,
    height: 40,
    width: 230,
    borderRadius: 15,
    backgroundColor: "#fff",
    alignItems: "center",
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "#000",
  },
  optionLogoCont: {
    width: 30,
    height: 30,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
  },
  optionLogoImage: {
    width: "100%",
    height: "100%",
  },
  optionText: {
    fontSize: 16,
    fontFamily,
  },
});
