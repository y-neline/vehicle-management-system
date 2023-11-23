import { useState } from 'react';
import { ProSidebar, Menu, MenuItem } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import { Box, IconButton, Typography, useTheme } from '@mui/material';
import { Link } from 'react-router-dom';
import { tokens } from '../../theme';
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlinedIcon from "@mui/icons-material/HelpOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlinedIcon from "@mui/icons-material/PieChartOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import TaskAltOutlinedIcon from '@mui/icons-material/TaskAltOutlined';
import TaskOutlinedIcon from '@mui/icons-material/TaskOutlined';
import DriveEtaOutlinedIcon from '@mui/icons-material/DriveEtaOutlined';

import "./Sidebar.css"

const Item = ({title, to, icon, selected, setSelected}) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <MenuItem 
      active={selected === title} 
      style={{color: colors.grey[100]}} 
      onClick={() => setSelected(title)} 
      icon={icon}
    >
      <Typography>{title}</Typography>
      <Link to={to} />
    </MenuItem>
  )

}

const Sidebar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");

  return (
    <Box
      sx={{
        "& .pro-sidebar-inner": {
          background: `${colors.primary[400]} !important`,
        },
        "& .pro-icon-wrapper": {
          backgroundColor: "transparent !important",
        },
        "& .pro-inner-item": {
          padding: "5px 35px 5px 20px !important",
        },
        "& .pro-inner-item:hover": {
          color: "#868dfb !important",
        },
        "& .pro-menu-item.active": {
          color: "#6870fa !important",
        },
      }}
    >
      <ProSidebar collapsed={isCollapsed}>
        <Menu iconShape="square">
          {/**LOGO AND MENU ITEM */}
          <MenuItem 
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlinedIcon /> :undefined}
            style={{
              margin: "10px 0 20px 0",
              color: colors.grey[100],
            }}
          
          >
            {!isCollapsed && (
              <Box 
                display="flex" 
                justifyContent="space-between" alignItems="center"
                ml="15px"
              >
                <Typography variant="h3" color={colors.grey[100]}>DRIVER</Typography>
              <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOutlinedIcon />
                </IconButton>
              </Box>
            )}
          </MenuItem>

          {/**USER */}
          {!isCollapsed && (
            <Box mb="25px">
              <Box 
                display="flex" 
                justifyContent="center" 
                alignItems="center"
              >
                <img 
                  alt="profile-user"
                  width="100px"
                  height="100px"
                  src={'../../assets/facebook.png'}
                  style={{ cursor: "pointer", borderRadius: "50%",
                  // borderStyle: "solid",
                  // borderColor: "black",
                  }}
                />
              </Box>

              <Box textAlign="center">
                <Typography 
                  variant="h2" 
                  color={colors.grey[100]} 
                  fontWeight="bold" 
                  sx={{m: "10px 0 0 0"}}
                >
                  John Smith
                </Typography>
                <Typography 
                  variant="h5" 
                  color={colors.greenAccent[500]} 
                >
                  Driver</Typography>
              </Box>

            </Box>
          )}

          {/**Menu Items */}
          <Box paddingLeft={isCollapsed ? undefined : "10px"}>
            <Item 
              title="Profile"
              to="/driver"
              icon={<HomeOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px"}}
            >Data</Typography>
            <Item 
              title="Manage Team"
              to="/driver/team"
              icon={<PeopleOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item 
              title="Contacts Information"
              to="/driver/contacts"
              icon={<ContactsOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item 
              title="Invoices Balance"
              to="/driver/invoices"
              icon={<ReceiptOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px"}}
            >Pages</Typography>
            {/* <Item 
              title="Create User"
              to="/driver/form"
              icon={<PersonOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            /> */}
            <Item 
            title="Create User"
            to="/driver/driver"
            icon={<PersonOutlinedIcon />}
            selected={selected}
            setSelected={setSelected}
          />
            <Item 
              title="Assign Task"
              to="/driver/task"
              icon={<TaskOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item 
              title="Calendar"
              to="/driver/calendar"
              icon={<CalendarTodayOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item 
              title="FAQ Page"
              to="/driver/faq"
              icon={<HelpOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px"}}
            >Charts</Typography>
            <Item 
              title="Bar Chart"
              to="/driver/bar"
              icon={<BarChartOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item 
              title="Pie Chart"
              to="/driver/pie"
              icon={<PieChartOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item 
              title="Line Chart"
              to="/driver/line"
              icon={<TimelineOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item 
              title="Geography Chart"
              to="/driver/geography"
              icon={<MapOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
          </Box>
        </Menu>
      </ProSidebar>

    </Box>
  );
}

export default Sidebar;