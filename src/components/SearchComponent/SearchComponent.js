import React from "react";
import { withStyles } from "@material-ui/core/styles";
import * as searchOperation from "../../modules/search/searchOperations";
import { connect } from "react-redux";
import { compose, lifecycle, withHandlers, withState } from "recompose";
import SearchComponentView from "./SearchComponentView";

const styles = {
  root: {
    flexGrow: 1
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
  }
};

const mapStateToProps = state => ({
  products: state.search.products,
  manyProducts: state.search.products.length > 8,
  isLoading: state.search.isLoadingSearchProducts
});

const mapStateToDispatch = {
  fetchProduct: searchOperation.fetchSearchProducts
};

const SearchComponent = props => <SearchComponentView {...props} />;

const enhance = compose(
  connect(
    mapStateToProps,
    mapStateToDispatch
  ),
  withState("single", "changeSingle", ""),
  withState("suggestions", "changeSuggestions", props => props.products),
  withHandlers({
    handleSuggestionsFetchRequested: props => () => {
      props.changeSuggestions(props.products);
    },
    handleSuggestionsClearRequested: props => () => {
      // props.changeSingle("");
      props.changeSuggestions([]);
    },
    handleChange: props => () => (event, { newValue }) => {
      props.changeSingle(newValue);
    }
  }),
  lifecycle({
    componentDidUpdate(prevProps) {
      if (this.props.single !== "" && prevProps.single !== this.props.single) {
        if (this.props.single.trim().length > 0) {
          this.props.fetchProduct(this.props.single);
        }
      }
      if (this.props.location.pathname !== prevProps.location.pathname) {
        this.props.changeSingle("");
      }
    }
  })
);

export default enhance(withStyles(styles)(SearchComponent));
