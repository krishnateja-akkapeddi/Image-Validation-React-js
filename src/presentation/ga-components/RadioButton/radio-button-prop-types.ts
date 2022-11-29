import { RadioButtonColors } from "./radiobutton-colors";

export type RadioButtonProps = {
  name: string;
  value: string;
  size?: "medium" | "small";
  checked?: boolean;
  checkedIcon?: React.ReactNode;
  classes?: object;
  disabled?: boolean;
  disableRipple?: boolean;
  icon?: React.ReactNode;
  id?: string;
  inputProps?: object;
  onChange?: (e: any) => any;
  required?: boolean;
  customClasses?: string;
  color?: RadioButtonColors;
};
