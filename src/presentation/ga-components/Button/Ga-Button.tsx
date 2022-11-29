import React from "react";
import Button from "@mui/material/Button";
import ButtonVariant from "./button-variant";
import ButtonColor from "./button-color";
import ButtonSize from "./button-size";
import { Typography } from "@mui/material";

type Props = {
  startIcon?: React.ReactNode;
  bgHoverColor?: string;
  disabled?: boolean;
  type: ButtonVariant | undefined;
  color?: ButtonColor;
  customColor?: string;
  customBackgroundColor?: string;
  titleColor?: string;
  size: ButtonSize;
  buttonText: string;
  styles?: Array<Function | object | boolean> | Function | object;
};

const GaButton: React.FC<Props> = ({
  titleColor,
  startIcon,
  disabled,
  color,
  type,
  styles = {},
  size,
  buttonText,
}) => {
  return (
    <Button
      color={color}
      sx={styles}
      size={size}
      startIcon={startIcon}
      disabled={disabled}
      variant={type}
    >
      <Typography variant="subtitle1" color={titleColor}>
        {buttonText}
      </Typography>
    </Button>
  );
};

export default GaButton;
