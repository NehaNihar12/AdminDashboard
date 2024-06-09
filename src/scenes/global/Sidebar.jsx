import { useState } from "react";
// https://github.com/azouaoui-med/react-pro-sidebar
import {
  Sidebar,
  Menu,
  MenuItem,
  sidebarClasses,
  menuClasses,
  useProSidebar,
} from "react-pro-sidebar";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import { tokens } from "../../theme";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";

const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <MenuItem
      active={selected === title}
      rootStyles={{
        [`.${menuClasses.button}`]: {
          padding: "5px 35px 5px 20px",
          color: colors.grey[100],
          backgroundColor: 'transparent',
          '&:hover': {
            color: "#868dfb",
            backgroundColor: '#eecef9',
          },
          '&:active': {
            color: "#6870fa",
          },
        },
        [`.${menuClasses.icon}`]: {
          backgroundColor: "transparent",
        },
      }}
      onClick={() => setSelected(title)}
      icon={icon}
    >
      <Typography>{title}</Typography>
      <Link to={to} />
    </MenuItem>
  );
};

export default function ProSidebar() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [selected, setSelected] = useState("Dashboard");
  const { collapseSidebar, collapsed } = useProSidebar();
  return (
    <Box>
      <Sidebar
        className="sidebar"
        rootStyles={{
          [`.${sidebarClasses.container}`]: {
            backgroundColor: `${colors.primary[400]}`,
            height: "100vh",
          },
        }}
      >
        <Menu iconShape="square">
          {/* LOGO AND MENU ICON */}
          <MenuItem
            icon={
              collapsed ? (
                <MenuOutlinedIcon onClick={() => collapseSidebar()} />
              ) : undefined
            }
            rootStyles={{
              [`.${menuClasses.button}`]: {
                margin: "10px 0 20px 0",
                color: colors.grey[100],

                "&:hover": {
                  color: "#868dfb",
                  backgroundColor: "#eecef9",
                },
              },
              [`.${menuClasses.icon}`]: {
                backgroundColor: "transparent",
              },
            }}
          >
            {!collapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
              >
                <Typography
                  variant="h3"
                  fontWeight="bold"
                  sx={{ m: "10px 0 0 0" }}
                >
                  ADMIN
                </Typography>
                <IconButton
                  sx={{
                    color: colors.grey[100],
                    "&:hover": {
                      color: "#868dfb",
                    },
                  }}
                >
                  <MenuOutlinedIcon onClick={() => collapseSidebar()} />
                </IconButton>
              </Box>
            )}
          </MenuItem>

          {/* USER */}

          {!collapsed && (
            <Box mb="25px">
              <Box display="flex" justifyContent="center" alignItems="center">
                <img
                  alt="profile-user"
                  width="100px"
                  height="100px"
                  src={`../../assets/user.png`}
                  style={{ cursor: "pointer", borderRadius: "50%" }}
                />
              </Box>
              <Box textAlign="center">
                <Typography
                  variant="h2"
                  color={colors.grey[100]}
                  fontWeight="bold"
                  sx={{ m: "10px 0 0 0" }}
                >
                  Neha Nihar
                </Typography>
                <Typography variant="h5" color={colors.greenAccent[500]}>
                  Frontend Developer
                </Typography>
              </Box>
            </Box>
          )}

          {/* MENU ITEMS */}
          <Box paddingLeft={collapsed ? undefined : "10%"}>
            <Item
              title="Dashboard"
              to="/"
              icon={<HomeOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Data
            </Typography>
            <Item
              title="Manage Team"
              to="/team"
              icon={<PeopleOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Contacts Information"
              to="/contacts"
              icon={<ContactsOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Invoices Balances"
              to="/invoices"
              icon={<ReceiptOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Pages
            </Typography>
            <Item
              title="Profile Form"
              to="/form"
              icon={<PersonOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Calendar"
              to="/calendar"
              icon={<CalendarTodayOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="FAQ Page"
              to="/faq"
              icon={<HelpOutlineOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Charts
            </Typography>
            <Item
              title="Bar Chart"
              to="/bar"
              icon={<BarChartOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Pie Chart"
              to="/pie"
              icon={<PieChartOutlineOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Line Chart"
              to="/line"
              icon={<TimelineOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Geography Chart"
              to="/geography"
              icon={<MapOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
          </Box>
        </Menu>
      </Sidebar>
    </Box>
  );
}
