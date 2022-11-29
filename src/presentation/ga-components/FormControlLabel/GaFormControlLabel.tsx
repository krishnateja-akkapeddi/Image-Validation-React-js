import { FormControlLabel, Radio } from "@mui/material";
import React from "react";
import { LabelPlacement } from "./label-placements-types";

type Props = {
  label: string;
  value?: string;
  name?: string;
  children: React.ReactElement;
  labelPlacement: LabelPlacement;
  handleEventChange: Function;
};

const GaFormControlLabel: React.FC<Props> = ({
  name,
  label,
  children,
  labelPlacement,
  value,
  handleEventChange,
}) => {
  return (
    <FormControlLabel
      labelPlacement={labelPlacement}
      name={name}
      value={value}
      onChange={(e) => handleEventChange(e)}
      control={children}
      label={label}
    />
  );
};

export default GaFormControlLabel;
