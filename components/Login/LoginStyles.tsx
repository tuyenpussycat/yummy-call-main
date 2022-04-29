import { StyleSheet } from "react-native";

const loginStyles = StyleSheet.create({
  containerLogin: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  inputView: {
    borderBottomColor: "#003f5c",
    borderBottomWidth: 1,
    width: 300,
    height: 45,
    marginBottom: 20,
    alignItems: "center",
  },

  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    width: 300,
  },

  forgot_button: {
    justifyContent: "center",
    height: 30,
    marginBottom: 30,
    color: "white",
    backgroundColor: "#FF1493",
  },

  loginBtn: {
    width: 140,
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FF1493",
    marginTop: 10,
  },

  loginText: {
    alignItems: "center",
    justifyContent: "center",
    color: "white",
  },

  signupBtn: {
    width: "330px",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FF1493",
    marginTop: 30,
  },

  signupText: {
    color: "white",
  },
});

export default loginStyles;
