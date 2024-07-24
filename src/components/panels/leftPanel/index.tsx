import { KeyboardArrowDown } from "@mui/icons-material";
import { Badge, Box, Input, styled, Typography } from "@mui/material";
import Card from "./Card";
import { data } from "../../../utils/constant";
import styles from "../style.module.css";
import DirectionsBoatOutlinedIcon from "@mui/icons-material/DirectionsBoatOutlined";
import TuneOutlinedIcon from "@mui/icons-material/TuneOutlined";
import SearchIcon from "@mui/icons-material/Search";

const LeftPanel = () => {
  return (
    <CustomPanel>
      <div className={`${styles.cardColor} main-content flex`}>
        <CustomBox>
          <div className="content flex items-center">
            <span>
              <DirectionsBoatOutlinedIcon />
            </span>
            My Responsibilities
            <span>
              <SearchIcon />
            </span>
          </div>
          <div className="content box flex items-center space-between">
            <span>PO</span>
            <KeyboardArrowDown htmlColor="#64748B" />
          </div>
          <div>
            <Badge
              badgeContent={4}
              color="primary"
              className="badge flex items-center"
            >
              <TuneOutlinedIcon color="action" />
            </Badge>
          </div>
        </CustomBox>
        <CustomBox className="space-between gap-24">
          <div className="input-box flex">
            <label htmlFor="">Coy id</label>
            <Input placeholder="Enter copy id" />
          </div>
          <div className="input-box flex">
            <label htmlFor="">Order no</label>
            <Input placeholder="Enter order no" />
          </div>
        </CustomBox>
        <CustomBox>
          <div className="flex items-center custom-group">
            <div className="flex dropdown-main">
              <div className="flex items-center dropdown">
                <span>Sort</span>
                <KeyboardArrowDown htmlColor="#64748B" />
              </div>
              <div className="flex items-center typography dropdown">
                <span>Group By</span>
                <KeyboardArrowDown htmlColor="#64748B" />
              </div>
            </div>
            <div className="typography dropdown flex gap-8">
              <span>Clear</span>
              <span>Search</span>
            </div>
          </div>
        </CustomBox>
      </div>
      <CustomTable className="flex flex-direction">
        <Typography component={"h5"} className="title">
          orders <span>8</span>
        </Typography>
        <div className="gap-8 flex flex-direction slider">
          {data.orders.map((order) => (
            <Card
              id={order.id}
              title={order.title}
              type={order.type}
              dateAuthorized={order.dateAuthorized}
            />
          ))}
        </div>
      </CustomTable>
    </CustomPanel>
  );
};

const CustomPanel = styled("div")({
  display: "flex",
  flexDirection: "column",

  "& .flex": {
    display: "flex",
  },
  "& .items-center": {
    alignItems: "center",
  },
  "& .title": {
    textTransform: "uppercase",
  },
  "& .main-content": {
    borderRadius: "20px",
    padding: "1rem",
    flexDirection: "column",
    gap: "20px",
  },
  "& .content": {
    background: "#e2dbd3",
    color: "#000",
    fontSize: "10pt",
    padding: ".4rem 1rem",
    borderRadius: "20px",
    gap: "8px",
  },
  "& .box": {
    width: "90px",
  },
  "& .content svg": {
    width: "20px",
    color: "#9aa2a3",
  },
});
const CustomBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "8px",

  "& .custom-group": {
    width: "100%",
    justifyContent: "space-between",
  },
  "& .badge": {
    background: "#000",
    borderRadius: "50%",
    width: "30px",
    height: "30px",
    justifyContent: "center",
    padding: "1rem",
    boxSizing: "border-box",
  },
  "& .badge svg": {
    color: "#68da64",
  },
  "& .badge .MuiBadge-badge": {
    background: "#68da64",
    color: "#000",
    fontWeight: 700,
  },
  "& .input-box": {
    flexDirection: "column",
    width: "100%",
  },
  "& .input-box label": {
    color: "#9da8af",
    fontSize: "10pt",
  },
  "& .input-box input": {
    color: "#000",
    fontWeight: 400,
    fontSize: "9pt",
  },
  "& .dropdown": {
    textDecoration: "underline",
  },
  "& .typography": {
    color: "#000",
    fontWeight: 700,
    fontSize: "10pt",
  },
  "& .dropdown-main": {
    gap: "8px",
  },
});
const CustomTable = styled("div")({
  padding: "1rem 0",
  fontSize: "10pt",
  gap: "8px",

  "& h5":{
    fontWeight: 400,
    fontSize: "10pt",
  },
  "& h5 span":{  
    background: "#d9d0c7",
    color: "#000",
    width: "20px",
    height: "20px",
    display: "inline-block",
    borderRadius: "50%",
    textAlign: "center"
  },
  "& .slider":{
    height: "500px",
    overflowY: "auto"
  }
});

export default LeftPanel;
