import { IconButton } from "@mui/material";
import React from "react";
import ButtonColor from "../Button/button-color";
import ButtonSize from "../Button/button-size";

type Props = {
  icon: React.ReactNode;
  color?: ButtonColor;
  disabled?: boolean;
  size?: ButtonSize;
  onClick: Function;
};

const GaIconButton: React.FC<Props> = ({
  icon,
  color,
  disabled,
  size,
  onClick,
}) => {
  return (
    <div>
      <IconButton
        color={color}
        children={icon}
        size={size}
        disabled={disabled}
        onClick={(e) => onClick(e)}
      />
    </div>
  );
};

export default GaIconButton;
