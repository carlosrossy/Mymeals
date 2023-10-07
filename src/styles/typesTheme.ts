export type ITypecolors =
  | "BACKGROUND"
  | "PRIMARY"
  | "SECONDARY"
  | "TITLE"
  | "TITLE_SECONDARY"
  | "TEXT"
  | "MARKER"
  | "MARKER_CIRCLE"
  | "RED"
  | "WHITE";

export interface IStyleFontVariant {
  fontFamily: string;
  fontSize: number;
  color: string;
}

export type IStyleTopography =
  | "PoppinsRegular"
  | "PoppinsMedium"
  | "PoppinsBold"
  | "PoppinsSemiBold";

export type ISpacing =
  | "none"
  | "xsmall"
  | "small"
  | "medium"
  | "large"
  | "xlarge"
  | "xsm"
  | "sm"
  | "md"
  | "lg"
  | "xlg";
