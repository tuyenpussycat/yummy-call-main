import React, { useEffect, useState } from "react";
import { Text, TouchableOpacity } from "react-native";
import loginStyles from "./LoginStyles";
import { SafeAreaView } from "react-native-safe-area-context";
import { Box, FormControl, Icon, Input, Link, Stack, WarningOutlineIcon } from "native-base";
import { DataSignIn } from "../../types";
import { validatePassword, validatePhone } from "../../untils/helper";
import AuthenService from "../../services/Authen.service";
import { useDispatch } from "react-redux";
import { setToken } from "../../store/actions";

const LoginForm: React.FC = ({ navigation }: any) => {
  const dispatch = useDispatch();
  const [enableSubmit, setEnableSubmit] = useState<boolean>(false);
  const [dataLogin, setDataLogin] = useState<DataSignIn>({
    phone: "",
    password: "",
  });
  const [error, setError] = useState({
    phone: false,
    password: false,
  });

  const handleLogin = () => {
    if (!validatePhone.test(dataLogin.phone) && !validatePassword(dataLogin.password)) {
      setError({ password: true, phone: true });
      return;
    }

    if (!dataLogin.password.length || !validatePassword(dataLogin.password)) {
      setError({ ...error, password: true });
      return;
    }

    if (!dataLogin.phone.length || !validatePhone.test(dataLogin.phone)) {
      setError({ ...error, phone: true });
      return;
    }

    AuthenService.login(dataLogin).then((res) => {
      dispatch(setToken(res.data.accessToken));
    });
  };

  const onChangeInput = (key: string, value: string) => {
    setError({
      ...error,
      [key]: false,
    });
    setDataLogin({
      ...dataLogin,
      [key]: value.toString().trim(),
    });
  };

  const checkEnable = () => {
    if (error.phone || error.password) {
      setEnableSubmit(false);
      return;
    }
    setEnableSubmit(true);
  };

  useEffect(() => {
    checkEnable();
  }, [error]);
  return (
    <SafeAreaView style={loginStyles.containerLogin}>
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

      <Link href="#" isExternal _text={{ color: "pink.700" }} mt={2} mb={2}>
        Quên mật khẩu?
      </Link>

      <TouchableOpacity style={loginStyles.loginBtn} disabled={!enableSubmit} onPress={handleLogin}>
        <Text style={loginStyles.loginText}>Đăng Nhập</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={loginStyles.signupBtn}
        onPress={() => {
          navigation.navigate("Register");
        }}>
        <Text style={loginStyles.signupText}>Chưa có tài khoản? Đăng ký ngay!</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default LoginForm;
