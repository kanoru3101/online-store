import React from "react";
import Autosuggest from "react-autosuggest";
import RenderSuggestion from "./RenderSuggestionView";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
import { withStyles } from "@material-ui/styles";
import Button from "@material-ui/core/Button/Button";

const styles = {
  root: {
    flexGrow: 1,
    alignItems: "center"
  },
  container: {
    position: "relative",
    alignItems: "center"
  },
  suggestionsContainerOpen: {
    position: "absolute",
    zIndex: 1,
    left: 0,
    right: 0
  },
  suggestion: {
    display: "flex",
    width: "100%"
  },
  suggestionsList: {
    margin: 0,
    padding: 0,
    listStyleType: "none"
  },
  inputStyle: {
    "&:before": {
      width: "0%"
    },
    transition: "width 1s",
    color: "#F57C00",
    borderBottomColor: "#F57C00",
    "&:focus": {
      width: "100%"
    }
  },
  inputWithValue: {
    color: "#009688"
  },
  cssUnderline: {
    "&:before": {
      borderBottomColor: "#f57c00"
    },
    "&:after": {
      borderBottomColor: "#f57c00"
    },
    borderBottomColor: "#f57c00"
  },
  cssUnderlineWithValue: {
    "&:before": {
      borderBottomColor: "#009688"
    },
    "&:after": {
      borderBottomColor: "#009688"
    }
  }
};

const getSuggestionValue = suggestion => {
  return suggestion.title;
};

const renderSuggestion = (suggestion, { query, isHighlighted }) => (
  <RenderSuggestion
    suggestion={suggestion}
    query={query}
    isHighlighted={isHighlighted}
  />
);

const RenderButtonSeeAllResult = ({ props }) => {
  if (props && props.items.length >= 8) {
    return (
      <Button fullWidth color={"primary"}>
        {" "}
        all results
      </Button>
    );
  }
  return <div />;
};

const renderSuggestionsContainer = ({ containerProps, children }) => {
  console.log(children);
  return (
    <Paper {...containerProps}>
      {children}
      <RenderButtonSeeAllResult {...children} />
    </Paper>
  );
};

const searchIcon = props => {
  return (
    <InputAdornment position={"start"}>
      <SearchIcon color={props.value.length > 0 ? "primary" : "secondary"} />
    </InputAdornment>
  );
};

const renderInputComponent = inputProps => {
  const { classes, inputRef = () => {}, ref, ...other } = inputProps;
  return (
    <TextField
      InputProps={{
        inputRef: node => {
          ref(node);
          inputRef(node);
        },
        classes: {
          input:
            inputProps.value.length > 0
              ? classes.inputWithValue
              : classes.inputStyle,
          underline:
            inputProps.value.length > 0
              ? classes.cssUnderlineWithValue
              : classes.cssUnderline
        },
        startAdornment: searchIcon(inputProps)
      }}
      {...other}
    />
  );
};

const SearchComponentView = props => {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <Autosuggest
        renderInputComponent={renderInputComponent}
        suggestions={
          props.products.length > 8
            ? props.products.slice(0, 8)
            : props.products
        }
        onSuggestionsFetchRequested={props.handleSuggestionsFetchRequested}
        onSuggestionsClearRequested={props.handleSuggestionsClearRequested}
        getSuggestionValue={getSuggestionValue}
        renderSuggestion={renderSuggestion}
        inputProps={{
          classes,
          placeholder: "Search Product",
          value: props.single,
          onChange: props.handleChange("single")
        }}
        theme={{
          container: classes.container,
          suggestionsContainerOpen: classes.suggestionsContainerOpen,
          suggestionsList: classes.suggestionsList,
          suggestion: classes.suggestion
        }}
        renderSuggestionsContainer={renderSuggestionsContainer}
      />
    </div>
  );
};

export default withStyles(styles)(SearchComponentView);
