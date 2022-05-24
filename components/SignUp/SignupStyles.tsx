import { StyleSheet } from "react-native";

const signupStyles = StyleSheet.create({
  containerSignUp: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  inputView1: {
    borderBottomColor: "#003f5c",
    borderBottomWidth: 1,
    width: 300,
    height: 45,
    marginBottom: 20,
    alignItems: "center",
  },

  TextInput1: {
    height: 50,
    flex: 1,
    padding: 10,
    width: 300,
  },

  signupBtn1: {
    width: 140,
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FF1493",
    marginTop: 30,
  },

  signupText1: {
    alignItems: "center",
    justifyContent: "center",
    color: "white",
  },

  loginBtn1: {
    width: 330,
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FF1493",
    marginTop: 30,
  },

  loginText1: {
    color: "white",
  },
});

export default signupStyles;
