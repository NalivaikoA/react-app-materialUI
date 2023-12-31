import { Avatar, AvatarGroup, Box, Divider, ImageList, ImageListItem, List, ListItem, ListItemAvatar, ListItemText, Typography } from "@mui/material";
import React from "react";


export const Rightbar = () => {
  
  
  return (
    <Box 
      flex={2} 
      p={2}
      sx={{display: {xs: "none", sm: "block"}}}
    >
      <Box position='fixed' width={300}>
        <Typography variant="h6" fontWeight={100}>Online Friends</Typography>
        <AvatarGroup max={7}>
          <Avatar alt="Remy Sharp" src="http://mui.com/static/images/avatar/1.jpg" />
          <Avatar alt="Travis Howard" src="http://mui.com/static/images/avatar/2.jpg" />
          <Avatar alt="Cindy Baker" src="http://mui.com/static/images/avatar/3.jpg" />
          <Avatar alt="Agnes Walker" src="http://mui.com/static/images/avatar/4.jpg" />
          <Avatar alt="Trevor Henderson" src="http://mui.com/static/images/avatar/5.jpg" />
          <Avatar alt="Agnes Walker" src="http://mui.com/static/images/avatar/4.jpg" />
          <Avatar alt="Trevor Henderson" src="http://mui.com/static/images/avatar/5.jpg" />
          <Avatar alt="Agnes Walker" src="http://mui.com/static/images/avatar/4.jpg" />
          <Avatar alt="Trevor Henderson" src="http://mui.com/static/images/avatar/5.jpg" />
        </AvatarGroup>
        <Typography variant="h6" fontWeight={100} mt={2} mb={2}>Latest Photos</Typography>
        <ImageList cols={3} rowHeight={100} gap={5}> 
          <ImageListItem>
            <img
              src="https://avatars.mds.yandex.net/i?id=e7c8666e9b9ccaee783862ba5875efe30b492cdd-9042177-images-thumbs&n=13"
              alt=""
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://sportishka.com/uploads/posts/2022-03/1646719153_18-sportishka-com-p-bereg-karibskogo-morya-turizm-krasivo-foto-23.jpg"
              alt=""
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://vacationownership.villagroupresorts.com/wp-content/uploads/2016/02/cancun-beaches-1536x864.jpg"
              alt=""
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://krot.info/uploads/posts/2021-11/1637570184_47-krot-info-p-karibskoe-more-meksika-peizazh-krasivoe-fo-49.jpg"
              alt=""
            />
          </ImageListItem>
        </ImageList>
        <Typography variant="h6" fontWeight={100} mt={2}>Latest Conversations</Typography>

        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="http://mui.com/static/images/avatar/1.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Brunch this weekend?"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Ali Connors
              </Typography>
              {" — I'll be in your neighborhood doing errands this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Travis Howard" src="http://mui.com/static/images/avatar/2.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Summer BBQ"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                to Scott, Alex, Jennifer
              </Typography>
              {" — Wish I could come, but I'm out of town this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Oui Oui"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Sandra Adams
              </Typography>
              {' — Do you have Paris recommendations? Have you ever…'}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
      </Box>
    </Box>
  )
};