import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  KeyboardAvoidingView,
  Pressable,
  Image,
} from "react-native";
import Constants from "expo-constants";
import { Entypo } from "@expo/vector-icons";
import FooterSvg from "./Svg/FooterSvg";

const fontName = "serif";
// If system has {fontName} font then use it, or else fall back to default fonts
const fontFamily = Constants.systemFonts.includes(fontName)
  ? fontName
  : "normal";

export default function App() {
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
              <Text style={styles.loginHeading}>Login</Text>
            </View>
            <View style={styles.form}>
              <View style={styles.labelCont}>
                <Text style={styles.label}>Email:</Text>
              </View>
              <View style={styles.inputCont}>
                <TextInput
                  style={styles.inputField}
                  placeholder="e.g. jay123@domain.com"
                />
                <Entypo name="email" size={24} color="black" />
              </View>
              <View style={styles.labelCont}>
                <Text style={styles.label}>Password:</Text>
              </View>
              <View style={styles.inputCont}>
                <TextInput
                  style={styles.inputField}
                  placeholder="Your Password"
                  secureTextEntry={true}
                />
                <Entypo name="lock" size={24} color="black" />
              </View>
              <Text style={styles.forgotPassword}>Forgot Password?</Text>
              <Pressable style={styles.loginCont}>
                <Text style={styles.loginText}>Login</Text>
              </Pressable>
            </View>
            <View style={styles.orCont}>
              <View style={styles.dash}></View>
              <Text style={styles.orText}>or</Text>
              <View style={styles.dash}></View>
            </View>
            <Pressable style={styles.otherServicesCont}>
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
    borderRadius: 10,
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
    backgroundColor: "#FF3263",
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
    height: 40,
    backgroundColor: "#fff",
    alignSelf: "center",
    paddingHorizontal: 10,
    borderRadius: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "black",
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
});
