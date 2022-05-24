import React, { useState } from "react";
import { Text } from "react-native";
import setInfoStyles from "./SetInfoStyles";
import { SafeAreaView } from "react-native-safe-area-context";

import DatePicker from 'react-native-datepicker';

import {
  Box,
  Button,
  FormControl,
  Input,
  Stack,
  useTheme,
  Radio,
} from "native-base";

const LoginForm: React.FC = ({ navigation }: any) => {
  const { colors } = useTheme();
  const [enableSubmit, setEnableSubmit] = useState<boolean>(false);

  const current = new Date();
  const [date, setDate] = useState(`${current.getDate()}-${current.getMonth()+1}-${current.getFullYear()}`);

  const [displayName, setDisplayName]=useState('');
  const [gender, setGender] = useState('');
  const [birthDay, setBirthDay] = useState('');
  const [hobby, setHobby] = useState('');

  return (
    <SafeAreaView style={setInfoStyles.containerSetInfo}>
        <Box 
            position={'absolute'} 
            top={'30px'} 
            alignContent={'center'} 
            justifyContent={'center'}>
                <Text style={setInfoStyles.headerText}>Thiết lập thông tin cá nhân</Text>
        </Box>
      <Box alignItems="center" w="100%" maxWidth="300px">
        <Box w="100%" maxWidth="100%">
          <FormControl>
            <Stack mx="4">
              <FormControl.Label>Tên hiển thị:</FormControl.Label>
              <Input
                type="text"
                placeholder="Nhập tên bạn muốn hiển thị"
                variant="underlined"
                style={{ color: "#000" }}
                backgroundColor={'#EEEEEE'}
                onChangeText={(displayName) => setDisplayName(displayName)}
              />
            </Stack>
          </FormControl>
        </Box>
      </Box>
      <Box alignItems="center" w="100%" maxWidth="300px">
        <Box w="100%" maxWidth="300px">
          <FormControl>
            <Stack mx="4">
              <FormControl.Label>Ngày sinh:</FormControl.Label>
              <DatePicker
          style={setInfoStyles.datePickerStyle}
          date={date} // Initial date from state
          mode="date" // The enum of date, datetime and time
          placeholder="select date"
          format="DD-MM-YYYY"
          minDate="01-01-2016"
          maxDate="01-01-2030"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          customStyles={{
            dateIcon: {
              //display: 'none',
              position: 'absolute',
              left: 0,
              top: 4,
              marginLeft: 0,
            },
            dateInput: {
              marginLeft: 36,
            },
          }}
          onDateChange={(date) => {
            setDate(date);
          }}
        />
            </Stack>
          </FormControl>
        </Box>
      </Box>
      <Box alignItems="center" w="100%" maxWidth="300px">
        <Box w="100%" maxWidth="300px">
          <FormControl>
            <Stack mx="4">
              <FormControl.Label>Giới tính:</FormControl.Label>
              <Radio.Group 
                name="chonGioiTinh" 
                flex={'start'}
                w="100%" 
                maxWidth="300px" 
                flexDirection={'row'}
                value={gender} 
                onChange={gender => {
                  setGender(gender);
                  console.log(gender);
                  //console.log(nextValue)
                }}>
                    <Radio
                        value="male" 
                        size="1"
                        borderWidth={'3px'}
                        borderColor={'white'}
                        colorScheme="blue">
                            <Text style={{ color: "#000" }}>Nam</Text>
                    </Radio>
                    <Radio 
                        value="female" 
                        size="1"
                        borderWidth={'3px'}
                        borderColor={'white'}
                        colorScheme="pink"
                        marginLeft={'30px'}>
                            <Text style={{ color: "#000" }}>Nữ</Text>
                    </Radio>  
              </Radio.Group>
            </Stack>
          </FormControl>
        </Box>
      </Box>
      <Box alignItems="center" w="100%" maxWidth="300px">
        <Box w="100%" maxWidth="300px">
          <FormControl>
            <Stack mx="4">
              <FormControl.Label>Sở thích:</FormControl.Label>
              <Input
                type="text"
                variant="underlined"
                style={{ color: "#000" }}
                backgroundColor={'#EEEEEE'}
                multiline={true}
                height={'100'}
                onChangeText={(hobby) => setHobby(hobby)}
              />
            </Stack>
          </FormControl>
        </Box>
      </Box>

        <Box position={'absolute'} bottom={0} alignItems={'center'} flexDirection={'row'} width={300}>
            <Button
                size="md"
                backgroundColor={"grey"}
                width={'50%'}
                borderRadius={30}>
                Nhập lại
            </Button>

            <Button
                size="md"
                backgroundColor={colors.main}
                width={'50%'}
                borderRadius={30}>
                Lưu
            </Button>
        </Box>
      
    </SafeAreaView>
  );
};

export default LoginForm;
