import styled from "@emotion/styled";
import { Box, Button, Typography } from "@mui/material";
import { data } from "../../../utils/constant";
import DirectionsBoatOutlinedIcon from "@mui/icons-material/DirectionsBoatOutlined";
import BasicTabs from "./Tabs";

const RightPanel = () => {
  return (
    <CustomPanel>
      <Header>
        <div className="flex space-between items-center main-header">
          <Typography className="gap-8 flex title items-center">
            <span className="logo items-center">RT</span>
            {`${data.orders[0].id} ${data.orders[0].title}`}
          </Typography>
          <Button>
            <DirectionsBoatOutlinedIcon />
            <span>Lorem ipsum</span>
          </Button>
        </div>
        <div className="flex items-center space-between gap-8 card-details">
          <div className="flex gap-8">
            <div>
              <Typography component={"h6"}>Date requested</Typography>
              <Typography>10 July 2019</Typography>
            </div>
            <div>
              <Typography component={"h6"}>Type</Typography>
              <Typography>10 July 2019</Typography>
            </div>
            <div>
              <Typography component={"h6"}>Account code</Typography>
              <Typography>10 July 2019</Typography>
            </div>
          </div>
          <div className="flex gap-8 order-summary">
            <div>
              <Typography component={"h6"}>Order summary</Typography>
            </div>
            <div>
              <Typography component={"h6"}>Order progress</Typography>
            </div>
          </div>
        </div>
      </Header>
      <Box />
      <BasicTabs />
    </CustomPanel>
  );
};

const CustomPanel = styled("div")({
  borderRadius: "8px",
  background: "#e8eced"
});
const Header = styled("div")({
  "& .title": {
    fontSize: "11pt",
    fontWeight: 700
  },
  "& .main-header": {
    padding: "1.5rem"
  },
  "& .logo": {
    background: "#008c22",
    color: "#fff",
    borderRadius: "50%",
    width: "20px",
    height: "20px",
    display: "inline-flex",
    padding: "2px",
    justifyContent: "center",
    fontSize: "8pt",
  },
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
  "& .card-details": {
    padding: "1.5rem"
  },
  "& .card-details h6": {
    color: "#afbbbf",
    fontSize: "9pt"
  },
  "& .card-details p": {
    color: "#000",
    fontWeight: 600,
    fontSize: "9.5pt"
  },
  "& .order-summary h6": {
    color: "#026f4d",
    textDecoration: "underline",
    fontWeight: 600
  },
});

export default RightPanel;
