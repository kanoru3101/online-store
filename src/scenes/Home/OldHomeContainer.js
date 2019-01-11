import React from "react";
import { connect } from "react-redux";
import * as productsOperations from "../../modules/products/productsOperations";
import * as productsSelectors from "../../modules/products/productsSelectors";
import * as cartActions from "../../modules/cart/cartActions";
import TablePagination from "@material-ui/core/TablePagination";
import { TablePaginationActionsWrapped } from "../../components/TablePaginationActions/TablePaginationActions";
import Grid from "@material-ui/core/Grid/Grid";
import { compose, lifecycle, withHandlers, withState } from "recompose";
import HomeProductsView from "./HomeProductsView";
import ReactPaginate from "react-paginate";

const mapStateToProps = state => ({
  products: productsSelectors.getProducts(state),
  countProducts: state.products.countProducts,
  isLoading: state.products.isLoading,
  isError: !!state.products.error,
  error: state.products.error
});

const mapStateToDispatch = {
  fetchProducts: productsOperations.fetchProducts,
  addToCart: cartActions.add
};

const HomeContainer = props => {
  if (props.isLoading) {
    return <div>Loading...</div>;
  }

  if (props.isError) {
    return (
      <React.Fragment>
        <h1>Error....</h1>
        <p>{props.error}</p>
      </React.Fragment>
    );
  }
  return (
    <Grid container justify={"center"}>
      <TablePagination
        rowsPerPageOptions={[8, 12, 16]}
        count={props.countProducts}
        rowsPerPage={props.rowsPerPage}
        page={props.page}
        onChangePage={props.handleChangePage}
        onChangeRowsPerPage={props.handleChangeRowsPerPage}
        ActionsComponent={TablePaginationActionsWrapped}
      />

      <HomeProductsView
        products={[...props.products].slice(
          props.rowsPerPage * props.page,
          props.rowsPerPage * (props.page + 1)
        )}
        onAddToCart={props.addToCart}
      />
    </Grid>
  );
};

const enhance = compose(
  connect(
    mapStateToProps,
    mapStateToDispatch
  ),
  withState("page", "handlePages", 0),
  withState("rowsPerPage", "handleRowsPerPage", 8),
  withHandlers({
    handleChangePage: props => (event, page) => {
      props.handlePages(page);
    },
    handleChangeRowsPerPage: props => event => {
      props.handleRowsPerPage(event.target.value);
    }
  }),
  lifecycle({
    componentDidMount() {
      const offset = this.props.rowsPerPage * this.props.page;
      const limit = this.props.rowsPerPage;
      this.props.fetchProducts({ limit, offset });
    },
    componentDidUpdate(prevProps) {
      if (
        (this.props.page !== prevProps.page ||
          this.props.rowsPerPage !== prevProps.rowsPerPage) &&
        this.props.products === prevProps.products &&
        this.props.isLoading === prevProps.isLoading
      ) {
        const limit = this.props.rowsPerPage;
        const offset = this.props.rowsPerPage * this.props.page;
        this.props.fetchProducts({ limit, offset });
      }
    }
  })
);

export default enhance(HomeContainer);
