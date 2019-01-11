import React from "react";
import PropTypes from "prop-types";
import Autosuggest from "react-autosuggest";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import { withStyles } from "@material-ui/core/styles";
import * as searchOperation from "../../../modules/search/searchOperations";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { formatRoute } from "react-router-named-routes";
import Grid from "@material-ui/core/Grid/Grid";
import CardMedia from "@material-ui/core/CardMedia/CardMedia";
import { routes } from "../../../routes";
import MenuItem from "@material-ui/core/MenuItem/MenuItem";

function renderInputComponent(inputProps) {
  const { classes, inputRef = () => {}, ref, ...other } = inputProps;
  return (
    <TextField
      fullWidth
      InputProps={{
        inputRef: node => {
          ref(node);
          inputRef(node);
        },
        classes: {
          input: classes.input
        }
      }}
      {...other}
    />
  );
}

function renderSuggestion(suggestion, { query, isHighlighted }) {
  const id = suggestion.id;
  return (
    <MenuItem selected={isHighlighted} dense={true} component="div">
      <Grid container>
        <Link to={formatRoute(routes.productPage, { id })}>
          <Grid item xs={3}>
            <CardMedia
              component={"img"}
              alt={suggestion.title}
              image={suggestion.image}
              title={suggestion.title}
            />
          </Grid>
          <Grid item xs={9}>
            {suggestion.title}
          </Grid>
        </Link>
      </Grid>
    </MenuItem>
  );
}

function getSuggestionValue(suggestion) {
  return suggestion.title;
}

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  container: {
    position: "relative"
  },
  suggestionsContainerOpen: {
    position: "absolute",
    zIndex: 1,
    marginTop: theme.spacing.unit,
    left: 0,
    right: 0
  },
  suggestion: {
    display: "flex"
  },
  suggestionsList: {
    margin: 0,
    padding: 0,
    listStyleType: "none"
  },
  divider: {
    height: theme.spacing.unit * 2
  }
});

class SearchComponent extends React.Component {
  state = {
    single: "",
    suggestions: this.props.products
  };
  componentDidUpdate(prevProps, prevState) {
    if (this.state.single !== "" && prevState.single !== this.state.single) {
      if (this.state.single.trim().length > 0) {
        this.props.fetchProduct(this.state.single);
      }
    }
  }
  handleSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      suggestions: this.props.products
    });
  };

  handleSuggestionsClearRequested = () => {
    this.setState({
      suggestions: [],
      single: ""
    });
  };

  handleChange = name => (event, { newValue }) => {
    this.setState({
      [name]: newValue
    });
  };

  render() {
    const { classes } = this.props;
    console.log("Suggestions", this.state.suggestions);
    console.log("Data", this.props.products);
    const autosuggestProps = {
      renderInputComponent,
      suggestions: this.props.products,
      onSuggestionsFetchRequested: this.handleSuggestionsFetchRequested,
      onSuggestionsClearRequested: this.handleSuggestionsClearRequested,
      getSuggestionValue,
      renderSuggestion
    };

    return (
      <div className={classes.root}>
        <Autosuggest
          {...autosuggestProps}
          inputProps={{
            classes,
            placeholder: "Search a country (start with a)",
            value: this.state.single,
            onChange: this.handleChange("single")
          }}
          theme={{
            container: classes.container,
            suggestionsContainerOpen: classes.suggestionsContainerOpen,
            suggestionsList: classes.suggestionsList,
            suggestion: classes.suggestion
          }}
          renderSuggestionsContainer={options => (
            <Paper {...options.containerProps} square>
              {options.children}
            </Paper>
          )}
        />
        <div className={classes.divider} />
      </div>
    );
  }
}

SearchComponent.propTypes = {
  classes: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  products: state.search.products,
  isLoading: state.search.isLoadingSearchProducts
});

const mapStateToDispatch = {
  fetchProduct: searchOperation.fetchSearchProducts
  //fetchProduct: productsOperations.fetchProductsById
};

export default connect(
  mapStateToProps,
  mapStateToDispatch
)(withStyles(styles)(SearchComponent));

//export default enhance(SearchComponent);
