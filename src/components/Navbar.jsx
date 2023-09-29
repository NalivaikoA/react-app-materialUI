import { AppBar, Avatar, Badge, Box, InputBase, Menu, MenuItem, Toolbar, Typography, styled } from "@mui/material";
import CameraIcon from '@mui/icons-material/Camera';
import { Mail, Notifications } from "@mui/icons-material";
import { useState } from "react";

const StyledToolBar = styled(Toolbar)({
    display:'flex',
    justifyContent:'space-between',
})

const Search = styled('div')(({theme}) => ({
    backgroundColor:'white',
    padding:"0 10px",
    borderRadius:theme.shape.borderRadius,
    width:'40%'
}));

const Icons = styled(Box)(({theme}) => ({
    display:'none',
    alignItems: 'center',
    gap: '20px',
    [theme.breakpoints.up('sm')] : {  //меньше sm это 600px отображаться не будет
        display: "flex"
    }  
}));

const UserBox = styled(Box)(({theme}) => ({
    display:'flex',
    alignItems: 'center',
    gap: '10px',
    [theme.breakpoints.up('sm')] : {  //меньше sm это 600px отображаться не будет
        display: "none"
    }  
}));

export const Navbar = () => {
  const [open, setOpen] = useState(false)
  
  return (
    <AppBar position='sticky'>
        <StyledToolBar>
            <Typography variant="h6" sx={{display:{xs:'none', sm:'block'}}}>FRIENDS</Typography>
            <CameraIcon sx={{display:{xs:'block', sm:'none'}}}/>
            <Search><InputBase placeholder="search ..."/></Search>
            <Icons>
            <Badge badgeContent={4} color="error">
                <Mail/>
            </Badge>
            <Badge badgeContent={4} color="error">
                <Notifications/>
            </Badge>
            <Avatar 
                sx={{width:'30px', height:'30px'}} 
                src="https://www.zastavki.com/pictures/originals/2014/Men___Male_Celebrity_Popular_Arnold_Schwarzenegger_057145_.jpg"
                onClick={()=>setOpen(true)}
                />
            </Icons>
            <UserBox onClick={()=>setOpen(true)}>
                <Avatar 
                sx={{width:'30px', height:'30px'}} 
                src="https://www.zastavki.com/pictures/originals/2014/Men___Male_Celebrity_Popular_Arnold_Schwarzenegger_057145_.jpg"/>
                <Typography variant="span">Arnold</Typography>
            </UserBox>
        </StyledToolBar>
        <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={()=>setOpen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <MenuItem>My account</MenuItem>
        <MenuItem>Profile</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  )
};