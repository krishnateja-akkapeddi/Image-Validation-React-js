import { GaButtonVariant } from "@goapptiv/go-lite-components-reactjs";
import {
  GaButton,
  GaButtonColor,
  GaButtonSize,
} from "@krishnateja-akkapeddi/private-npm-repo";
import { Typography } from "@mui/material";
import ImageDisplay from "../components/ImageDisplay";
import ImageValidationForm from "../components/ImageValidationForm";
type Props = {};

const ImageValidationPage = (props: Props) => {
  return (
    <div>
      <div className=" ml-72 translate-x-80  w-52">
        <GaButton
          color={GaButtonColor.WARNING}
          variant={GaButtonVariant.TEXT}
          children={<Typography> Hello World</Typography>}
          size={GaButtonSize.SMALL}
          onClick={function (): void {
            throw new Error("Function not implemented.");
          }}
        />
      </div>
      <div className=" h-screen grid grid-cols-12">
        <div className=" col-span-7">
          <ImageDisplay />
        </div>
        <div className=" col-span-5">
          <div className=" mr-[50px]">
            <ImageValidationForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageValidationPage;
