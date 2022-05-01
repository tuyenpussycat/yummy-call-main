import React, { useEffect, useState } from "react";
import { Text, View, TextInput, TouchableOpacity } from "react-native";

import loginStyles from "./SignupStyles";
import { SafeAreaView } from "react-native-safe-area-context";
import signupStyles from "./SignupStyles";
import {
  Box,
  Button,
  FormControl,
  Input,
  Stack,
  useTheme,
  useToast,
  WarningOutlineIcon,
} from "native-base";
import { DataSignUp } from "../../types";
import { validatePassword, validatePhone } from "../../untils/helper";
import AuthenService from "../../services/Authen.service";
import { setItem } from "../../untils/storage";
import { REFRESH_TOKEN, TOKEN } from "../../constants/storage";
import { setToken } from "../../store/actions";
import { useDispatch } from "react-redux";
import Toast from "../Toast";
import colors from "native-base/lib/typescript/theme/base/colors";
const SignUpForm: React.FC = ({ navigation }: any) => {
  const toast = useToast();
  const { colors } = useTheme();
  const [loading, setLoading] = useState<boolean>(false);
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

  const dispatch = useDispatch();

  const handleRegister = async () => {
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

    try {
      setLoading(true);
      const res = await AuthenService.register(dataRegister);
      await setItem(TOKEN, res.data.accessToken);
      await setItem(REFRESH_TOKEN, res.data.refreshAccessToken);
      dispatch(setToken(res.data.accessToken));
      setLoading(false);
    } catch (error) {
      setLoading(false);
      toast.show({
        render: () => <Toast text="Register fail" color={colors.main} />,
        placement: "top",
      });
    }
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
                confirm password not match
              </FormControl.ErrorMessage>
            </Stack>
          </FormControl>
        </Box>
      </Box>
      <Button
        size="md"
        marginTop={10}
        backgroundColor={colors.main}
        width={300}
        borderRadius={30}
        isLoading={loading}
        disabled={!enableSubmit}
        onPress={handleRegister}>
        Register
      </Button>
      <TouchableOpacity style={signupStyles.loginBtn1} onPress={() => navigation.navigate("Login")}>
        <Text style={signupStyles.signupText1}>Đã có tài khoản? Đăng nhập ngay!</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default SignUpForm;
