import React from "react";
import { connect } from "react-redux";
import CardList from "./CartList";
import * as cartSelectors from "../../modules/cart/cartSelectors";
import * as cartOperations from "../../modules/cart/cartOperations";
import * as cartActions from "../../modules/cart/cartActions";
import { compose, lifecycle } from "recompose";

const mapStateToProps = state => ({
  ids: state.cart.ids,
  items: cartSelectors.getProducts(state),
  entities: state.entities,
  totalPrice: cartSelectors.totalPrice(state)
});

const mapStateToDispatch = {
  remove: cartActions.removeProduct,
  fetchCardProduct: cartOperations.fetchProducts,
  changeCountForProduct: cartActions.changeCountProduct
};

const CardContainer = props => {
  if (!props.items) {
    return <div>Loading...</div>;
  }
  return (
    <CardList
      items={props.items}
      totalPrice={props.totalPrice}
      remove={props.remove}
      changeCountForProduct={props.changeCountForProduct}
      isModal={props.isModal !== undefined}
    />
  );
};

const enhance = compose(
  connect(
    mapStateToProps,
    mapStateToDispatch
  ),
  lifecycle({
    componentDidMount() {
      this.props.fetchCardProduct(this.props.ids);
    }
  })
);

export default enhance(CardContainer);
