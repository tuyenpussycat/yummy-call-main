import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import EditScreenInfo from '../../components/EditScreenInfo';
import { RootTabScreenProps } from '../../types';
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
 
import loginStyles from "./LoginStyles";
import { SafeAreaView } from "react-native-safe-area-context";



const LoginForm: React.FC = () => {
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
    return(
      <SafeAreaView style={loginStyles.containerLogin}>
        <View style={loginStyles.inputView}>
          <TextInput
            style={loginStyles.TextInput}
            placeholder="Nhập số điện thoại:"
            placeholderTextColor="#003f5c"
            autoCapitalize="none"
            keyboardType="numeric"
            textAlign="left"
            onChangeText={(phone) => setPhone(phone)}
          />
        </View>
        
        <View style={loginStyles.inputView}>
          <TextInput
            style={loginStyles.TextInput}
            placeholder="Nhập mật khẩu:"
            placeholderTextColor="#003f5c"
            autoCapitalize="none"
            textAlign="left"
            secureTextEntry={true}
            onChangeText={(password) => setPassword(password)}
          />
        </View>

  
        <TouchableOpacity>
          <Text style={loginStyles.forgot_button}>Quên mật khẩu?</Text>
        </TouchableOpacity>
  
        <TouchableOpacity  style={loginStyles.loginBtn}>
            <Text style={loginStyles.loginText}>Đăng Nhập</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={loginStyles.signupBtn} onPress={()=>{

        }}>
          <Text style={loginStyles.signupText}>Chưa có tài khoản? Đăng ký ngay!</Text>
        </TouchableOpacity>

    </SafeAreaView>
    );
}

export default LoginForm
