import * as React from 'react';
import {useState} from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import useLocalStorage from '../hooks/useLocalStorage';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';

const drawerWidth = 240;

function Sidebar(props) {
  const { window, data } = props;
  
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [flag, setFlag] = useState(0);
  const [favs, setFavs] = useState([false, false, false, false, false, false])

  const handleDrawerToggle = () => { 
    setMobileOpen(!mobileOpen);
  };

  const changeFavsFlag = (j) => {
    let temp = [...favs];
    temp[j]=!temp[j];
    setFavs(temp);
  }
  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
         {data.map( (e,i) => {
             return (
                 <ListItem button onClick={()=>setFlag(i)}>
                   <ListItemIcon>{!favs[i] ? <StarBorderIcon></StarBorderIcon> : <StarIcon></StarIcon>}</ListItemIcon>
                     {e.title} <br/>
                     
                 </ListItem>
             )
         })} 
        {/* {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))} */}
      </List>
      <Divider />

    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    
    <Box sx={{ display: 'flex' }}>
     
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar style={{backgroundColor: 'black'}}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div"> 
          
              {data[flag].title}
            
            
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, 
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
         
        <Toolbar />

                <Typography paragraph width="80%">
                  
                <Button onClick={()=>{changeFavsFlag(flag)}} variant="contained">
                  {favs[flag] ? 'Remove from favorites' : 'Add to favorites'}
                  
                  
                  </Button>
     
                <Typography>
                <strong>episode id:</strong>  {data[flag].episode_id}
                  </Typography>
                  <Typography>
                  <strong>opening crawl:</strong>  {data[flag].opening_crawl}
                  </Typography>
                  <Typography>
                  <strong>director:</strong>  {data[flag].director}
                  </Typography>
                  <Typography>
                  <strong>producer:</strong>  {data[flag].producer}
                  </Typography>
                  <Typography>
                  <strong>created:</strong>  {data[flag].created}
                  </Typography>
                  <Typography>
                  <strong>species:</strong>  {data[flag].species}
                  </Typography>
                  <Typography>
                  <strong>vehicles:</strong>  {data[flag].vehicles}
                  </Typography>
                  <Typography>
                  <strong>planets:</strong>  {data[flag].planets}
                  </Typography>
                  <Typography>
                  <strong>starships:</strong>  {data[flag].starships}
                  </Typography>
                  <Typography>
                  <strong>planets:</strong>  {data[flag].planets}
                  </Typography>
                  <Typography>
                  <strong>characters:</strong> {data[flag].characters}
                  </Typography>
                  <Typography>
                  <strong>release date:</strong>  {data[flag].release_date}
                  </Typography>
                  <Typography>
                  <strong>edited:</strong> {data[flag].edited}
                  </Typography>    
        
      
                </Typography>
                
             

      </Box>
    </Box>
  );
}

export default Sidebar;


