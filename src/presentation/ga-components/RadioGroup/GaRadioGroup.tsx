import { RadioGroup } from "@mui/material";
import React from "react";

type Props = {
  children: React.ReactNode;
  handleOnRadioButtonChange: Function;
  defaultValue?: any;
  row: boolean;
};

const GaRadioGroup: React.FC<Props> = ({
  handleOnRadioButtonChange,
  children,
  row,
}) => {
  return (
    <RadioGroup
      children={children}
      onChange={(e) => handleOnRadioButtonChange(e)}
      row={row}
    />
  );
};

export default GaRadioGroup;
