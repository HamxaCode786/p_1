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
import React from 'react';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/Inbox';
import HomeTwoToneIcon from '@mui/icons-material/HomeTwoTone';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import CampaignOutlinedIcon from '@mui/icons-material/CampaignOutlined';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import MapsUgcOutlinedIcon from '@mui/icons-material/MapsUgcOutlined';
import LocalAtmOutlinedIcon from '@mui/icons-material/LocalAtmOutlined';
import EnhancedEncryptionOutlinedIcon from '@mui/icons-material/EnhancedEncryptionOutlined';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import Logo_listing from '../../assets/image/drawerimage.png';
import { AppBar } from '@mui/material';
import TextField from '@mui/material/TextField';

const drawerWidth = 300;

const Sale = () => {
  const menuItems = [
    { text: 'Home', path: '/', icon: <HomeTwoToneIcon /> },
    { text: 'Profile', path: '', icon: <AccountCircleOutlinedIcon /> },
    { text: 'Add New Listing', path: "/startsale", icon: <CampaignOutlinedIcon /> },
    { text: 'My Add', path: '/myadpage', icon: <StarBorderOutlinedIcon /> },
    { text: 'Favourites', path: '/favourites', icon: <MapsUgcOutlinedIcon /> },
    { text: 'Inbox', path: '/inbox', icon: <InboxIcon /> },
    { text: 'Billings', path: '/billings', icon: <LocalAtmOutlinedIcon /> },
    { text: 'Password', path: '', icon: <EnhancedEncryptionOutlinedIcon /> },
    { text: 'Logout', path: '/', icon: <LogoutRoundedIcon /> }
  ];

  return (
    <div className="drawer_1">
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
              position: 'static',
              backgroundColor: 'rgba(0, 0, 0, 0.02)',
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
          sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
        >
          <AppBar>
            <icon></icon>
          </AppBar >
          <Box>
          <h1>Add New Listing</h1>
          <h2>Add New Listing</h2>
          </Box>
          <h1>
            Add New List
          </h1>
          <Box>
          <TextField id="outlined-basic" label="Outlined" variant="outlined" />

          </Box>

          
          <Box>

          </Box>
        </Box>
      </Box>
    </div>
  );
}

export default Sale;
