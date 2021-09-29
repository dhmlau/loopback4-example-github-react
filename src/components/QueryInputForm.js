import React, { useContext, useReducer } from "react";
import { Button, TextField, Paper, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import {GhQueryControllerService} from '../services/openapi/services/GhQueryControllerService';
import { QueryDataContext } from "./QueryDataContext";

export function QueryInputForm(props) {
  const useStyles = makeStyles(theme => ({
    button: {
      margin: theme.spacing(1)
    },
    leftIcon: {
      marginRight: theme.spacing(1)
    },
    rightIcon: {
      marginLeft: theme.spacing(1)
    },
    iconSmall: {
      fontSize: 20
    },
    root: {
      padding: theme.spacing(3, 2)
    },
    container: {
      display: "flex",
      flexWrap: "wrap"
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 400
    }
  }));

  const [data, setData] = useContext(QueryDataContext);

  const [formInput, setFormInput] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      name: "",
      email: ""
    }
  );

  


  const handleSubmit = evt => {
    evt.preventDefault();


    GhQueryControllerService.ghQueryControllerGetIssuesByLabel(formInput.repo, formInput.label).then((result)=> {
      setData((data)=> {
        return { 
          total_count: result.total_count,
          items: result.items
        };
      });
  
    });

  };

  const handleInput = evt => {
    const name = evt.target.name;
    const newValue = evt.target.value;
    setFormInput({ [name]: newValue });
  };

  const classes = useStyles();

  return (
    <div>
      <Paper className={classes.root}>
        <Typography variant="h5" component="h3">
          {props.formName}
        </Typography>
        <Typography component="p">{props.formDescription}</Typography>

        <form onSubmit={handleSubmit}>
          <TextField
            label="GitHub Repo"
            id="margin-normal"
            name="repo"
            className={classes.textField}
            onChange={handleInput}
          />
          <TextField
            label="GitHub label"
            id="margin-normal"
            name="label"
            className={classes.textField}
            onChange={handleInput}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            className={classes.button}
          >
            Get Issues 
          </Button>
        </form>
      </Paper>
    </div>
  );
}
