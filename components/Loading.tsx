import { Spinner, useTheme, VStack } from "native-base";
import React from "react";

type Props = {};

const Loading = (props: Props) => {
  const { colors } = useTheme();
  return (
    <VStack space={4} alignItems="center" justifyContent="center" height="100%">
      <Spinner color={colors.main} margin="0" />
    </VStack>
  );
};
export default Loading;
