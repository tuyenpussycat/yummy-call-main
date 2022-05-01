import React, { useEffect, useState } from "react";
import { Text, TouchableOpacity } from "react-native";
import loginStyles from "./LoginStyles";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  Box,
  Button,
  FormControl,
  Icon,
  Input,
  Link,
  Stack,
  useTheme,
  useToast,
  WarningOutlineIcon,
} from "native-base";
import { DataSignIn } from "../../types";
import { validatePassword, validatePhone } from "../../untils/helper";
import AuthenService from "../../services/Authen.service";
import { useDispatch } from "react-redux";
import { setToken } from "../../store/actions";
import { getItem, setItem } from "../../untils/storage";
import { REFRESH_TOKEN, TOKEN } from "../../constants/storage";
import Toast from "../Toast";

const LoginForm: React.FC = ({ navigation }: any) => {
  const dispatch = useDispatch();
  const toast = useToast();
  const { colors } = useTheme();
  const [enableSubmit, setEnableSubmit] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [dataLogin, setDataLogin] = useState<DataSignIn>({
    phone: "",
    password: "",
  });
  const [error, setError] = useState({
    phone: false,
    password: false,
  });

  const handleLogin = async () => {
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
    try {
      setLoading(true);
      const res = await AuthenService.login(dataLogin);
      await setItem(TOKEN, res.data.accessToken);
      await setItem(REFRESH_TOKEN, res.data.refreshAccessToken);
      dispatch(setToken(res.data.accessToken));
      setLoading(false);
    } catch (error) {
      setLoading(false);
      toast.show({
        render: () => <Toast text="Login fail" color={colors.main} />,
        placement: "top",
      });
    }
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
      <Button
        size="md"
        backgroundColor={colors.main}
        width={300}
        borderRadius={30}
        isLoading={loading}
        disabled={!enableSubmit}
        onPress={handleLogin}>
        Login
      </Button>
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
