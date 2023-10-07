import { colors } from "./colors";
import { typography } from "./typography";

export const spacing = {
  none: 0,
  xsmall: 4,
  small: 8,
  medium: 16,
  large: 24,
  xlarge: 40,

  xsm: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xlg: 40,
};

export default {
  colors: colors,
  spacing: spacing,
  breakpoints: {
    smallPhone: 0,
    phone: 375,
  },
  textVariants: typography,
};
