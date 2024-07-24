import { Avatar, Badge, styled, Typography } from "@mui/material";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { data } from "../../utils/constant";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import profile from "../../assets/user.jpeg";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import AppsOutlinedIcon from "@mui/icons-material/AppsOutlined";

const Navbar = () => {
  return (
    <CustomNav>
      <Typography>Procurement</Typography>
      <Menu className="items-center gap-8">
        <li>
          <SearchOutlinedIcon />
        </li>
        <li>
          <Badge color="secondary" variant="dot" invisible={false}>
            <NotificationsNoneOutlinedIcon />
          </Badge>
        </li>
        <li>
          <AppsOutlinedIcon />
        </li>
        <li>
          <div className="flex items-center avatar gap-8">
            <Avatar alt="Travis Howard" src={profile} className="profile" />
            <Typography component={"h6"}>{data.user.name}</Typography>
            <ArrowDropDownIcon />
          </div>
        </li>
      </Menu>
    </CustomNav>
  );
};

const CustomNav = styled("nav")({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
});
const Menu = styled("ul")({
  display: "flex",
  gap: "18px",

  "& li": {
    listStyle: "none",
  },
  "& li user": {
    borderRadius: "20px",
  },
  "& li .avatar": {
    boxShadow: "0px 1px 3px 0px gray",
    borderRadius: "20px",
    padding: "1px 5px",
  },
  "& li .avatar .profile": {
    width: "20px",
    height: "20px",
  },
  "& li .avatar h6": {
    fontSize: "9pt",
    fontWeight: 700,
  },
  "& .MuiBadge-badge": {
    background: "red"
  },
});

export default Navbar;
