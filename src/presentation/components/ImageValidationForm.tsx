import GaButton from "../ga-components/Button/Ga-Button";
import { EditOutlined, HeartBroken, UsbOffOutlined } from "@mui/icons-material";
import CustomIconButton from "../ga-components/IconButton/GaIconButton";
import buttonColor from "../ga-components/Button/button-color";
import ButtonVariant from "../ga-components/Button/button-variant";
import ButtonColor from "../ga-components/Button/button-color";
import ButtonSize from "../ga-components/Button/button-size";
import React, { useState } from "react";
import GaRadioGroup from "../ga-components/GaRadioGroup/GaRadioGroup";
import GaRadioButton from "../ga-components/RadioButton/GaRadioButton";
import { RadioButtonColors } from "../ga-components/RadioButton/radiobutton-colors";
import ButtonType from "../ga-components/Button/button-type";
import { Typography } from "@mui/material";
type Props = {};
const questions = [
  { q: "What is your name?" },
  {
    q: "What is your friend's name",
  },
  {
    q: "What is your friend's name",
  },
  {
    q: "What is your friend's name",
  },
  {
    q: "What is your friend's name",
  },
  {
    q: "What is your friend's name",
  },
];
const ImageValidationForm = (props: Props) => {
  const [formDetails, serFormDetails] = useState([]);
  return (
    <div className="  text-[12px]">
      <div className="  mt-[15%] mb-[4%]  text-xl ">Questions:</div>
      <div></div>
      <div className=" flex flex-col gap-6">
        {questions.map((val) => {
          return (
            <div className="border-[1px] h-12 border-[#79747E] rounded-xl">
              <div className=" mt-2 ml-2 float-left">
                <Typography>What is your name?</Typography>
              </div>
              <div className=" float-right m-1">
                <GaRadioGroup
                  row={true}
                  handleOnRadioButtonChange={(e) =>
                    console.log(e.target.name, e.target.value)
                  }
                  children={
                    <>
                      <GaRadioButton
                        name={val.q}
                        value="Yes"
                        color={RadioButtonColors.PRIMARY}
                      />
                      <GaRadioButton
                        name={val.q}
                        value="No"
                        color={RadioButtonColors.PRIMARY}
                      />
                      <GaRadioButton
                        name={val.q}
                        value="Maybe"
                        color={RadioButtonColors.PRIMARY}
                      />
                    </>
                  }
                />
              </div>
            </div>
          );
        })}
        <div className=" justify-center gap-5 flex flex-row">
          <div>
            <GaButton
              size={ButtonSize.MEDIUM}
              color={ButtonColor.WARNING}
              buttonText={"Submit"}
              type={ButtonVariant.CONTAINED}
            />
          </div>
          <div>
            <GaButton
              titleColor=" #B3261E"
              // bgHoverColor="white"
              size={ButtonSize.MEDIUM}
              color={ButtonColor.ERROR}
              type={ButtonVariant.TEXT}
              buttonText="Reject"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageValidationForm;
