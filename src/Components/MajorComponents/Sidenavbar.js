import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import hrimg from "../Images/hr logo.png";
import { useNavigate } from 'react-router-dom';

export default function TemporaryDrawer() {
  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate();

  const navigationHandler = (text) => {
    // Implement your navigation logic here
    switch (text) {
      case 'Company List':
        navigate("/dash", { state: { lable:"Admin Panel" } });
        break;
      case 'Employee List':
        navigate('/hrdash', { state: { lable:"HR Dashboard" } });
        break;
      case 'Employee Manager':
        navigate('/empmangerdash', { state: { lable:"Employee Manager Dashboard" } });
        break;
      case 'Logout':
        navigate('/');
        break;
      default:
        // Do something for other cases
        break;
    }
    setOpen(false); // Close the drawer after navigation
  };

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        <div className='logoim'>
          <a><img src={hrimg}  alt="twitch-logo-font" border="0" ></img></a>
        </div>
        
        {['Company List', 'Employee List', 'Employee Manager'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton onClick={() => navigationHandler(text)}>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['Logout'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton onClick={() => navigationHandler(text)}>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <Button onClick={toggleDrawer(true)} sx={{ color: 'white' }}><MenuIcon /></Button>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}
