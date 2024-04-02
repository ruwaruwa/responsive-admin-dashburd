import { Box, IconButton, Stack, Typography } from '@mui/material'
import React, { useState } from 'react'
import Sidebar from './Sidebar'
import MenuIcon from '@mui/icons-material/Menu';
export default function Dashbourd() {
    const [opeTogle,setOpenTogler]=useState(false)
    const handleTogler=()=>{
        setOpenTogler(!opeTogle)
    }
  return (
    <Box>
        <Stack direction={'row'}>
<Sidebar openDrower={opeTogle} drowerClouse={handleTogler}/>
<Box sx={{width: '100%', height: ''}}>
    <Box sx={{bgcolor:"red",color: 'white',
    display: 'flex',
    justifyContent:{
        sx:"space-between",
        md:"end",

    }}}p={2}>
<IconButton sx={{p:0,
 display:{
     sx:'block',
     md:"none"

 },
}} 
onClick={handleTogler}>
<MenuIcon sx={{color:'white'}}/>
</IconButton>
<Stack direction={'row'} spacing={4}>
<Typography>User</Typography>
</Stack>
    </Box>

</Box>
        </Stack>
    </Box>
  )
}
