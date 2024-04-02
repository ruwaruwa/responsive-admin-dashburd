import React, { useState } from 'react'
import {Box, Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Stack, Typography} from '@mui/material'
import { AdbSharp, Dashboard } from '@mui/icons-material'
import { Link } from 'react-router-dom'
export default function Sidebar({openDrower,drowerClouse}) {
  const[selectmenu,setSelectmnu]=useState('')
  return<>
<Drawer 
open={openDrower}
 onClose={drowerClouse}>

    <Box sx={{width: '100%', height: ''}}>
      <Box sx={{p:4}}>
        <Stack direction={'row'} spacing={4}>
          <Box>
            <AdbSharp sx={{color:"red",fontSize:"45px", height:"40"}}/>
          </Box>
<Typography variant='h6'>Logo name</Typography>
        </Stack>
      </Box>

      {/* <smal screen></smal> */}

      <Box>
<Box sx={{width: '100%',maxWidth:360,bgcolor:""}}>

  <nav aria-label='main mailbox folders'>
    <List>

    <ListItem disablePadding>
      <ListItemButton>
        <ListItemIcon>
          <Dashboard></Dashboard>
          <ListItemText primary="Dashbourd"/>
        </ListItemIcon>
      </ListItemButton>

    </ListItem>
    <Link to={'home'} style={{textDecoration:'none'}}>
      <ListItemButton onClick={()=>{
        setSelectmnu('home')
        drowerClouse()
      }}>

    <ListItemIcon>
      <AdbSharp/>
     </ListItemIcon>

<ListItemText primary="home"/>
      </ListItemButton>
    </Link>
    </List>

  </nav>
</Box>
      </Box>
    </Box>

{/* <-big screen-> */}

 </Drawer>
    <Divider/>
    <Box>
<Box sx={{width:'290px',height:'100vh',bgcolor:"",
display:{
   xs:"none",
  md:"block"
},borderRight:4,borderColor:"gray"}} >
<Box sx={{width:'200',bgcolor:""}}>
<Box sx={{p:4}}>
        <Stack direction={'row'} spacing={2}>
          <Box>
            <AdbSharp sx={{color:"red",fontSize:"45px", height:"30"}}/>
          </Box>
<Typography variant='h6'>Logo name</Typography>
        </Stack>
      </Box>
      </Box>
<Box sx={{width: '100%',maxWidth:360,bgcolor:""}}>

<nav aria-label='main mailbox folders'>
  <List>

  <ListItem disablePadding>
    <ListItemButton>
      <ListItemIcon>
        <Dashboard></Dashboard>
        <ListItemText primary="Dashbourd"/>
      </ListItemIcon>
    </ListItemButton>

  </ListItem>
  <Link to={'home'} style={{textDecoration:'none'}}>
    <ListItemButton onClick={()=>{
      setSelectmnu('home')
      // drowerClouse()
    }}>

  <ListItemIcon>
    <AdbSharp/>
   </ListItemIcon>

<ListItemText primary="home"/>
    </ListItemButton>
  </Link>
  </List>

</nav>
<Divider/>
</Box>


</Box>
</Box>
    </>
  
}
