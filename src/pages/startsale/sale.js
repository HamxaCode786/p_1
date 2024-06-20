/*import React from 'react';
import Logo_listing from '../../assets/image/drawerimage.png';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import HomeTwoToneIcon from '@mui/icons-material/HomeTwoTone';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import CampaignOutlinedIcon from '@mui/icons-material/CampaignOutlined';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import MapsUgcOutlinedIcon from '@mui/icons-material/MapsUgcOutlined';
import LocalAtmOutlinedIcon from '@mui/icons-material/LocalAtmOutlined';
import EnhancedEncryptionOutlinedIcon from '@mui/icons-material/EnhancedEncryptionOutlined';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import AppBar from '@mui/material/AppBar';

const drawerWidth = 400;


const Sale = () => {
  return (
    <div class="drawer_1">
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            zIndex: '-1',
            height: '100%',
            position:'static',
            backgroundColor: 'rgba(0, 0, 0, 0.02)',
        }}}
        variant="permanent"
        anchor="left"
      >
        
        <List>
        <div Class="drawer_logo">
          <img class="drawer_img"  src={Logo_listing}/>
        </div>
          {['Home', 'Profile', 'Add New Listing', 'My Add', 'Favourites', 'Inbox','Billings','Password','Logout'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                
                <ListItemIcon>
                {index === 0 && <InboxIcon/>, path: "/"}
                {index === 1 && <HomeTwoToneIcon/>}
                {index === 2 && <AccountCircleOutlinedIcon/>}
                {index === 3 && <CampaignOutlinedIcon/>}
                {index === 4 && <StarBorderOutlinedIcon/>}
                {index === 5 && <MapsUgcOutlinedIcon/>}
                {index === 6 && <LocalAtmOutlinedIcon/>}
                {index === 7 && <EnhancedEncryptionOutlinedIcon/>}
                {index === 8 && <LogoutRoundedIcon/>}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
      >
        
      </Box>
      
    </Box>
    </div>
  );
}
export default Sale */

// src/components/Sale.js
import React from "react";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/Inbox";
import HomeTwoToneIcon from "@mui/icons-material/HomeTwoTone";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import CampaignOutlinedIcon from "@mui/icons-material/CampaignOutlined";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import MapsUgcOutlinedIcon from "@mui/icons-material/MapsUgcOutlined";
import LocalAtmOutlinedIcon from "@mui/icons-material/LocalAtmOutlined";
import EnhancedEncryptionOutlinedIcon from "@mui/icons-material/EnhancedEncryptionOutlined";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import Logo_listing from "../../assets/image/drawerimage.png";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Button from "react-bootstrap/Button";
import { Container } from "react-bootstrap";
import Toolbar from '@mui/material/Toolbar';
import CropFreeIcon from '@mui/icons-material/CropFree';
import { Icon } from "@mui/material";
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';

const drawerWidth = 300;

const Sale = () => {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const menuItems = [
    { text: "Home", path: "/", icon: <HomeTwoToneIcon /> },
    { text: "Profile", path: "", icon: <AccountCircleOutlinedIcon /> },
    {
      text: "Add New Listing",
      path: "/startsale",
      icon: <CampaignOutlinedIcon />,
    },
    { text: "My Add", path: "/myadpage", icon: <StarBorderOutlinedIcon /> },
    { text: "Favourites", path: "/favourites", icon: <MapsUgcOutlinedIcon /> },
    { text: "Inbox", path: "/inbox", icon: <InboxIcon /> },
    { text: "Billings", path: "/billings", icon: <LocalAtmOutlinedIcon /> },
    { text: "Password", path: "", icon: <EnhancedEncryptionOutlinedIcon /> },
    { text: "Logout", path: "/", icon: <LogoutRoundedIcon /> },
  ];

  return (
    <div className="drawer_1">
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              boxSizing: "border-box",
              zIndex: "-1",
              height: "100%",
              position: "static",
              backgroundColor: "rgba(0, 0, 0, 0.02)",
            },
          }}
          variant="permanent"
          anchor="left"
        >
          <List>
            <div className="drawer_logo">
              <img className="drawer_img" src={Logo_listing} alt="Logo" />
            </div>
            {menuItems.map((item) => (
              <ListItem key={item.text} disablePadding>
                <ListItemButton component={Link} to={item.path}>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Drawer>
        <Box
          component="main"
          sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}
        >
          <Box>
          <Toolbar className="ab_sales">
            <Container className="icon_sale1">
          <Icon className="s1"> <CropFreeIcon/> </Icon>
          <Icon className="s2"> <NotificationsActiveOutlinedIcon/> </Icon>
          <Icon className="s3"> <ChatOutlinedIcon/> </Icon>
          </Container>
          </Toolbar>
          </Box>
          <Box>
            <Box className="fh_startsale"> Add New Listing</Box>
            <Box className="sh_startsale"> Add New Listing</Box>
          </Box>
          <Box className="th_startsale"> Add New Listing</Box>
          <Box className="border_1">
            <Box
              className="first_row"
              component="form"
              sx={{
                "& > :not(style)": { width: "180.5ch" },
              }}
              noValidate
              autoComplete="off"
            >
              <TextField
                id="outlined-basic"
                label="Link of Social Media Account/Channel/Group which want to sale"
                variant="outlined"
              />
            </Box>
            <Box className="second_row">
              <Box sx={{ "& > :not(style)": { width: "87ch" } }}>
                <InputLabel id="demo-simple-select-label"></InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={age}
                  label="Age"
                  onChange={handleChange}
                >
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </Box>
              <Box
                component="form"
                sx={{
                  "& > :not(style)": { width: "87ch" },
                }}
                noValidate
                autoComplete="off"
              >
                <TextField
                  id="outlined-basic"
                  label="Enter Price"
                  variant="outlined"
                />
              </Box>
            </Box>
            <Box className="third_row">
              <Box
                component="form"
                sx={{
                  "& > :not(style)": { width: "89ch" },
                }}
                noValidate
                autoComplete="off"
              >
                <TextField
                  id="outlined-basic"
                  label="Income in $ per month"
                  variant="outlined"
                />
              </Box>
              <Box
                component="form"
                sx={{
                  "& > :not(style)": { width: "87ch" },
                }}
                noValidate
                autoComplete="off"
              >
                <TextField
                  id="outlined-basic"
                  label="Expense in $ per month"
                  variant="outlined"
                />
              </Box>
            </Box>
            <Box
              className="fourth_row"
              sx={{ "& > :not(style)": { width: "176ch" } }}
            >
              <Select value={age} label="Age" onChange={handleChange}>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </Box>
            <Box
              className="fifth_row"
              component="form"
              sx={{
                "& .MuiTextField-root": { width: "180.5ch" },
              }}
              noValidate
              autoComplete="off"
            >
              <TextField
                className="over_1"
                id="outlined-multiline-flexible"
                label="Description"
                multiline
                maxRows={4}
              />
            </Box>
            <Box className="after_form">
              <h1 className="ss_img">
                Attach screenshots (proof of income, etc.)
              </h1>
              <h1 className="ss_img2">
                If you do not need to leave contacts and open DM on the page, we
                are ready to give you 50% more rating after the transaction is
                completed, as this will make it easier for us to control. Rating
                is one of the main factors of trust from buyers. An additional
                rating will be automatically added after the completion of the
                transaction if you check the box below, but in case of violation
                of this agreement, we will have to block you.
              </h1>
              <FormGroup >
                <FormControlLabel className="checkbox_1"
                  control={<Checkbox defaultChecked />}
                  label="I agree to remove contacts / close DM on the page to get 50% more rating"
                />
              </FormGroup>
            </Box >
            <Container className="ss_button1">
            <Button className="ss_bs1">Add In Listing</Button>
            </Container>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default Sale;
