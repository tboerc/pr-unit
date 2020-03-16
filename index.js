import { Dimensions } from "react-native";
const { width } = Dimensions.get("window");
const pr = width >= 600 ? width / 1440 : width / 1080;

export default pr.toFixed(3);
