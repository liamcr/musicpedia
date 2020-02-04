import React from "react";
import {
  Box,
  Card,
  CardMedia,
  makeStyles,
  Icon,
  Typography,
  CircularProgress,
  Link,
  useMediaQuery
} from "@material-ui/core";
import { AccountCircle } from "@material-ui/icons";
import { config } from "../config";

const useStyles = makeStyles({
  card: {
    display: "flex"
  },
  image: {
    height: "30vh",
    width: "30vh"
  },
  imageSmaller: {
    height: "20vh",
    width: "20vh"
  },
  infoContainer: {
    margin: "auto 20px",
    overflowX: "auto",
    flex: 1
  },
  artistName: {
    display: "inline"
  }
});

export default function PageHeader(props) {
  const classes = useStyles();
  const matches = useMediaQuery("(min-width:600px)");

  if (props.name === null) {
    return (
      <Card>
        <CircularProgress />
      </Card>
    );
  } else {
    return (
      <Card className={classes.card}>
        {props.images.length !== 0 ? (
          <CardMedia
            className={!matches ? classes.imageSmaller : classes.image}
            image={props.images[0].url}
            title={props.subtitle || props.trackAlbum ? "Album Art" : "Artist"}
          />
        ) : (
          <Icon className={classes.image}>
            <AccountCircle className={classes.image} />
          </Icon>
        )}
        <Box className={classes.infoContainer}>
          <Typography noWrap variant={!matches ? "h3" : "h1"}>
            {props.name}
          </Typography>
          <Box>
            {props.trackAlbum && (
              <Typography
                noWrap
                variant={!matches ? "h5" : "h4"}
                color="textSecondary"
              >
                <Link
                  color="inherit"
                  href={`${config.homePageURL}/album/${props.trackAlbum.id}`}
                >
                  {props.trackAlbum.name}
                </Link>
              </Typography>
            )}
          </Box>
          <Box>
            {props.artists &&
              props.artists.map((artist, index) => (
                <Typography
                  key={index}
                  noWrap
                  variant={!matches ? "h5" : "h4"}
                  className={classes.artistName}
                  color="textSecondary"
                >
                  <Link
                    color="inherit"
                    href={`${config.homePageURL}/artist/${artist.id}`}
                  >
                    {`${index !== 0 ? ", " : ""}${artist.name}`}
                  </Link>
                </Typography>
              ))}
          </Box>
          <Typography variant={!matches ? "h6" : "h5"} color="textSecondary">
            {props.subtitle}
          </Typography>
        </Box>
      </Card>
    );
  }
}
