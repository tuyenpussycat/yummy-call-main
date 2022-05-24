import { StyleSheet } from "react-native";

const profileStyle = StyleSheet.create({
  profileListItem: {
    marginRight: "10px",
    marginTop: "10px",
    width: 40,
    height: 40,
    marginBottom: "8px",
  },
  profileListMenu: {
    paddingVertical: "10px",
    flexDirection: "row",
    alignItems: "center",
    alignContent: "center",
    justifyContent: "space-between",
    width: "100%",
  },
  profileListIconMenu: {
    flexDirection: "row",
    width: "90%",
    alignItems: "center",
    alignContent: "center",
  },
  profileIconRightMenu: {
    marginRight: "20px",
    width: 15,
    height: 15,
  },
  profileTextMenu: {
    marginRight: "10px",
    width: 25,
    height: 25,
  },
  styleListItem: {
    flexDirection: "column",
    alignItems: "center",
    width: "20%",
  },
  containerListItem: {
    paddingVertical: "10px",
    borderRadius: 15,
    width: "30%",
    marginHorizontal: "auto",
    marginTop: "5px",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  containerListMenu: {
    paddingHorizontal: "20px",
    paddingVertical: "10px",
    width: "30%",
    marginHorizontal: "auto",
    marginTop: "5px",
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  styleListFollow: {
    flexDirection: "column",
    alignItems: "center",
    width: "30%",
  },
});

export default profileStyle;
