import { StyleSheet } from "react-native";

export const inputStyles = StyleSheet.create({
  mainContainer: {
    width: "85%",
    marginBottom: 30,
  },
  textInputContainer: {
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderWidth: 1,
    borderRadius: 25,
  },
  container: {
    flexDirection: "row",
  },
  inputContainer: {
    alignItems: "flex-start",
    flex: 1,
    justifyContent: "center",
  },
  input: { flex: 1 },
  labelContainer: {
    position: "absolute",
    paddingHorizontal: 8,
  },
  error: {
    marginTop: 4,
    marginLeft: 12,
  },
  icon: {
    width: 30,
    height: 30,
  },
});
