import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
  Grid,
} from "@material-ui/core";
import dataApis from "../../dataAPIs";
import {Link} from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 300,
  },
  media: {
    height: 200,
  },
  paddingContainer: {
    padding: "30px",
  },
  button: {
    "margin-left": "auto",
  },
  heightDescription: {
    maxHeight: 100,
  },
}));

export default function Home() {
  const classes = useStyles();

  console.log(dataApis);

  return (
    <div className={classes.paddingContainer}>
      <Grid container justify="center" spacing={5}>
        {dataApis.map((item) => (
          <Grid key={item.sys.id} item>
            <Card className={classes.root} raised>
              <CardActionArea  component={Link} to={item.fields.slug}>
                <CardMedia
                  className={classes.media}
                  image={item.fields.img}
                  title={item.fields.name}
                />
                <CardContent className={classes.heightDescription}>
                  <Typography gutterBottom variant="h5" component="h2">
                    {item.fields.name}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    <strong>{item.fields.urlName} </strong>
                    {item.fields.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button
                  size="small"
                  color="primary"
                  className={classes.button}
                  href={item.fields.url}
                  target="_blank"
                >
                  Learn More
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
