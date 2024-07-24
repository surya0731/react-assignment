import { Button, styled, Typography } from "@mui/material";
import DirectionsBoatOutlinedIcon from "@mui/icons-material/DirectionsBoatOutlined";
import { CardPropType } from "../../../utils/types";
import AnchorIcon from "@mui/icons-material/Anchor";

const Card = ({ id, title, type, dateAuthorized }: CardPropType) => {
  return (
    <CustomCard className="flex flex-direction">
      <div className="flex space-between header">
        <Typography>{id}</Typography>
        <div className="anchor-icon flex gap-8">
          <AnchorIcon />
          <Typography className="gap-8 flex title items-center">
            <span className="logo items-center">TQ</span>
          </Typography>
        </div>
      </div>
      <div className="body">
        <Typography>{title}</Typography>
      </div>
      <div className="flex space-between footer items-center">
        <Button>
          <DirectionsBoatOutlinedIcon />
          <span>Lorem ipsum</span>
        </Button>
        <div className="flex flex-direction">
          <Typography>{type}</Typography>
          <Typography>{dateAuthorized}</Typography>
        </div>
      </div>
    </CustomCard>
  );
};
const CustomCard = styled("div")({
  background: "#e8eced",
  borderRadius: "8px",
  padding: ".5rem 1rem",
  gap: "10px",

  "& button": {
    background: "#80e6ff",
    color: "#0e5d8b",
    borderRadius: "8px",
    fontSize: "10pt",
    gap: "8px",
    display: "flex",
    height: "27px",
  },
  "& button span": {
    fontSize: "9pt",
    textTransform: "capitalize",
  },
  "& button svg": {
    width: "17px",
  },
  "& .anchor-icon svg": {
    width: "17px",
    color: "#697c88",
  },
  "& .footer p": {
    color: "#727c7f",
    fontSize: "9pt",
  },
  "& .header p": {
    color: "#052f27",
    fontSize: "10pt",
    fontWeight: 700,
  },
  "& .body p": {
    color: "#000",
    fontSize: "9pt",
    fontWeight: 600,
  },
  "& .logo": {
    background: "#ff401b",
    color: "#fff",
    borderRadius: "50%",
    width: "20px",
    height: "20px",
    display: "inline-flex",
    padding: "2px",
    justifyContent: "center",
    fontSize: "7pt",
    fontWeight: 500
  },
});
export default Card;
