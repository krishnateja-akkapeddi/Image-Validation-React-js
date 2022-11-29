import { Radio } from "@mui/material";
import { RadioButtonProps } from "./radio-button-prop-types";
import React from "react";

const GaRadioButton: React.FC<RadioButtonProps> = ({
  name,
  value,
  size,
  checked,
  checkedIcon,
  classes,
  disabled,
  disableRipple,
  icon,
  id,
  inputProps,
  onChange,
  required,
  customClasses,
  color,
}) => {
  return (
    <div>
      <Radio
        name={name}
        value={value}
        size="small"
        checked={checked}
        checkedIcon={checkedIcon}
        classes={classes}
        disabled={disabled}
        disableRipple={disableRipple}
        icon={icon}
        id={id}
        inputProps={inputProps}
        onChange={onChange}
        required={required}
        className={customClasses}
        color={color}
      />
    </div>
  );
};

export default GaRadioButton;
