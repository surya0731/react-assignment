import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import {
  Badge,
  Paper,
  Table,
  TableCell,
  TableHead,
  TableRow,
  Typography,
  styled,
} from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";
import ContactPhoneIcon from "@mui/icons-material/ContactPhone";
import AttachFileIcon from "@mui/icons-material/AttachFile";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <CustomBox sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons={false}
          aria-label="scrollable prevent tabs example"
          className="tabs"
        >
          <Tab label="Summary" {...a11yProps(0)} />
          <Tab label="Order Lines" {...a11yProps(1)} />
          <Tab label="Suppliers" {...a11yProps(2)} />
          <Tab label="Freight Details" {...a11yProps(2)} />
          <Tab label="Delivery" {...a11yProps(2)} />
          <Tab label="Invoice" {...a11yProps(2)} />
          <Tab label="Memos" {...a11yProps(2)} />
          <Tab label="Notes & Attachments" {...a11yProps(2)} />
          <Tab label="Budgets" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <div className="flex flex-direction gap-8 main-panel">
          <div className="panel-1 flex flex-direction">
            <Typography component={"h4"} className="gap-8 flex items-center">
              Components
              <Badge color="secondary" badgeContent={0} showZero></Badge>
            </Typography>
            <Typography
              style={{ color: "#828e8e", fontWeight: 300, fontSize: "10pt" }}
            >
              No items found
            </Typography>
          </div>
          <Box className={"panel-1 flex flex-direction"}>
            <Typography component={"h4"} className="gap-8 flex items-center">
              Authorized Supplier
              <span className="span">Ref: PRJ001963SRIN</span>
            </Typography>
            <div className="flex gap-24">
              <div className="panel-box">
                <Typography component={"h6"}>Date Authorized</Typography>
                <Typography>12 July 2019</Typography>
              </div>
              <div className="panel-box">
                <Typography component={"h6"}>Authorized By</Typography>
                <Typography>Jim Darren</Typography>
              </div>
              <div className="panel-box">
                <Typography component={"h6"}>Invoice Chased By</Typography>
                <Typography>-</Typography>
              </div>
              <div className="panel-box">
                <Typography component={"h6"}>PO Chased Date</Typography>
                <Typography>-</Typography>
              </div>
              <div className="panel-box">
                <Typography component={"h6"}>PO Confirmed Date</Typography>
                <Typography>-</Typography>
              </div>
              <div className="panel-box">
                <Typography component={"h6"}>PO Ref No.</Typography>
                <Typography>-</Typography>
              </div>
            </div>
            <div className="panel-footer">
              <Typography component={"h6"}>
                Repairs(Riding Squads / Manpower)
              </Typography>
              <div className="reviews">
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarOutlineIcon />
              </div>
              <div className="address">
                <Typography className="flex items-center">
                  <LocationOnOutlinedIcon />
                  1st floor, skypark 8 elliot place, G3 8EP, GBR
                </Typography>
                <Typography className="flex items-center">
                  <PhoneOutlinedIcon />
                  +44 (0) 141 330 1300
                </Typography>
                <Typography className="flex items-center">
                  <ContactPhoneIcon />
                  +44 (0) 141 330 1300
                </Typography>
                <Typography className="flex items-center">
                  <MailOutlineOutlinedIcon />
                  reapirs@services.com
                </Typography>
              </div>
            </div>
          </Box>

          <div className="panel-1 flex flex-direction">
            <Typography component={"h4"} className="gap-8 flex items-center">
              Suppliers
              <Badge color="secondary" badgeContent={2} showZero></Badge>
            </Typography>
            <Table>
              <TableHead className="flex">
                <th>Status</th>
                <th>Supplier Name</th>
                <th>Goods</th>
                <th>Freight</th>
                <th>Total</th>
                <th>Cur</th>
                <th>Base (USD)</th>
              </TableHead>
              <TableRow>
                <td>
                  <Typography className="gap-8 flex title items-center">
                    <span className="logo items-center">TQ</span>
                  </Typography>
                </td>
                <td>Engineering Co. Ltd</td>
                <td>3,458.70</td>
                <td>0.00</td>
                <td>3,458.70</td>
                <td>EUR</td>
                <td>3811.92</td>
              </TableRow>
              <TableRow>
                <td>
                  <Typography className="gap-8 flex title items-center">
                    <span className="logo items-center">TQ</span>
                  </Typography>
                </td>
                <td>Engineering Co. Ltd</td>
                <td>3,458.70</td>
                <td>0.00</td>
                <td>3,458.70</td>
                <td>EUR</td>
                <td>3811.92</td>
              </TableRow>
            </Table>
          </div>

          <div className="panel-1 flex flex-direction">
            <Typography component={"h4"} className="gap-8 flex items-center">
              Invoices
              <Badge color="secondary" badgeContent={2} showZero></Badge>
            </Typography>
            <Table>
              <TableHead className="flex">
                <th>Attachment</th>
                <th>Status</th>
                <th>Reference</th>
                <th>Amount</th>
                <th>Currency</th>
                <th>Invoice Date</th>
                <th>Paid Date</th>
              </TableHead>
              <TableRow>
                <td>
                  <AttachFileIcon />
                </td>
                <td>
                  <span>Invoice Paid</span>
                </td>
                <td>PJINDF78HYSR-SRIN</td>
                <td>34,445.00</td>
                <td>EUR</td>
                <td>23 Sep, 2019</td>
                <td>30 Jun 2020</td>
              </TableRow>
              <TableRow>
                <td>
                  <AttachFileIcon />
                </td>
                <td>
                  <span>Invoice Paid</span>
                </td>
                <td>PJINDF78HYSR-SRIN</td>
                <td>34,445.00</td>
                <td>EUR</td>
                <td>23 Sep, 2019</td>
                <td>30 Jun 2020</td>
              </TableRow>
            </Table>
          </div>

          <Box className={"panel-1 flex flex-direction"}>
            <Typography component={"h4"} className="gap-8 flex items-center">
              Freight Details
            </Typography>
            <div className="flex gap-24">
              <div className="panel-box">
                <Typography component={"h6"}>No. of pieces</Typography>
                <Typography>0</Typography>
              </div>
              <div className="panel-box">
                <Typography component={"h6"}>Weight</Typography>
                <Typography>0</Typography>
              </div>
              <div className="panel-box">
                <Typography component={"h6"}>Total CBM</Typography>
                <Typography>0</Typography>
              </div>
              <div className="panel-box">
                <Typography component={"h6"}>Freight Order</Typography>
                <Typography>-</Typography>
              </div>
              <div className="panel-box">
                <Typography component={"h6"}>Transport Mode</Typography>
                <Typography>-</Typography>
              </div>
              <div className="panel-box">
                <Typography component={"h6"}>AWB/Reference No</Typography>
                <Typography>-</Typography>
              </div>
            </div>
          </Box>
        </div>
      </CustomTabPanel>
    </CustomBox>
  );
}

const CustomBox = styled(Paper)({
  background: "#fff",

  "& .address p": {
    fontSize: "10pt",
    color: "#026f4d",
    gap: "8px",
    margin: ".2rem 0",
  },
  "& .address": {
    marginTop: "10px",
  },
  "& .address svg": {
    width: "20px",
  },
  "& .reviews": {
    color: "#ffb600",
  },
  "& .reviews svg": {
    width: "20px",
  },
  "& .panel-1": {
    background: "#eef1f0",
    border: "1px solid #eef1f0",
    padding: "16px",
    borderRadius: "12px",
    gap: "12px",
  },
  "& .panel-1 h4": {
    display: "inline-flex",
    gap: "18px",
    fontSize: "10pt",
    textTransform: "uppercase",
    fontWeight: 700,
  },
  "& .panel-1 .span": {
    background: "#dce2e4",
    color: "#7f898c",
    fontSize: "9pt",
    borderRadius: "8px",
    padding: "2px 10px",
    fontWeight: 500,
  },
  "& .panel-1 .MuiBadge-badge ": {
    background: "#ced6d9",
    color: "#000",
    fontWeight: 600,
  },
  "& .main-panel ": {
    height: "500px",
    overflowY: "auto",
  },
  "& .panel-box h6": {
    color: "#afbbbf",
    fontSize: "9pt",
  },
  "& .panel-box p": {
    color: "#000",
    fontWeight: 600,
    fontSize: "9.5pt",
    textAlign: "center",
  },
  "& .panel-footer": {
    color: "#014881",
    fontWeight: 600,
    fontSize: "9.5pt",
  },
  "& .panel-footer h6": {
    color: "#014881",
    fontWeight: 500,
    fontSize: "10pt",
  },
  "& table thead": {
    background: "#e8eced",
  },
  "& table": {
    borderRadius: "8px",
    overflow: "hidden",
    borderCollapse: "collapse",
  },
  "& table thead th": {
    border: "1px solid #e6ecf0",
    padding: "1rem",
    fontWeight: 500,
    fontSize: "10pt",
  },
  "& table tr td": {
    padding: "1rem",
    fontSize: "10pt",
    textAlign: "center",
  },
  "& table tr td span": {
    color: "#008e1f",
  },
  "& table tr svg": {
    color: "green",
  },
  "& table tr": {
    background: "#f5f5f5",
    border: "1px solid #e6ecf0",
  },
  "& .css-19kzrtu": {
    padding: "24px 12px"
  },
  "& .MuiTab-textColorPrimary": {
    color: "#000",
    fontSize: "10pt",
    textTransform: "capitalize"
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
});
