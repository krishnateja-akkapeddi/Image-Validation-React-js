import RadioGroup from "@mui/material/RadioGroup";

import React from "react";

type Props = {
  children: React.ReactNode;
  handleOnRadioButtonChange: (e: any) => void;
  defaultValue?: any;
  row: boolean;
  sx?: {};
};

const GaRadioGroup: React.FC<Props> = ({
  handleOnRadioButtonChange,
  children,
  row,
  sx,
}) => {
  return (
    <RadioGroup
      sx={sx}
      onChange={(e) => handleOnRadioButtonChange(e)}
      row={row}
    >
      {children}
    </RadioGroup>
  );
};

export default GaRadioGroup;
