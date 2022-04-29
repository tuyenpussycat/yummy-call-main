import React, { useEffect, useState } from "react";
import { Text, View, TextInput, TouchableOpacity } from "react-native";

import loginStyles from "./SignupStyles";
import { SafeAreaView } from "react-native-safe-area-context";
import signupStyles from "./SignupStyles";
import { Box, FormControl, Input, Stack, WarningOutlineIcon } from "native-base";
import { DataSignUp } from "../../types";
import { validatePassword, validatePhone } from "../../untils/helper";
import AuthenService from "../../services/Authen.service";
const SignUpForm: React.FC = ({ navigation }: any) => {
  const [enableSubmit, setEnableSubmit] = useState<boolean>(false);
  const [dataRegister, setDataRegister] = useState<DataSignUp>({
    phone: "",
    password: "",
    confirmpassword: "",
  });
  const [error, setError] = useState({
    phone: false,
    password: false,
    confirmpassword: false,
  });

  const handleRegister = () => {
    if (
      !validatePhone.test(dataRegister.phone) &&
      !validatePassword(dataRegister.password) &&
      dataRegister.password !== dataRegister.confirmpassword
    ) {
      setError({ password: true, phone: true, confirmpassword: true });
      return;
    }

    if (!dataRegister.password.length || !validatePassword(dataRegister.password)) {
      setError({ ...error, password: true });
      return;
    }

    if (!dataRegister.phone.length || !validatePhone.test(dataRegister.phone)) {
      setError({ ...error, phone: true });
      return;
    }

    if (dataRegister.confirmpassword !== dataRegister.password) {
      setError({ ...error, confirmpassword: true });
      return;
    }

    AuthenService.register(dataRegister);
  };

  const onChangeInput = (key: string, value: string) => {
    setError({
      ...error,
      [key]: false,
    });
    setDataRegister({
      ...dataRegister,
      [key]: value,
    });
    checkEnable();
  };

  const checkEnable = () => {
    if (error.phone || error.confirmpassword || error.password) {
      setEnableSubmit(false);
      return;
    }
    setEnableSubmit(true);
  };

  useEffect(() => {
    checkEnable();
  }, [error]);

  return (
    <SafeAreaView style={signupStyles.containerSignUp}>
      <Box alignItems="center" w="100%" maxWidth="300px">
        <Box w="100%" maxWidth="300px">
          <FormControl isRequired isInvalid={error.phone}>
            <Stack mx="4">
              <FormControl.Label>Phone number</FormControl.Label>
              <Input
                type="text"
                placeholder="phone"
                variant="underlined"
                style={{ color: "#000" }}
                onChangeText={(value) => onChangeInput("phone", value)}
              />
              <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
                Phone is invalid
              </FormControl.ErrorMessage>
            </Stack>
          </FormControl>
        </Box>
      </Box>
      <Box alignItems="center" w="100%" maxWidth="300px">
        <Box w="100%" maxWidth="300px">
          <FormControl isRequired isInvalid={error.password}>
            <Stack mx="4">
              <FormControl.Label>Password</FormControl.Label>
              <Input
                type="password"
                placeholder="password"
                variant="underlined"
                style={{ color: "#000" }}
                onChangeText={(value) => onChangeInput("password", value)}
              />
              <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
                Your password is at least eight 8 characters long.
              </FormControl.ErrorMessage>
            </Stack>
          </FormControl>
        </Box>
      </Box>

      <Box alignItems="center" w="100%" maxWidth="300px">
        <Box w="100%" maxWidth="300px">
          <FormControl isRequired isInvalid={error.confirmpassword}>
            <Stack mx="4">
              <FormControl.Label>Confirm password</FormControl.Label>
              <Input
                type="password"
                placeholder="confrimpassword"
                variant="underlined"
                style={{ color: "#000" }}
                onChangeText={(value) => onChangeInput("confirmpassword", value)}
              />
              <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
                confrim password not match
              </FormControl.ErrorMessage>
            </Stack>
          </FormControl>
        </Box>
      </Box>

      <TouchableOpacity
        style={signupStyles.signupBtn1}
        disabled={!enableSubmit}
        onPress={handleRegister}>
        <Text style={signupStyles.signupText1}>Đăng Ký Tài Khoản</Text>
      </TouchableOpacity>

      <TouchableOpacity style={signupStyles.loginBtn1} onPress={() => navigation.navigate("Login")}>
        <Text style={signupStyles.signupText1}>Đã có tài khoản? Đăng nhập ngay!</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default SignUpForm;
