import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

const GuidelineBaseHeight = 844;
const GuidelineBaseWidth = 390;

const verticalScale = (size: number, floor = true, setMax = false) => {
  let result = (height / GuidelineBaseHeight) * size;
  let newSize = floor ? Math.floor(result) : result;
  return setMax && newSize > size ? size : newSize;
};

const horizontalScale = (size: number, floor = true, setMax = false) => {
  let result = (width / GuidelineBaseWidth) * size;
  let newSize = floor ? Math.floor(result) : result;
  return setMax && newSize > size ? size : newSize;
};

export { verticalScale, horizontalScale };
