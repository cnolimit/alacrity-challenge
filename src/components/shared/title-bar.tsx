import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  withStyles
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import EuroIcon from "@material-ui/icons/Euro";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";

interface ITitleBar {
  title: string;
  amount?: number;
  itemCount?: number;
}

export default ({ title, amount, itemCount }: ITitleBar) => {
  const classes = makeStyles(() => ({
    title: {
      flexGrow: 1
    },
    typography: {
      margin: "0 5px"
    },
    icon: {
      margin: "0 5px"
    },
    iconText: {
      marginLeft: "20px",
      display: "flex"
    },
    button: {
      background: "white"
    }
  }))();

  const SButton = withStyles({
    root: {
      backgroundColor: "white",
      fontSize: 16,
      padding: "6px 12px",
      marginLeft: "15px"
    }
  })(Button);

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h5" className={classes.title}>
          {title}
        </Typography>
        {amount ? (
          <Typography variant="subtitle1" className={classes.iconText}>
            <EuroIcon className={classes.icon} />
            {amount}
          </Typography>
        ) : null}
        {itemCount ? (
          <Typography variant="subtitle1" className={classes.iconText}>
            <ShoppingBasketIcon className={classes.icon} />
            {itemCount}
          </Typography>
        ) : null}
        <SButton>Create New</SButton>
      </Toolbar>
    </AppBar>
  );
};