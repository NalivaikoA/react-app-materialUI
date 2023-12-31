import { Favorite, FavoriteBorder, MoreVert, Share } from "@mui/icons-material";
import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, Checkbox, IconButton, Typography } from "@mui/material";

export const Post = () => {
  
  
  return (
    <Card sx={{margin: {xs: 1, sm: 5}}}>
    <CardHeader
        avatar={
        <Avatar sx={{ bgcolor: 'red' }} aria-label="recipe">
            R
        </Avatar>
        }
        action={
        <IconButton aria-label="settings">
            <MoreVert />
        </IconButton>
        }
        title="Nord nature"
        subheader="September 14, 2023"
    />
    <CardMedia
        component="img"
        height="20%"
        image="https://vsegda-pomnim.com/uploads/posts/2022-04/1649202285_8-vsegda-pomnim-com-p-priroda-zima-rassvet-foto-10.jpg"
        alt="Landscape"
    />
    <CardContent>
        <Typography variant="body2" color="text.secondary">
        This impressive paella is a perfect party dish and a fun meal to cook
        together with your guests. Add 1 cup of frozen peas along with the mussels,
        if you like.
        </Typography>
    </CardContent>
    <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
        <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{color:'red'}} />}/>
        </IconButton>
        <IconButton aria-label="share">
        <Share />
        </IconButton>
    </CardActions>
  </Card>
  )
};