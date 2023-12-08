import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import img1 from "../../assests/review-1 (1).jpg"
import img2 from "../../assests/review-2.jpg"
import img3 from "../../assests/review-3.jpg"


export default function Review(){
    return(<>
      <div className="ba-section" id="reviews">
          <div className="ba-text-content">
        <h3 className="ba-title">
          <span>Join the Health Revolution. It’s Time.</span>
        </h3>
        <p className="ba-description">
        Find your reason to Healthify and bring the change that you’ve always aimed for.
        </p>
        <List sx={{ width: '100%', maxWidth: 860, bgcolor: 'background.paper' }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src={img1} />
        </ListItemAvatar>
        <ListItemText
          primary="Krishan Thukral"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
              I Healthified from 94 to 80 Kg to play with my son.
              </Typography>
              {" — With the Healthier Friend, Krishan lost 14 Kg and is now his son’s favourite.…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Travis Howard" src={img2} />
        </ListItemAvatar>
        <ListItemText
          primary="Priyanka Jain"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
               I Healthified to be an active mom.
              </Typography>
              {" —Supported by Healthier Friend’s personal coaches, customized diet plans, calorie counters, Priyanka lost 15 Kg post-pregnancy.…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Cindy Baker" src={img3} />
        </ListItemAvatar>
        <ListItemText
          primary="Dr. Vijay Manocha"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                I Healthified to realise my dreams
              </Typography>
              {' —Supported by HealthifyMe’s personal coaches, customized diet plans, calorie counters, Dr. Vijay won over her PCOS and lost 18 Kg in 12 months…'}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
        </div>
        </div>
        </>)
}