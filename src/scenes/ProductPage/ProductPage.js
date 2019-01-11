import React from "react";
import { connect } from "react-redux";
import * as productsSelectors from "../../modules/products/productsSelectors";
import UserProductView from "../../components/ProductView/UserProductView";
import * as productsOperations from "../../modules/products/productsOperations";
import * as cartActions from "../../modules/cart/cartActions";
import { compose, lifecycle } from "recompose";

const mapStateToProps = (state, props) => ({
  product: productsSelectors.getProduct(state, props.match.params.id)
});

const mapStateToDispatch = {
  fetchProducts: productsOperations.fetchProductsById,
  addToCart: cartActions.add
};

const ProductContainer = props => {
  if (!props.product) {
    return <div>Loading...</div>;
  }
  return <UserProductView item={props.product} addToCart={props.addToCart} />;
};

const enhance = compose(
  connect(
    mapStateToProps,
    mapStateToDispatch
  ),
  lifecycle({
    componentDidMount() {
      if (!this.props.product) {
        this.props.fetchProducts(this.props.match.params.id);
      }
    },
    componentDidUpdate() {
      if (!this.props.product) {
        this.props.fetchProducts(this.props.match.params.id);
      }
    }
  })
);

export default enhance(ProductContainer);
