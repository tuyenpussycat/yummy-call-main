import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
 
import loginStyles from "./SignupStyles";
import { SafeAreaView } from "react-native-safe-area-context";
import signupStyles from "./SignupStyles";


const LoginForm: React.FC = () => {
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
    return(
      <SafeAreaView style={signupStyles.containerSignUp}>
        <View style={loginStyles.inputView1}>
          <TextInput
            style={loginStyles.TextInput1}
            placeholder="Nhập số điện thoại"
            placeholderTextColor="#003f5c"
            autoCapitalize="none"
            keyboardType="numeric"
            textAlign="left"
            onChangeText={(phone) => setPhone(phone)}
          />
        </View>
  
        <View style={loginStyles.inputView1}>
          <TextInput
            style={loginStyles.TextInput1}
            placeholder="Nhập mật khẩu"
            placeholderTextColor="#003f5c"
            autoCapitalize="none"
            textAlign="left"
            secureTextEntry={true}
            onChangeText={(password) => setPassword(password)}
          />
        </View>

        <View style={loginStyles.inputView1}>
          <TextInput
            style={loginStyles.TextInput1}
            placeholder="Xác nhận mật khẩu"
            placeholderTextColor="#003f5c"
            autoCapitalize="none"
            textAlign="left"
            secureTextEntry={true}
            onChangeText={(confirmPassword) => setConfirmPassword(confirmPassword)}
          />
        </View>

  
  
        <TouchableOpacity style={signupStyles.signupBtn1}>
          <Text style={signupStyles.signupText1}>Đăng Ký Tài Khoản</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={signupStyles.loginBtn1}>
          <Text style={signupStyles.signupText1}>Đã có tài khoản? Đăng nhập ngay!</Text>
        </TouchableOpacity>

    </SafeAreaView>
    );
}


export default LoginForm