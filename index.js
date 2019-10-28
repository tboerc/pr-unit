import { Dimensions } from "react-native";
const { width } = Dimensions.get("window").width;
const rem = width >= 600 ? width / 1440 : width / 1080;

export default rem;
