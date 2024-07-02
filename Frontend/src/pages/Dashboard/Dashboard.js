import * as React from 'react';
import {Box ,Tab, Typography } from '@mui/material';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { Button } from "@mui/material"
import { Link } from "react-router-dom"
import Create from '../Create/Create';
import "./Dashboard.css";



export default function Home() {
  const [value, setValue] = React.useState('1');
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


  return (
    <div className='gradient'>
    <Box sx={{ display:"flex", flexDirection:"row", justifyContent:"center"}}>
    <Typography variant='h3'sx={{ margin:"2% 5% 0 17%"}} align='center'>EMPLOYER DASHBOARD</Typography>
    <Button sx={{ 
      margin:"2% 3%",
      padding: '12px 24px', 
      fontSize: '1.25rem', 
      width: 'auto',
      height: 'auto',
      border: '2px solid white',
      ':hover': {
      backgroundColor: 'lightgreen',
      // color: 'white',
      }
      }} 
      variant="outlined"><Link to="/">Home</Link></Button>
    </Box>
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        {/* <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Create Post" value="1" />
          </TabList>
        </Box> */}
        <TabPanel value="1"><Create /></TabPanel>
      </TabContext>
    </Box>
    </div>
  );
}
