import { useTheme, useToast } from "native-base";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../components/Loading";
import Toast from "../components/Toast";
import { TOKEN } from "../constants/storage";
import AuthenService from "../services/Authen.service";
import { RootState } from "../store";
import { setToken, setUser } from "../store/actions";
import { getItem } from "../untils/storage";
import AuthenNavigator from "./AuthenNavigator";
import HomeNavigator from "./HomeNavigator";

type Props = {};

const RootNavigator = (props: Props) => {
  const toast = useToast();
  const { colors } = useTheme();
  const [loading, setLoading] = React.useState<boolean>(false);
  const { user } = useSelector((state: RootState) => state.user);
  const { token: tokenRedux } = useSelector((state: RootState) => state.token);
  const dispatch = useDispatch();

  React.useMemo(() => {
    (async () => {
      const token = (await getItem(TOKEN)) || "";
      if (!token) return;
      if (user && tokenRedux === token) {
        return;
      }
      if (user && token) {
        dispatch(setToken(token));
        return;
      }
      setLoading(true);
      try {
        const user = await AuthenService.getMyinfo();
        if (user) {
          dispatch(setUser(user));
          dispatch(setToken(token));
        }
        setLoading(false);
        toast.show({
          render: () => <Toast text="Welcome" color={colors.main} />,
          placement: "top",
        });
      } catch (error) {
        dispatch(setUser(null));
        setLoading(false);
      }
    })();
  }, [tokenRedux]);
  if (loading) {
    return <Loading />;
  }
  if (!tokenRedux) {
    return <AuthenNavigator />;
  }
  return <HomeNavigator />;
};

export default RootNavigator;
